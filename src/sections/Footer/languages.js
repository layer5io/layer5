import React from "react";
import { Link } from "gatsby";
import { Row } from "../../reusecore/Layout";

const Language = () => {
    return (
        <div>
            <p className="social">Languages</p>
            <Row>
                <Link className="anchor" to="#"></Link>
            </Row>
        </div>
    );
};

export default Language;