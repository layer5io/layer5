import styled from "styled-components"

const WorkshopBottomWrapper = styled.div`
  max-width: 1140px;
  margin: auto;

  .bottom-image {
    width: 100%;
    height: 100%;
    margin: auto;
    display: block;
  }

  .request-btn {
    display: block;
    max-width: 215px;
    width: 100%;
    text-align: center;
    margin: 80px auto;
    padding: 10px;
    border: none;
    background-color: orange;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    transition: 0.5s ease-in-out all;

    &:hover {
      background-color: darkcyan;
      color: white;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
    }
  }
`

export default WorkshopBottomWrapper
