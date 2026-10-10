/* eslint-env node */

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

/**
 * Builds the list of status action strings for the Copilot PR Handler comment.
 * Matches the logic in .github/workflows/copilot-pr-handler.yml
 */
function buildStatusActions({
  markedReadyRaw = "",
  wasDraftRaw = "",
  approvedCountRaw = "",
  pendingCountRaw = "",
} = {}) {
  const actions = [];

  // Readiness check
  if (markedReadyRaw === "true") {
    actions.push("- ✅ Marked as ready for review (converted from draft)");
  } else if (wasDraftRaw === "true" && markedReadyRaw !== "true") {
    actions.push("- ⚠️ Failed to mark PR as ready for review");
  } else if (wasDraftRaw === "false") {
    actions.push("- ℹ️ PR was already ready for review");
  } else {
    actions.push("- ⚠️ PR draft/readiness status could not be determined");
  }

  // Workflow approval check
  if (pendingCountRaw !== "" && approvedCountRaw !== "") {
    const pendingCount = parseInt(pendingCountRaw, 10);
    const approvedCount = parseInt(approvedCountRaw, 10);

    if (pendingCount === 0) {
      actions.push("- ℹ️ No pending workflow runs required approval");
    } else if (approvedCount === pendingCount) {
      actions.push(`- ✅ Approved ${approvedCount} pending workflow run(s)`);
    } else if (approvedCount > 0) {
      actions.push(`- ⚠️ Approved ${approvedCount} of ${pendingCount} pending workflow run(s)`);
    } else {
      actions.push(`- ⚠️ Failed to approve ${pendingCount} pending workflow run(s)`);
    }
  } else {
    actions.push("- ⚠️ Pending workflow runs status could not be determined");
  }

  return actions;
}

/**
 * Simulates the mark_ready step execution in copilot-pr-handler.yml
 */
async function runMarkReadyStep({ github, core, context, prNumberInput }) {
  const prNumber = context.payload?.pull_request?.number || parseInt(prNumberInput, 10) || null;

  if (!prNumber) {
    core.info("No PR number available, skipping ready for review step");
    return;
  }

  core.info(`Processing PR #${prNumber}`);

  try {
    const { data: pr } = await github.rest.pulls.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: prNumber,
    });

    core.info(`PR #${prNumber} draft status: ${pr.draft}`);
    core.setOutput("was_draft", pr.draft ? "true" : "false");

    if (pr.draft) {
      core.info(`Marking PR #${prNumber} as ready for review...`);

      await github.graphql(
        `
        mutation($pullRequestId: ID!) {
          markPullRequestReadyForReview(input: {pullRequestId: $pullRequestId}) {
            pullRequest {
              isDraft
            }
          }
        }
      `,
        {
          pullRequestId: pr.node_id,
        },
      );

      core.info(`✅ PR #${prNumber} has been marked as ready for review`);
      core.setOutput("marked_ready", "true");
    } else {
      core.info(`PR #${prNumber} is already marked as ready for review`);
      core.setOutput("marked_ready", "false");
    }
  } catch (error) {
    core.warning(`Failed to mark PR as ready for review: ${error.message}`);
    core.setOutput("marked_ready", "false");
  }
}

describe("copilot-pr-handler readiness comment logic", () => {
  it("reports successful conversion when marked_ready is true", () => {
    const actions = buildStatusActions({
      markedReadyRaw: "true",
      wasDraftRaw: "true",
      pendingCountRaw: "0",
      approvedCountRaw: "0",
    });

    assert.ok(
      actions.includes("- ✅ Marked as ready for review (converted from draft)"),
      "Should include successful conversion message",
    );
  });

  it("reports failure when PR was draft but marked_ready is false (failed conversion branch)", () => {
    const actions = buildStatusActions({
      markedReadyRaw: "false",
      wasDraftRaw: "true",
      pendingCountRaw: "0",
      approvedCountRaw: "0",
    });

    assert.ok(
      actions.includes("- ⚠️ Failed to mark PR as ready for review"),
      "Should report failed conversion when marked_ready is false",
    );
  });

  it("reports failure when PR was draft but marked_ready is unset/empty (failed conversion branch)", () => {
    const actions = buildStatusActions({
      markedReadyRaw: "",
      wasDraftRaw: "true",
      pendingCountRaw: "0",
      approvedCountRaw: "0",
    });

    assert.ok(
      actions.includes("- ⚠️ Failed to mark PR as ready for review"),
      "Should report failed conversion when marked_ready is unset",
    );
  });

  it("reports PR was already ready when was_draft is false", () => {
    const actions = buildStatusActions({
      markedReadyRaw: "false",
      wasDraftRaw: "false",
      pendingCountRaw: "0",
      approvedCountRaw: "0",
    });

    assert.ok(
      actions.includes("- ℹ️ PR was already ready for review"),
      "Should report PR was already ready",
    );
  });

  it("reports status undetermined when was_draft is empty", () => {
    const actions = buildStatusActions({
      markedReadyRaw: "",
      wasDraftRaw: "",
      pendingCountRaw: "0",
      approvedCountRaw: "0",
    });

    assert.ok(
      actions.includes("- ⚠️ PR draft/readiness status could not be determined"),
      "Should report undetermined status",
    );
  });
});

