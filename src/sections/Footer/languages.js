import React from "react";
import { Link } from "gatsby";
import { Row } from "../../reusecore/Layout";

import flag1 from "../../assets/images/flags/de.svg";
import flag2 from "../../assets/images/flags/en.svg";
// import flag3 from "../../assets/images/flags/eng.svg";
import flag4 from "../../assets/images/flags/es.svg";
import flag5 from "../../assets/images/flags/fre.svg";
import flag6 from "../../assets/images/flags/ind.svg";
import flag7 from "../../assets/images/flags/it.svg";
import flag8 from "../../assets/images/flags/ja.svg";
import flag9 from "../../assets/images/flags/pt.svg";
import flag10 from "../../assets/images/flags/ru.svg";
import flag11 from "../../assets/images/flags/zh.svg";

import LanguageWrapper from "./language.style";

const Language = () => {
    return (
        <LanguageWrapper>
            <h3 className="title">Languages</h3>
            <Row className="icons">
                <Link className="flag" title="German" to="#"><img height="22px" src={flag1}></img></Link>
                <Link className="flag" title="English" to="#"><img height="22px" src={flag2}></img></Link>
                {/* <Link className="flag" to="#"><img height="22px" src={flag3}></img></Link> */}
                <Link className="flag" title="Spanish" to="#"><img height="22px" src={flag4}></img></Link>
                <Link className="flag" title="French" to="#"><img height="22px" src={flag5}></img></Link>
                <Link className="flag" title="Tamil" to="#"><img height="22px" src={flag6}></img></Link>
                <Link className="flag" title="Italian" to="#"><img height="22px" src={flag7}></img></Link>
                <Link className="flag" title="Japanese" to="#"><img height="22px" src={flag8}></img></Link>
                <Link className="flag" title="Portugese" to="#"><img height="22px" src={flag9}></img></Link>
                <Link className="flag" title="Russiah" to="#"><img height="22px" src={flag10}></img></Link>
                <Link className="flag" title="Chinese" to="#"><img height="22px" src={flag11}></img></Link>
            </Row>
        </LanguageWrapper>
    );
};

export default Language;