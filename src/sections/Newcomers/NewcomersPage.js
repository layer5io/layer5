import React from "react";
import NewcomersPageWrapper from "./NewcomersPageWrapper.style";
import Newcomers from "../../assets/images/newcomers/welcome_newcomers.svg";
import data from "../../assets/data/tutorials/index";

const NewcomersPage = () => {
    return (
        <NewcomersPageWrapper>
            <h1 className="title">Welcome Newcomers! <span>😀</span></h1>
            <div className="newcomersIntro">
                <img src={Newcomers} alt="newComers" className="newcomersImage"/>
                <div>
                    <p>
                        Whether you are a first-time contributor or an open-source veteran, you are welcome to contribute to and
                        actively
                        engage in the development of projects at Layer5.
                    </p>
                    <p>
                        Here are some instructions to get you started and if you haven't joined yet, join the {" "}
                        <a href="http://slack.layer5.io" target="_blank" rel="noreferrer">
                            Slack workspace
                        </a> to collaborate with the
                        community.
                    </p>
                    <p>
                        Also, you can check the quick-links below for jumping straight into things.
                    </p>
                </div>
            </div>
            <tbody className="newcomersTable">
                <th>Information</th>
                <th>Guides</th>
                <th>Issues up for grabs</th>
                <tr>
                    <td>
                        <a 
                            href="https://bit.ly/2SbrRhe" 
                            target="_blank" 
                            rel="noreferrer">Calender</a> | 
                        <a 
                            href="http://slack.layer5.io"
                            target="_blank" 
                            rel="noreferrer">Slack</a> | 
                        <a 
                            href="https://github.com/topics/meshery" 
                            target="_blank" 
                            rel="noreferrer">GitHub</a> | 
                        <a
                            href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
                            target="_blank" 
                            rel="noreferrer">YouTube</a> | 
                        <a 
                            href="https://drive.google.com/drive/folders/0ABH8aabN4WAKUk9PVA"
                            target="_blank" 
                            rel="noreferrer">Drive</a>
                    </td>
                    <td>
                        <a 
                            href="https://docs.google.com/document/d/1tpg2sLxirozNt3Ofr3GdM002f9rExp74EqrsGZBU710/edit?usp=sharing"
                            target="_blank" 
                            rel="noreferrer">First-timers' Welcome Guide</a>
                    </td>
                    <td>
                        <a 
                            href="https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+"
                            target="_blank" 
                            rel="noreferrer">help-wanted</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a 
                            href="https://meet.layer5.io/newcomers" 
                            target="_blank" 
                            rel="noreferrer"
                        >Weekly Zoom on Thursdays at 8AM Central</a>
                    </td>
                    <td>
                        <a 
                            href="https://docs.google.com/document/d/17OPtDE_rdnPQxmk2Kauhm3GwXF1R5dZ3Cj8qZLKdo5E/edit"
                            target="_blank" 
                            rel="noreferrer">Welcome Newcomers!</a>
                    </td>
                    <td>
                        <a 
                            href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22"
                            target="_blank" 
                            rel="noreferrer">good first issue</a>
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <a 
                            href="https://docs.google.com/document/d/1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk/edit#heading=h.504assxl7gpf"
                            target="_blank" 
                            rel="noreferrer">Layer5 Repository Overview</a>
                    </td>
                    <td>

                    </td>
                </tr>
            </tbody>
            <div>
                <h3>How to contribute?</h3>

                <p>
                    The following set of steps outlines the process by which you can openly engage, learn, and participate in the broad
                    set of open source projects at Layer5. If at any time you get stuck, please seek help in the 
                    <a href="https://layer5io.slack.com/archives/C019426UBNY" target="_blank" rel="noreferrer">{" "}#newcomers</a> channel
                    in the Layer5 (joining instructions below). Our {" "}
                    <a target="_blank" rel="noreferrer" href="https://layer5.io/community/meshmates">MeshMates</a> and community members are here to help!
                </p>

                <h4>Finding an issue to work on</h4>

                <ol>
                    <li>
                        Browse the list of 
                        <a 
                            href="https://github.com/layer5io" 
                            target="_blank" 
                            rel="noreferrer"> Layer5 org </a> 
                            issues bearing the “
                        <a
                            href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+"
                            target="_blank" 
                            rel="noreferrer"> good first issue </a>
                            ” label, “
                        <a
                            href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first-timers-only%22+"
                            target="_blank" 
                            rel="noreferrer"> first timers only </a>
                            ” or the“
                        <a 
                            href="https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+"
                            target="_blank" 
                            rel="noreferrer"> help wanted </a>
                            ” label.
                    </li>
                    <li>
                        Alternatively, find an area of interest by reviewing/browsing the 
                        <a
                            href="https://drive.google.com/a/layer5.io/open?id=1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk"
                            target="_blank" 
                            rel="noreferrer"> Layer5Repository Overview </a> 
                            document.
                    </li>
                    <li>
                        After identifying the issue you wish to work on, check whether it has been assigned or not by taking a look at
                        the assignee section on the issue. If it hasn't been, signal your interest by commenting on the issue so that it
                        can be assigned to you.
                    </li>
                </ol>

                <h4>Working on your issue</h4>

                <p>Once an issue has been assigned to you, it’s time to get started! <span>👩🏿‍💻</span>. Make sure you take a look at the 
                    <a href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md"> Contributing Guidelines </a>.
                </p>

                <ol start="4">
                    <li>
                        Be sure to 
                        <a
                            href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"
                            target="_blank" 
                            rel="noreferrer"> sign-off on your commits </a>.
                    </li>
                    <li>
                        Contributions of all sizes are welcome.
                    </li>
                    <li>
                        If you need some additional help, please join Layer5 Slack workspace at {" "}
                        <a 
                            href="http://slack.layer5.io"
                            target="_blank" 
                            rel="noreferrer">http://slack.layer5.io</a>  
                            and find your way to the 
                        <a href="https://layer5io.slack.com/archives/C019426UBNY" target="_blank" rel="noreferrer"> #newcomers </a>  
                        channel. Feel free to ask questions.
                    </li>
                </ol>

                <h4>While your issue is under review</h4>

                <ol start="7">
                    <li>
                        Be patient. There are a large number of contributors and only a small number of maintainers/reviewers. All
                        contributors are equally important to us, and we'll be sure to get to you as soon as possible. In the meanwhile,
                        you are welcome to join our <a href="http://slack.layer5.io" target="_blank" rel="noreferrer">Slack workspace</a> and take a look
                        at all our projects.
                    </li>
                </ol>
            </div>

            <div className="row white-bg row-view">
                <div className="col s12 m12 col-view">
                    <h3 className="center">Tutorials</h3>
                    <div>
                        <table>
                            <tbody className="newcomersTable">
                                <th>Date</th>
                                <th>Topic</th>
                                <th>Resources</th>
                                <th>Presenters</th>
                                {data.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.date}</td>
                                            <td><i>{item.topic}</i></td>
                                            <td>
                                                <a href={item.resources.slides}>slides</a>,
                                                <a href={item.resources.recording}>recording</a>
                                            </td>
                                            <td>
                                                {item.presenters.map((presenter, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <a href={presenter.link}>
                                                                {presenter.name}
                                                            </a>{" "}
                                                        </div>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <p className="center">
                            Interested? Checkout the <a href="/community">Layer5 community</a> and
                            join us on <a href="http://slack.layer5.io">Slack</a>
                        </p>
                    </div>
                </div>
            </div>
        </NewcomersPageWrapper>
    );
};

export default NewcomersPage;
