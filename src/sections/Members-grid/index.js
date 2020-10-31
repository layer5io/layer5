import React from "react";
import Select from "react-select";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import ProfileCard from "../../components/Profile-card";

import { MembersGridWrapper,selectStyles, dropdownTheme} from "./membersGrid.style";


const MembersGrid=props => {
    return (
        <MembersGridWrapper>
            <PageHeader title="Community Members"
                path="Community > Members"
                subtitle="A warm and welcoming collection of open sourcers" />
            <div className="members-page-wrapper">
                <Container>
                    <div className="members-grid-wrapper">
                        <Row>
                            <Col xs={12} sm={9} lg={9}></Col>
                            <Col xs={12} sm={3} lg={3}>
                                <Select
                                    isSearchable={false}
                                    styles = {selectStyles}
                                    options={props.options}
                                    value={props.currMember}
                                    onChange={props.handleChange}
                                    defaultValue= {props.options[0]}
                                    theme={dropdownTheme}
                                />
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            {props.data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <Link to={fields.slug}>
                                        <ProfileCard frontmatter={frontmatter} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </MembersGridWrapper>
    );
};

export default MembersGrid;