/**
 * Simulates the approve_runs step execution in copilot-pr-handler.yml
 */
async function runApproveRunsStep({ github, core, context, prNumberInput }) {
  const prNumber = context.payload?.pull_request?.number || parseInt(prNumberInput, 10) || null;
  let headSha = context.payload?.pull_request?.head?.sha || null;

  // In manual runs (workflow_dispatch), context.payload.pull_request is undefined.
  // Fetch PR metadata using prNumber if head info is missing.
  if (!headSha && prNumber) {
    try {
      const { data: pr } = await github.rest.pulls.get({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: prNumber,
      });
      headSha = headSha || pr.head?.sha || null;
    } catch (prError) {
      core.warning(`Failed to fetch PR details for #${prNumber}: ${prError.message}`);
    }
  }

  if (!headSha) {
    core.info("No head SHA available, skipping workflow approval step");
    return;
  }

  core.info(`Looking for pending workflow runs for PR #${prNumber || "N/A"}`);
  core.info(`Head SHA: ${headSha || "N/A"}`);

  try {
    const runs = await github.paginate(github.rest.actions.listWorkflowRunsForRepo, {
      owner: context.repo.owner,
      repo: context.repo.repo,
      status: "action_required",
      per_page: 100,
    });

    core.info(`Found ${runs.length} workflow run(s) awaiting approval across all pages`);

    // Filter runs strictly for this PR's head SHA
    const pendingRuns = runs.filter((run) => run.head_sha === headSha);

    core.info(`Found ${pendingRuns.length} pending run(s) for this PR`);

    let approvedCount = 0;
    // Approve each pending run
    for (const run of pendingRuns) {
      core.info(`Approving workflow run: ${run.name} (ID: ${run.id})`);

      try {
        await github.rest.actions.approveWorkflowRun({
          owner: context.repo.owner,
          repo: context.repo.repo,
          run_id: run.id,
        });
        core.info(`✅ Approved workflow run: ${run.name} (ID: ${run.id})`);
        approvedCount++;
      } catch (approvalError) {
        core.warning(`Failed to approve run ${run.id}: ${approvalError.message}`);
      }
    }

    core.setOutput("pending_count", pendingRuns.length.toString());
    core.setOutput("approved_count", approvedCount.toString());

    if (pendingRuns.length === 0) {
      core.info("No pending workflow runs found for this PR");
    }
  } catch (error) {
    core.warning(`Failed to approve workflow runs: ${error.message}`);
  }
}

describe("copilot-pr-handler mark_ready step execution", () => {
  it("sets was_draft=true and marked_ready=false when GraphQL conversion throws an error", async () => {
    const outputs = {};
    const warnings = [];
    const logs = [];

    const mockCore = {
      setOutput: (key, val) => {
        outputs[key] = val;
      },
      info: (msg) => logs.push(msg),
      warning: (msg) => warnings.push(msg),
    };

    const mockGithub = {
      rest: {
        pulls: {
          get: async () => ({
            data: { draft: true, node_id: "PR_mock_123" },
          }),
        },
      },
      graphql: async () => {
        throw new Error("GraphQL mutation failed: Forbidden");
      },
    };

    const mockContext = {
      repo: { owner: "layer5io", repo: "layer5" },
      payload: { pull_request: { number: 123 } },
    };

    await runMarkReadyStep({
      github: mockGithub,
      core: mockCore,
      context: mockContext,
    });

    assert.equal(outputs.was_draft, "true");
    assert.equal(outputs.marked_ready, "false");
    assert.ok(warnings.some((w) => w.includes("GraphQL mutation failed: Forbidden")));

    // Verify status action comment with these outputs
    const actions = buildStatusActions({
      wasDraftRaw: outputs.was_draft,
      markedReadyRaw: outputs.marked_ready,
      pendingCountRaw: "0",
      approvedCountRaw: "0",
    });

    assert.ok(
      actions.includes("- ⚠️ Failed to mark PR as ready for review"),
      "Comment actions should include failure warning",
    );
  });
});

