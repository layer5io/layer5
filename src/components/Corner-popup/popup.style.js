import styled from "styled-components";

const CornerPopupWrapper = styled.div`
.popup {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 2rem 3rem 0;
    width: 100%;
    width: 26rem;
    /* background-color: ${props => props.theme.blackToWhite}; */
    background-color: transparent;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px; */
    @media only screen and (max-width: 1000px) {
        max-width: 22rem;
    }
    @media only screen and (max-width: 640px) {
        width: 20rem;
        max-width: 55%;
    }
}
.popup-inner {
    position: relative;
    width: 100%;
    background-color: ${props => props.theme.blackToWhite};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    align-items: center;
    padding: 1rem;
    border: 1px solid #00d3a9;
    border-radius: 5%;
    box-shadow: 0 0 30px rgba(0,211,169, 0.6);
    @media only screen and (max-width: 640px) {
        padding: 0.5rem;
        gap: 0.375rem;
    }
}
.close-btn {
    position: absolute;
    top: 0rem;
    right: 0rem;
    cursor: pointer;
}
.popup-image{
    border: 1px solid ${props => props.theme.whiteToBlack};
    border-radius: 3%;
}
/* .popup-image-small{
    box-shadow: 0 0 30px rgba(0,211,169, 0.6);
    @media only screen and (min-width: 767px) {
        display: none;
    }
} */

.explore-playground-button {
    min-width: 140px;
    @media only screen and (max-width: 422px) {
        font-size: 0.75rem;
        min-width: 100px;
    }

}

svg {
    .closeIcon_svg__cls-1{
        fill: ${props => props.theme.whiteToBlack};
    }
}
`;

export default CornerPopupWrapper;