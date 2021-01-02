import React from "react";
import NewcomersPageWrapper from "./NewcomersPageWrapper.style";
import Image1 from "../../assets/images/newcomers/Rectangle 399.svg";
import Image2 from "../../assets/images/newcomers/Rectangle 401.svg";
import Image3 from "../../assets/images/newcomers/Rectangle 402.svg";
import Image4 from "../../assets/images/newcomers/Rectangle 403.svg";
import data from "../../assets/data/tutorials/index";
import Button from "../../reusecore/Button";

const NewcomersPage = () => {
    return (
        <NewcomersPageWrapper>
            <div className=" newcomers ">
                <h1 className="title">Welcome Newcomers!</h1>
                <div className="newcomersIntro">
                    <p>
                      Whether you are a first-time contributor or an open-source
                      veteran, you are welcome to contribute to and actively engage in
                      the development of projects at Layer5. Here are some instructions
                      to get you started and if you haven't joined yet, join the{" "}
                        <a href="http://slack.layer5.io" target="_blank" rel="noreferrer">
                          Slack workspace
                        </a>{" "}
                      to collaborate with the community. Also, you can check the
                      quick-links below for jumping straight into things.
                    </p>
                </div>
                <div className="newcomersBody">
                    <div className="contributorsJourney">
                        <p>Contributor's Journey</p>
                        <p></p>
                    </div>
                    <div className="contributorsImage">
                        <svg
                            width="425"
                            height="360"
                            viewBox="0 0 425 360"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40 154C49.0411 155.66 72.6466 165.553 94.7397 191.846C105.589 206.287 137.249 225.807 177.096 188.36C189.096 174.749 219.408 150.016 244.658 159.976C251.397 164.623 267.244 176.807 276.712 188.36C283.781 198.485 302.751 215.648 328 207.283"
                                stroke="black"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeDasharray="15 15"
                            />
                            <path
                                d="M153.5 330L40.0839 271.559C39.4183 271.216 39 270.529 39 269.781V37.3832C39 35.8618 40.6312 34.8975 41.9641 35.6309L153.5 97M153.5 330V97M153.5 330L267.5 271M153.5 97L267.5 34M267.5 34V271M267.5 34L381.922 93.44C382.584 93.7841 383 94.4684 383 95.2148V326.733C383 328.227 381.421 329.193 380.09 328.514L267.5 271"
                                stroke="black"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M67 253.321V220.814C67 219.309 68.6003 218.343 69.9321 219.045L121.932 246.437C122.589 246.783 123 247.465 123 248.207V282.107C123 283.63 121.364 284.595 120.031 283.857L68.0314 255.071C67.395 254.719 67 254.049 67 253.321Z"
                                stroke="black"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M334 144.5C317.6 142.1 312.833 154.833 312.5 161.5C310.967 173.385 328.601 205.508 338.727 221.951C339.386 223.022 340.84 223.211 341.749 222.343C347.164 217.171 363.421 201.321 365.5 195.5C368 188.5 369.833 180.167 369 176.5C361.4 151.7 342.5 144.833 334 144.5Z"
                                stroke="black"
                                strokeWidth="10"
                            />
                            <path
                                d="M338.36 163.238C331.406 161.625 330.633 168.614 331.116 172.309C331.889 178.76 337.877 182.389 340.775 183.397C346.571 185.816 348.663 180.373 348.985 177.349C349.372 167.673 342.063 163.91 338.36 163.238Z"
                                stroke="black"
                                strokeWidth="10"
                            />
                        </svg>
                    </div>
                </div>

                <div className="body">
                    <h3>How to contribute?</h3>
                    <p>
                    The following set of steps outlines the process by which you can
                    openly engage, learn, and participate in the broad set of open
                    source projects at Layer5. If at any time you get stuck, please
                    seek help in the
                        <a
                            href="https://layer5io.slack.com/archives/C019426UBNY"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                      #newcomers
                        </a>{" "}
                    channel in the Layer5 (joining instructions below). Our{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://layer5.io/community/meshmates"
                        >
                      MeshMates
                        </a>{" "}
                    and community members are here to help!
                    </p>

                    <div className="newcomersContribute ">
                        <div>
                            <img src={Image2} className="newcomersImage" />
                        </div>
                        <div className="newcomersDescription left">
                            <h4>Finding an issue to work on</h4>

                            <ol type="I">
                                <li>
                          Browse the list of
                                    <a
                                        href="https://github.com/layer5io"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            Layer5 org{" "}
                                    </a>
                          issues bearing the “
                                    <a
                                        href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            good first issue{" "}
                                    </a>
                          ” label, “
                                    <a
                                        href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first-timers-only%22+"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            first timers only{" "}
                                    </a>
                          ” or the “
                                    <a
                                        href="https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            help wanted{" "}
                                    </a>
                          ” label.
                                </li>
                                <li>
                          Alternatively, find an area of interest by checking out the
                                    <a
                                        href="https://drive.google.com/a/layer5.io/open?id=1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            Layer5Repository Overview{" "}
                                    </a>
                          document.
                                </li>
                                <li>
                          After identifying the issue you wish to work on, check
                          whether it has been assigned or not by taking a look at the
                          assignee section on the issue. If it hasn't been, signal
                          your interest by commenting on the issue so that it can be
                          assigned to you.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="newcomersContribute working">
                        <div className="newcomersDescription right">
                            <h4>Working on your issue</h4>

                            <ol type="I">
                                <li>
                          Once an issue has been assigned to you, it’s time to get
                          started!Make sure you take a look at the
                                    <a href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md">
                                        {" "}
                            Contributing <br></br> Guidelines
                                    </a>
                          .
                                </li>

                                <li>
                          Be sure to
                                    <a
                                        href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            sign-off on your commits{" "}
                                    </a>
                          .
                                </li>
                                <li>Contributions of all sizes are welcome.</li>
                                <li>
                          If you need some additional help, please join Layer5 Slack
                          workspace at{" "}
                                    <a
                                        href="http://slack.layer5.io"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                            http://slack.layer5.io
                                    </a>
                          and find your way to the
                                    <a
                                        href="https://layer5io.slack.com/archives/C019426UBNY"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {" "}
                            #newcomers{" "}
                                    </a>
                          channel. Feel free to ask questions.
                                </li>
                            </ol>
                        </div>
                        <div>
                            <img src={Image3} className="newcomersImage" />
                        </div>
                    </div>
                    <div className="newcomersContribute">
                        <div>
                            <img src={Image4} className="newcomersImage" />
                        </div>{" "}
                        <div className="newcomersDescription left scnd">
                            <h4>While your issue is under review</h4>

                            <ol start="1">
                                <li>
                          Be patient. There are a large number of contributors and
                          only a small number of maintainers/reviewers. All
                          contributors are equally important to us, and we'll be sure
                          to get to you as soon as possible. In the meanwhile, you are
                          welcome to join our{" "}
                                    <a
                                        href="http://slack.layer5.io"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                            Slack workspace
                                    </a>{" "}
                          and take a look at all our projects.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="row white-bg row-view">
                    <div className="col s12 m12 col-view">
                        <h3 className="center">Tutorials</h3>
                        <p>Check out some of our resources on getting started</p>
                        <div>
                            <table>
                                <tbody className="newcomersTable">
                                    <th className="date">Date</th>
                                    <th>Topic</th>
                                    <th>Resources</th>
                                    <th>Presenters</th>
                                    {data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="date">{item.date}</td>
                                                <td>
                                                    <p>{item.topic}</p>
                                                </td>
                                                <td>
                                                    <a href={item.resources.slides}>slides</a>,
                                                    <a href={item.resources.recording}>recording</a>
                                                </td>
                                                <td>
                                                    {item.presenters.map((presenter, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <a href={presenter.link}>{presenter.name}</a>{" "}
                                                            </div>
                                                        );
                                                    })}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="newcomersEnd">
                                <img src={Image1} />
                                <div className="centered">
                                    <p>
                                        <>
                        Checkout the <a href="/community">Layer5 community</a>{" "}
                        and join us on{" "}
                                            <a href="http://slack.layer5.io">Slack</a>
                                        </>
                                        <br></br>
                                        <Button className="newcomersButton" title="Let's go" />
                                    </p>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NewcomersPageWrapper>
    );
};

export default NewcomersPage;