describe("copilot-pr-handler approve_runs step execution and comment logic", () => {
  it("leaves outputs unset when PR head lookup fails (undetermined status)", async () => {
    const outputs = {};
    const warnings = [];
    const logs = [];

    const mockCore = {
      setOutput: (key, val) => {
        outputs[key] = val;
      },
      info: (msg) => logs.push(msg),
      warning: (msg) => warnings.push(msg),
    };

    const mockGithub = {
      rest: {
        pulls: {
          get: async () => {
            throw new Error("PR not found");
          },
        },
      },
    };

    const mockContext = {
      repo: { owner: "layer5io", repo: "layer5" },
      payload: {},
    };

    await runApproveRunsStep({
      github: mockGithub,
      core: mockCore,
      context: mockContext,
      prNumberInput: "404",
    });

    assert.equal(outputs.pending_count, undefined);
    assert.equal(outputs.approved_count, undefined);

    const actions = buildStatusActions({
      markedReadyRaw: "false",
      wasDraftRaw: "false",
      pendingCountRaw: outputs.pending_count || "",
      approvedCountRaw: outputs.approved_count || "",
    });

    assert.ok(
      actions.includes("- ⚠️ Pending workflow runs status could not be determined"),
      "Should distinguish failed lookup from 0 pending approvals",
    );
  });

  it("leaves outputs unset when listWorkflowRunsForRepo fails (undetermined status)", async () => {
    const outputs = {};
    const warnings = [];
    const logs = [];

    const mockCore = {
      setOutput: (key, val) => {
        outputs[key] = val;
      },
      info: (msg) => logs.push(msg),
      warning: (msg) => warnings.push(msg),
    };

    const mockGithub = {
      paginate: async () => {
        throw new Error("API rate limit exceeded");
      },
      rest: {
        actions: {
          listWorkflowRunsForRepo: {},
        },
      },
    };

    const mockContext = {
      repo: { owner: "layer5io", repo: "layer5" },
      payload: {
        pull_request: { number: 101, head: { sha: "abc1234" } },
      },
    };

    await runApproveRunsStep({
      github: mockGithub,
      core: mockCore,
      context: mockContext,
    });

    assert.equal(outputs.pending_count, undefined);
    assert.equal(outputs.approved_count, undefined);

    const actions = buildStatusActions({
      markedReadyRaw: "false",
      wasDraftRaw: "false",
      pendingCountRaw: outputs.pending_count || "",
      approvedCountRaw: outputs.approved_count || "",
    });

    assert.ok(
      actions.includes("- ⚠️ Pending workflow runs status could not be determined"),
      "Should report undetermined when listing runs fails",
    );
  });

  it("sets counts to 0 and reports no pending workflow runs required approval when 0 runs match", async () => {
    const outputs = {};
    const logs = [];

    const mockCore = {
      setOutput: (key, val) => {
        outputs[key] = val;
      },
      info: (msg) => logs.push(msg),
      warning: () => {},
    };

    const mockGithub = {
      paginate: async () => [
        { id: 1, head_sha: "other_sha", name: "Build" },
      ],
      rest: {
        actions: {
          listWorkflowRunsForRepo: {},
        },
      },
    };

    const mockContext = {
      repo: { owner: "layer5io", repo: "layer5" },
      payload: {
        pull_request: { number: 101, head: { sha: "my_sha_123" } },
      },
    };

    await runApproveRunsStep({
      github: mockGithub,
      core: mockCore,
      context: mockContext,
    });

    assert.equal(outputs.pending_count, "0");
    assert.equal(outputs.approved_count, "0");

    const actions = buildStatusActions({
      markedReadyRaw: "false",
      wasDraftRaw: "false",
      pendingCountRaw: outputs.pending_count,
      approvedCountRaw: outputs.approved_count,
    });

    assert.ok(
      actions.includes("- ℹ️ No pending workflow runs required approval"),
      "Should clearly state 0 pending runs when lookup succeeded with 0 runs",
    );
  });

  it("approves pending runs matching the head SHA and reports success", async () => {
    const outputs = {};
    const approvedIds = [];

    const mockCore = {
      setOutput: (key, val) => {
        outputs[key] = val;
      },
      info: () => {},
      warning: () => {},
    };

    const mockGithub = {
      paginate: async () => [
        { id: 1001, head_sha: "my_sha_123", name: "CI" },
        { id: 1002, head_sha: "other_sha", name: "Lint" },
        { id: 1003, head_sha: "my_sha_123", name: "E2E" },
      ],
      rest: {
        actions: {
          listWorkflowRunsForRepo: {},
          approveWorkflowRun: async ({ run_id }) => {
            approvedIds.push(run_id);
          },
        },
      },
    };

    const mockContext = {
      repo: { owner: "layer5io", repo: "layer5" },
      payload: {
        pull_request: { number: 101, head: { sha: "my_sha_123" } },
      },
    };

    await runApproveRunsStep({
      github: mockGithub,
      core: mockCore,
      context: mockContext,
    });

    assert.deepEqual(approvedIds, [1001, 1003]);
    assert.equal(outputs.pending_count, "2");
    assert.equal(outputs.approved_count, "2");

    const actions = buildStatusActions({
      markedReadyRaw: "true",
      wasDraftRaw: "true",
      pendingCountRaw: outputs.pending_count,
      approvedCountRaw: outputs.approved_count,
    });

    assert.ok(
      actions.includes("- ✅ Approved 2 pending workflow run(s)"),
      "Should report 2 approved workflow runs",
    );
  });
});
