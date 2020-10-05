import styled from "styled-components"

export const ColorBoxWrapper = styled.div`
  .PalletBox {
    color: #fff;

    height: 6.5rem;
    background-color: ${props => (props.bgcolor ? props.bgcolor : "red")};
    margin-bottom: 15px;
    width: 6.5rem;
    font-size: 0.8rem;
    line-height: 1.3rem;
    padding: 0.7em;
    font-weight: bold;
    text-align: center;
    margin-right: 5em;
  }
`
