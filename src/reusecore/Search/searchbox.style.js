import styled from "styled-components";

export const SearchWrapper = styled.div`
  .search-box {
    position: relative;
    display: flex;
    @media screen and (min-width: 768px) {    
      width: 30vw;
    }
    
    input {
      flex-basis: 100%;
      font-size: inherit;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.headingColor};
      background-color: ${(props) => props.theme.shadowLightColor};
      &:focus {
        /* border-color: ${(props) => props.theme.primaryColor}; */
        border-color: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px
      }
    }
    button {
      position: absolute;
      right: 0px;
      top: 0;
      cursor: none;
      height: 100%;
      min-width: 20px;
      border-radius: 5px;
      background: transparent;
      font-size: 1.5rem;
      color: ${(props) => props.theme.headingColor};

      &:hover{
        box-shadow: none;
      }
    }
  }
  .integration-search{
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {    
      width: 50vw;
    }

   input{
    border:none;
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 9px 0px;
    
   }
   input:focus{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 9px;
   }
  }
`;
