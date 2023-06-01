import styled from "styled-components";

const CornerPopupWrapper = styled.div`
.popup {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 1rem 1rem 0;
    max-width: 30%;
    max-height: 40%;
    /* background-color: ${props => props.theme.blackToWhite}; */
    background-color: transparent;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px; */

    @media only screen and (max-width: 1000px) {
        max-width: 40%;
        max-height: 40%;
    }
}
.popup-inner {
    position: relative;
    width: 100%;
    max-width: 25rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}
.close-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 8%;
    cursor: pointer;
}
.popup-image{
    box-shadow: 0 0 30px rgba(0,211,169, 0.6);
    @media only screen and (max-width: 767px) {
        display: none;
    }
}
.popup-image-small{
    box-shadow: 0 0 30px rgba(0,211,169, 0.6);
    @media only screen and (min-width: 767px) {
        display: none;
    }
}

.explore-playground-button {
    min-width: 140px;
}
`;

export default CornerPopupWrapper;