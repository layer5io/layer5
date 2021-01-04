import React from "react";
import { MesheryPlatformsWrapper } from "./MesheryPlatforms.style";
import {Container} from "../../reusecore/Layout";

const MesheryPlatforms = () =>{
    return(
        <MesheryPlatformsWrapper>
            <div className="background-wrapper"/>
            <Container>
                <div className="content">
                    <h2>Step 1: Choose your platform</h2>

                </div>
            </Container>
        </MesheryPlatformsWrapper>
    );
};

export default MesheryPlatforms;
