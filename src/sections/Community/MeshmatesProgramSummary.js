import React from "react";
import meshmateimg from "../../assets/images/community/meshmate-stack.svg";
import { Link } from "gatsby";
 
export default function MeshmatesProgramSummary() {
    return (
        <div>
            <div>
                <h2>Layer5 MeshMates</h2>
                <img src={meshmateimg} align="right" width="40%" alt="meshmate-stack" />
                <h5>An onboarding and mentoring program</h5>
                <p className="indent">
                    The Layer5 community is growing at a tremendous rate. We value our connections and that is what makes us unique. Whether it is your first Layer5 meeting or your tenth contribution, we want to make sure that you are supported and equipped to take advantage of all of that the Layer5 community has to offer. 
                </p>
                <p className="indent">  
                    In the Layer5 mentor program, we will match you up with a MeshMate to support and guide you along the way, by enabling you to identify your area of interests within the projects, directing you towards working groups to join, growing your Cloud Native knowledge, and establishing a network of relationships.
                </p>
                <div width="100%" className="center">
                    <h3>
                        <Link to="/community/meshmates">
                            Layer5 MeshMate Program
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
 