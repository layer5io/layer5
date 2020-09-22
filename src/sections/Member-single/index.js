import React from "react";
import { MemberSingleWrapper } from "./memberSingle.style"
import ProfileCard from "../../components/Profile-card";
import {Col, Container, Row} from "../../reusecore/Layout";

const MemberSingle = ({frontmatter}) =>{
    return(
        <MemberSingleWrapper>
            <Container>
                <Row>
                    <Col xs={12} sm={12} lg={12} >
                        <ProfileCard frontmatter={frontmatter}/>
                    </Col>
                </Row>
            </Container>
        </MemberSingleWrapper>
    );
};

export default MemberSingle;
