import React from "react";
import { Link } from "gatsby";
import { Row } from "../../reusecore/Layout";

import flag1 from "../../assets/images/footer/flags/de.svg";
import flag2 from "../../assets/images/footer/flags/en.svg";
// import flag3 from "../../assets/images/footer/flags/eng.svg";
import flag4 from "../../assets/images/footer/flags/es.svg";
import flag5 from "../../assets/images/footer/flags/fre.svg";
import flag6 from "../../assets/images/footer/flags/ind.svg";
import flag7 from "../../assets/images/footer/flags/it.svg";
import flag8 from "../../assets/images/footer/flags/ja.svg";
import flag9 from "../../assets/images/footer/flags/pt.svg";
import flag10 from "../../assets/images/footer/flags/ru.svg";
import flag11 from "../../assets/images/footer/flags/zh.svg";

import LanguageWrapper from "./language.style";

const Language = () => {
    return (
        <LanguageWrapper>
            <h3 className="title">Languages</h3>
            <Row className="icons">
                <Link className="flag" title="German" to="#"><img src={flag1} alt="German Flag" /></Link>
                <Link className="flag" title="English" to="#"><img src={flag2} alt="English Flag" /></Link>
                {/* <Link className="flag" to="#"><img height="22px" src={flag3}></img></Link> */}
                <Link className="flag" title="Spanish" to="#"><img src={flag4} alt="Spanish Flag" /></Link>
                <Link className="flag" title="French" to="#"><img src={flag5} alt="France Flag" /></Link>
                <Link className="flag" title="Tamil" to="#"><img src={flag6} alt="Indian Flag" /></Link>
                <Link className="flag" title="Italian" to="#"><img src={flag7} alt="Italy Flag" /></Link>
                <Link className="flag" title="Japanese" to="#"><img src={flag8} alt="Japan Flag" /></Link>
                <Link className="flag" title="Portugese" to="#"><img src={flag9} alt="Portugese Flag" /></Link>
                <Link className="flag" title="Russiah" to="#"><img src={flag10} alt="Russia Flag" /></Link>
                <Link className="flag" title="Chinese" to="#"><img src={flag11} alt="China Flag" /></Link>
            </Row>
        </LanguageWrapper>
    );
};

export default Language;