import React from "react";
import Program from "../../../assets/images/programs/Layer5-mentor-program.png";

const ProgramDetails=() => {
  return (
    <div>
      <h3>Engaging with a MeshMate</h3>
      <img
        src={Program}
        alt="Program"
        width="40%" 
        align="right" 
        style={{ margin: "5px" }}
      />

      <h4>What to Expect</h4>
      <p>
                The program pairs experienced Layer5 community members with community
                newcomers to ensure a smooth onboarding experience. There is a lot going in
                the Layer5 community. Projects and working groups move fast. MeshMates are
                committed to helping their mentees in identifying an area of the projects to
                engage within, working groups to join, growing their Cloud Native knowledge,
                and network of relationships. By connecting one-on-one, MeshMates will share
                tips on how to have the best community experience possible.
      </p>
      <p>
                Meshtees are encouraged to get to know their MeshMate as soon as they are
                assigned (MeshMates and Mentees will be introduced in the Layer5 Slack).
                Help your MeshMate understand your current skills, ideal topics of learning,
                and areas of passion. Doing so will help them to point out various aspects
                of projects that you might find your first foothold.
      </p>
      <h4>Meeting Your MeshMate</h4>
      <p>
                Slack’s video chat or Google Hangouts are both available for your use as tools for getting to know one another. While getting acquainted
                and onboarding into the community, we suggest the following goals:
      </p>
      <ul>
        <li>
          <p>
            <b>
              <a href="https://docs.google.com/document/d/1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk/edit?usp=sharing">
                                Get familiar with all of the projects
              </a> - 
            </b>
                            Spend time understanding each of the Layer5 initiatives through high
                            level overviews available in the community drive and in discussion with
                            your MeshMate.
          </p>
        </li>

        <li>
          <p>
            <b>
                            Identify your area of interest - 
            </b>
                        Use time with your MeshMate to
                        familiarize with the architecture and technologies used in the projects.
                        Inform your MeshMate of your current skills and what skills you would
                        like to develop.
          </p>
        </li>

        <li>
          <p>
            <b>
              <a href="https://meshery.io/#getting-started">Run Meshery</a>
            </b> -
                        Put on your user hat and walk-through all of Meshery’s features and
                        functions as a user.
          </p>
        </li>

        <li>
          <p>
            <b>
              <a href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#general-contribution-flow">
                                Build Meshery
              </a>
            </b> - Confirm that you have a usable development environment.
          </p>
        </li>

        <li>
          <p>
            <b>
              <a href="https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+">
                                Contribute
              </a>
            </b> - Grab an open issue or suggest a new one.
          </p>
        </li>
      </ul>
      <h4>Code of Conduct</h4>
      <p>
                The comfort and safety of Layer5 community members is our priority. You must agree to the 
        <a href="/terms/code-of-conduct">Code of Conduct</a> 
                to participate in the Layer5 community, and any
                violations of the Code of Conduct will be taken seriously. To report any violations please fill out 
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform">this incident form</a>.
      </p>

    </div>
  );
};
export default ProgramDetails;
