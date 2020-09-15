import styled from "styled-components";


const GSODSectionWrapper = styled.div`
element.style {
    font-size: 0.7em;
    padding-bottom: 40px;
    padding-top: 10px;
    width: 300px;
}
.btn {
    background-color: #3eb5a1;
}
.waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
}
.btn, .btn-large {
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: 0.5px;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
    cursor: pointer;
}
.btn, .btn-large, .btn-floating, .btn-large, .btn-flat {
    font-size: 1rem;
    outline: 0;
}
.btn, .btn-large, .btn-flat {
    border: none;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 2rem;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
}
.z-depth-2 {
    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.l5-dark-grey-text {
    color: #3c494e !important;
}
.l5-dark-yellow {
    background-color: #ebc017 !important;
}
.l5-dark-grey-text {
    color: var(--main-dark-grey) !important;
}
injected stylesheet
.st-current {
    outline: blue dashed 1px !important;
}
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    font-weight: inherit;
}
a {
    text-decoration: none;
}
    padding: 140px 0 60px 0;
    position: relative;
    .CTA-content{
        h2{
            font-size: 40px;
            line-height: 56px;
            font-weight: 600;
            margin-bottom: 30px;
        }
        p{
            font-weight: 300;
            margin-bottom: 45px;
        }
    }
    
  
    @media only screen and (max-width: 1024px) {
        .CTA-content{
            h2{
                font-size: 35px;
                line-height: 45px;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 140px 0 120px 0;
        .CTA-content{
            h2{
                font-size: 28px;
                line-height: 38px;
            }
        }
    }
    @media only screen and (max-width: 568px) {
        .CTA-content{
           text-align: center;
           margin-bottom: 70px;
        }
    }
    
`;

export default GSODSectionWrapper; 