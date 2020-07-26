import React from "react";
import { Link } from "gatsby";
import { Row } from "../../reusecore/Layout";

import flag from "../../assets/images/flags/de.svg";
import Languagestyle from "./language.style";

const Language = () => {
    return (
        <Languagestyle>
            <p>Languages</p>
            <Row>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
                <Link className="flag" to="#"><img height="25px" src={flag}></img></Link>
            </Row>
        </Languagestyle>
    );
};

export default Language;