import styled from "styled-components";

const PopupWrapper = styled.div`

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 9999;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-inner {
    position: relative;
    width: 100%;
    max-width: 55rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 2rem;

}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4%;
    cursor: pointer;
}

.popup-image{
    box-shadow: 0 0 30px rgba(0,211,169, 0.6);
}

`;

export default PopupWrapper;