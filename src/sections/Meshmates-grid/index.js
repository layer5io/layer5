import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import PageHeader from "../../reusecore/PageHeader";
import ProfileCard from "../../components/Profile-card";
import { MembersGridWrapper } from "../../sections/Members-grid/membersGrid.style";
import ProgramDetails from "./ProgramDetails";
import Emeritus from "../Emeritus-grid/Emeritus";

const MeshmatesGrid=props => {
    return (
        <MembersGridWrapper>
            <PageHeader title="Community Meshmates"
                path="Community > Meshmates"
                subtitle="A warm and welcoming collection of open sourcers" />
            <div className="members-page-wrapper">
                <Container>
                    <div className="members-grid-wrapper">
                        <p>
                            Layer5 MeshMates are committed to helping community members be successful contributors. MeshMates aid in identifying areas of projects to engage within, working groups to join, and in helping community members grow in their open source and cloud native knowledge. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible.
</p>
                        <Row>
                            {props.data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <Link to={fields.slug}>
                                        <ProfileCard frontmatter={frontmatter} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                        <p class="indent">
                            MeshMate is a distinction that Layer5 awards select members of the community that who innately align with the Layer5 culture of helping others, paying it forward, and have a commitment to sharing their knowledge of Layer5 projects with the community. MeshMates are Layer5 ambassadors (not employees) and their commitment to helping others and sharing their expertise has a huge impact on the Layer5 community – don’t hesitate to reach out to them!
</p>
                    </div>
                    <ProgramDetails />
                    <Emeritus />

                </Container>
            </div>
        </MembersGridWrapper>
    );
};

export default MeshmatesGrid;
