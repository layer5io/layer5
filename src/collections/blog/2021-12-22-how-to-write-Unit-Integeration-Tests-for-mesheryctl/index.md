---
title: "How to write Unit/Integration Tests for mesheryctl"
date: 2021-12-22 19:32:05 -0530
author: Piyush Singariya
thumbnail: ./Integration-Test.png
category: "Meshery"
tags:
 - Projects
 - Meshery
published: true
---

import { BlogWrapper } from "../Blog.style.js";
import Blockquote from "../../../reusecore/Blockquote";

import UnitTest from "./Unit-Test.png";
import IntegrationTest from "./Integration-Test.png";


<BlogWrapper>

<div class="intro ">
<p>Writing Tests for our code is as essential as we bring new features in our CLI. Unit and Integration Testing helps us in automating the E2E testing, which makes things easier for each developer and brings certainty for a new developer that his/her code changes aren’t breaking any previous features, functions or a mesheryctl command.
</p>
</div>

<p>We use CodeCov to calculate the code-coverage in mesheryctl. Search for Issues marked with area/tests in <a href="https://github.com/meshery/meshery">GitHub - meshery/meshery: Meshery, the service mesh management plane</a>.
</p>

<ul>
    <li><a href="https://codecov.io/gh/meshery/meshery/">Codecov</a> is used to check code-coverage in mesheryctl (login with GitHub to get an in-depth idea of lines-of-code being covered in code coverage).</li>
    <li>You can check the files in CodeCov’s website to figure out which files/functions/lines-of-code haven’t been covered by existing tests.</li>
    <li>Guide: <a href="https://docs.google.com/document/d/1xRlFpElRmybJ3WacgPKXgCSiQ2poJl3iCCV1dAalf0k/edit#heading=h.rzpmb66db1sq">Writing tests for mesheryctl</a>. This guide will help you give a brief intro about how tests are supposed to be written for mesheryctl.</li>
    <li>Contributing to Tests doesn’t always means writing new tests, It also means improving the effectiveness of already written-ones.</li>
</ul>

<p>Unit Tests can be written in two ways-</p>

<ol>
    <li>
        Test mesheryctl subcommand
        <ol>
            <li>Mock Meshery(backend) response if needed</li>
            <li>Grab console output</li>
            <li>Store standard/verified mesheryctl output in a golden file(a text file)</li>
            <li>Match the stored/expected output with what we grab from the console</li>
            <li>Cover as many scenarios as possible, test the situations where errors must be thrown</li>
            <li>This is a standard format, changes can be made accordingly</li>
        </ol>
    </li>
    <li>
        Test mesheryctl functions
        <ol>
            <li>This is the standard testing you may have came across every project</li>
            <li>You write one test dedicated to one function covering all possible test-cases, matching expected outputs</li>
        </ol>
    </li>
</ol>

<p>Integration Tests-</p>

<ol>
            <li>Integrations tests come in frame when we can-not mock things and when we need to make sure action does complete when all the necessary requirements are fulfilled.</li>
            <li>For e.g. mesheryctl system start. The command is in-fact supposed to start Meshery.</li>
            <li>So we run the command to start Meshery in GH workflow and after running the subcommand through the Tests we make sure that Meshery actually started. And if we successfully checked it, boom we aced writing Integration Tests.</li>
            <li>Writing Integration Tests is however a tough task to tackle, but yeah that’s the fun part, running and making sure a command that’s hard to test, and making it automatic through GH workflows.</li>
        </ol>

<p>One most important note-</p>

<p>Writing Tests and making them work is in itself a tough task to do, so even writing one test for a single function counts and makes a big difference over the period, so do not hesitate, start writing tests. Writing One test is enough to raise a PR and to get yourself started with Testing.</p>

<p>The impact that you make with these tests is very high, I can’t even explain in words (I don’t have that good of a vocabulary). Your Tests are going to run in each PR raised for Meshery, for each commit someone is pushing to the PR, so if someone is damaging the supposed behavior of code, your tests is going to catch them red-handed, how cool is that?</p>

<p>And yeah if you’re reading this, make sure to raise a PR with Tests for mesheryctl and add me to review those! Let’s get mesheryctl that 100% code-coverage badge.</p>


</BlogWrapper>