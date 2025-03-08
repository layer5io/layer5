import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../../reusecore/Layout";

import CommonForm from "../../../components/CommonForm";

const SignupFormWrapper = styled.div`
h4 {
  font-weight: 700;
}
`;
const SignupForm = () => {
  return (
    <SignupFormWrapper>
      <div>
        <Container style={{ marginBottom: "4rem", padding: "0" }}>
          <Row className="description">
            <Col $lg={7} $md={6} $sm={12} >
              <h4>Who can Apply?</h4>
              <p style={{ fontWeight: "700" }}>Layer5-Sponsored Open Source program is ideal for developers working on projects without a path to commercialization.</p>
              <h4 style={{ marginBottom: "1.5rem" }}>Why join the Layer5-Sponsored Open Source program?</h4>
              <p>
                <strong>Unlock Free Access to Advanced Cloud Native Design Tools</strong><br />
                Gain access to Layer5's drag-and-drop cloud-native infrastructure designer, which includes 350+ built-in models and public catalog patterns, starting templates, enabling teams to design, configure, and deploy their workloads effortlessly.
              </p>
              <p>
                <strong>Collaborative Infrastructure Design</strong><br/>
                Access advanced tools like real-time collaborative infrastructure design and team workspaces. Enhance productivity with shared environments that allow multiple contributors to design, edit, and review infrastructure configurations simultaneously.
              </p>
              <p>
                <strong>Comprehensive Cloud Native Support</strong><br/>
                Leverage tools for discovering existing infrastructure, visualizing Kubernetes applications, and managing multi-cloud clusters. Layer5 provides built-in components, public catalogs, and performance profiling to streamline your project's development.
              </p>
              <h4>Qualification Criteria</h4>
              <p style={{ marginBottom: "0" }}>
              To qualify for the Layer5-Sponsored Open Source program, your project namespace must:
              </p>
              <ul>
                <li>Be shared in public repositories on Github or GitLab etc. and the source code must also be publicly accessible on its respective repository.</li>
                <li>Meet the <a href="https://opensource.org/docs/osd">Open Source Initiative definition.</a></li>
                <li>Not have a pathway to commercialization. Your organization must not seek to make a profit through services or by charging for higher tiers. Accepting donations to sustain your efforts is permissible.</li>
              </ul>
              <h4>Layer5-Sponsored Open Source program Terms of Agreement</h4>
              <ul>
                <li>Program benefits are provided only to project leads and core project committers.</li>
                <li>Program status and benefits are valid for one year and can be renewed if your project still meets the program requirements.</li>
                <li>You may use the program benefits solely for developing non-commercial open-source projects.</li>
                <li>Layer5 licenses are for use only by project collaborators and cannot be shared with any third party.</li>
              </ul>
            </Col>

            <Col $lg={5} $md={6} $sm={12} style={{ padding: "0" }}>
              <CommonForm
                title="Apply Today"
                form="open-source-pricing"
                account_desc="Selected program participants will receive a free access to tools offered by Layer5. Layer5 team may reach out to selected participants."
                submit_title="Thank you for your interest in Layer5-Sponsored Open Source Program"
                submit_body="Your spot on the waiting list is now confirmed. We appreciate your patience as we process a growing number of applicants. Please await further communication regarding your acceptance and the start of the program."
              />
            </Col>
          </Row>
        </Container>
      </div>
    </SignupFormWrapper>
  );
};

export default SignupForm;
