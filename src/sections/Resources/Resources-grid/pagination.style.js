import styled from "styled-components";

export const ResourcePaginationWrapper = styled.div`
.btn-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto 2rem;
  }
  .btn {
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;
    transition: all 0.3s linear;
    :hover {
        box-shadow: 0px 1px 5px 1px rgba(0, 179, 159, 0.5);
    }
  }
  .page-btn {
    background: ${props => props.theme.white};
    border: solid 2px;
    border-color: ${props => props.theme.secondaryColor};
  }
  .active-btn {
    background: ${props => props.theme.secondaryColor};
    border-color: transparent;
    color: #fff;
  }
          
`;

export default ResourcePaginationWrapper;