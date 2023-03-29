import styled from "styled-components";

const CustomersWrapper = styled.div`


blockquote {
    padding: 0;
    margin: 0;
}

section.bq-section {
    padding: 30px;
    margin-bottom: 60px;
}

.type-one-wrapper.type-one-wrapper-boxed {
    max-width: 576px;
    margin: 0 auto;
}

.type-one-wrapper.type-one-wrapper-fullwidth {
    max-width: 100%;
}
.links{
    .type-one-quote-base, .type-two-quote-base {
        color: ${props => props.theme.tertiaryColor};
    }
}



/* ========== Type One ========== */

.type-one-quote {
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 250px;
    box-shadow: 2px 2px 25px ${props => props.theme.DarkTheme ? "rgba(255 , 255,  255, 0.1)" : "#cecece"};
    border-radius: 10px;
}

.type-one-quote .type-one-quote-pattern {
    flex-basis: 80px;
    background: linear-gradient(180deg,rgba(71,126,150,1) 0%,rgba(0,179,159,1) 35%,rgba(60,73,79,1) 100%);
    border-radius: 10px 0 0 10px;
}

.type-one-quote .type-one-quote-base {
    flex-basis: calc(100% - 80px);
    background-color: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
    padding: 40px 30px 50px 80px;
    font-size: 11pt;
    line-height: 1.62em;
    border-radius: 0 10px 10px 0;
}

.type-one-quote .type-one-quote-qmark {
    position: absolute;
    top: 50px;
    left: 105px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 42pt;
    color: #999999;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.type-one-quote .type-one-quote-userpic {
    position: absolute;
    top: 80px;
    left: 45px;
    width: 90px;
    height: 90px;
    img{
    border-radius: 50%;
    }
}

.type-one-quote .type-one-quote-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted ${props => props.theme.DarkTheme ? "#EEEEEE" : "black"};

}

.type-one-quote .type-one-quote-meta .type-one-author,
.type-one-quote .type-one-quote-meta .type-one-source {
    color: ${props => props.theme.DarkTheme ? "#EEEEEE" : "black"};

}

.type-one-quote .type-one-quote-meta .type-one-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
}

.type-one-quote .type-one-quote-meta .type-one-author cite {
    font-style: normal;
}

.type-one-quote .type-one-quote-meta .type-one-source {
    font-size: 9pt;
}

@media screen and (max-width: 768px) {

    .type-one-quote .type-one-quote-pattern {
        flex-basis: 20px;
    }

    .type-one-quote .type-one-quote-base {
        flex-basis: calc(100% - 20px);
        padding: 100px 30px 50px 30px;
    }

    .type-one-quote .type-one-quote-userpic {
        width: 50px;
        height: 50px;
        left: 40px;
        top: 20px;
    }

    .type-one-quote .type-one-quote-qmark {
        left: 100px;
        top: 45px;
    }
}






/* ========== Type Two ========== */

.type-two-quote {
    position: relative;
    box-shadow: 2px 2px 25px ${props => props.theme.DarkTheme ? "rgba(255 , 255,  255, 0.1)" : "#cecece"};
    border-radius: 10px;
}

.type-two-quote .type-two-quote-pattern {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(250deg,rgba(71,126,150,1) 0%,rgba(0,179,159,1) 35%,rgba(60,73,79,1) 100%);
    border-radius: 10px 10px 0 0;
}

.type-two-quote .type-two-quote-pattern .type-two-quote-qmark {
    flex-basis: 100px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 60pt;
    color: #ffffff;
    text-align: center;
    height: 80px;
    line-height: 90pt;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.type-two-quote .type-two-quote-userpic {
    position: absolute;
    top: 45px;
    left: calc(50% - 35px);
    width: 90px;
    height: 90px;
    img{
    border-radius: 50%;
    }
}

.type-two-quote .type-two-quote-base {
    flex-basis: calc(100% - 80px);
    background-color: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
    padding: 60px 30px 50px 100px;
    font-size: 11pt;
    line-height: 1.62em;
    border-radius: 0 0 10px 10px;
}

.type-two-quote .type-two-quote-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted ${props => props.theme.DarkTheme ? "#EEEEEE" : "black"};

    text-align: center;
}

.type-two-quote .type-two-quote-meta .type-two-quote-author,
.type-two-quote .type-two-quote-meta .type-two-quote-source {
    color: ${props => props.theme.DarkTheme ? "#EEEEEE" : "black"};
}

.type-two-quote .type-two-quote-meta .type-two-quote-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
}

.type-two-quote .type-two-quote-meta .type-two-quote-author cite {
    font-style: normal;
}

.type-two-quote .type-two-quote-meta .type-two-quote-source {
    font-size: 9pt;
}

@media screen and (max-width: 768px) {

    .type-two-quote .type-two-quote-base {
        padding-left: 30px;
    }
}








/* ========== Type Three ========== */

.type-three-quote {
    position: relative;
    min-height: 250px;
    border-radius: 10px;
    box-shadow: 2px 2px 25px ${props => props.theme.DarkTheme ? "rgba(255 , 255,  255, 0.4)" : "#cecece"};
}

.type-three-quote .type-three-quote-base {
    background: linear-gradient(250deg,rgba(71,126,150,1) 0%,rgba(0,179,159,1) 35%,rgba(60,73,79,1) 100%);
    color: #ffffff;
    font-weight: bold;
    padding: 60px;
    border-radius: 10px;
}

.type-three-quote .type-three-quote-meta {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px dotted #ffffff;
}

.type-three-quote .type-three-quote-meta .type-three-quote-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
}

.type-three-quote .type-three-quote-meta .type-three-quote-author cite {
    font-style: normal;
}

.type-three-quote .type-three-quote-meta .type-three-quote-source {
    font-size: 10pt;
}

.type-three-quote .type-three-quote-qmark {
    position: absolute;
    top: 140px;
    right: 5px;
    font-size: 280pt;
    color: #ffffff;
    opacity: 0.18;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.type-three-quote .type-three-quote-userpic {
    width: 90px;
    height: 90px;
    img{
    border-radius: 50%;
    }
    margin-right: 20px;
}

@media screen and (max-width: 768px) {

    .type-three-quote .type-three-quote-base {
        padding-left: 40px;
        padding-right: 40px;
    }

    .type-three-quote .type-three-quote-meta {
        flex-direction: column;
        text-align: center;
    }

    .type-three-quote .type-three-quote-meta .type-three-quote-userpic {
        margin: 0 auto;
        margin-bottom: 10px;
    }

}

/* ========== Type Four ========== */

.type-four-quote {
    position: relative;
    box-shadow: 2px 2px 25px ${props => props.theme.DarkTheme ? "rgba(255 , 255,  255, 0.1)" : "#cecece"};
    border-radius: 10px;
}

.type-four-quote .type-four-quote-pattern {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(250deg,rgba(71,126,150,1) 0%,rgba(0,179,159,1) 35%,rgba(60,73,79,1) 100%);
    border-radius: 10px 10px 0 0;
}

.type-four-quote .type-four-quote-pattern .type-four-quote-qmark {
    flex-basis: 100px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 60pt;
    color: #ffffff;
    text-align: center;
    height: 80px;
    line-height: 90pt;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.type-four-quote .type-four-quote-userpic {
    position: absolute;
    top: 45px;
    left: calc(50% - 35px);
    width: 90px;
    height: 90px;
    img{
    border-radius: 50%;
    }
}

.type-four-quote .type-four-quote-base {
    flex-basis: calc(100% - 80px);
    background-color: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
    padding: 50px;
    font-size: 14pt;
    font-style: italic;
    line-height: 1.62em;
    border-radius: 0 0 10px 10px;
}

.type-four-quote .type-four-quote-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted ${props => props.theme.DarkTheme ? "#EEEEEE" : "black"};

    text-align: center;
}

.type-four-quote .type-four-quote-meta .type-four-quote-author,
.type-four-quote .type-four-quote-meta .type-four-quote-source {
    color: ${props => props.theme.DarkTheme ? "#EEEEEE" : "black"};
}

.type-four-quote .type-four-quote-meta .type-four-quote-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 12pt;
    font-weight: bold;
}

.type-four-quote .type-four-quote-meta .type-four-quote-author cite {
    font-style: normal;
}

.type-four-quote .type-four-quote-meta .type-four-quote-source {
    font-size: 11pt;
}

@media screen and (max-width: 768px) {

    .type-four-quote .type-four-quote-base {
        padding-left: 30px;
    }
}

`;

export default CustomersWrapper;
