import React from 'react'
import { Link } from "gatsby";
import { Row, Col } from "../../reusecore/Layout";
import ProfileCard from "../../components/Profile-card";

const Emeritus=props => {
    return (
        <div>
            <h3>Layer5 MeshMate Emeritus</h3>
            <p>
                O​nce a MeshMate, always a MeshMate. We thank and salute our previous MeshMates. Each has served the Layer5 community selflessly.
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
        </div>
    )
}

export default Emeritus
