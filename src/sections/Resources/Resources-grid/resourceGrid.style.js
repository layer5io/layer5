import styled from "styled-components";
export const ResourcePageWrapper = styled.div`

    .resource-grid-wrapper{
        margin: 0.8rem 0 1.5rem 1.5rem;
    }

    .search{
        display:flex;
        justify-content:flex-end;
        width:100%;
        
        margin-bottom: 0.8rem;
        .searchBox{
            flex:0 0 50%;
            @media only screen and (max-width:990px){
                
                    flex:0 0 100%;
                    max-width:100%;
                
            }
        }
        
    }
    .post-content-block{
        height: 7rem;
    }
    .post-thumb-block{
        height: 10.5rem;
    }
    .post-meta-block{
        p{
            margin:0;
        }
    }
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

    @media only screen and (max-width: 575px) {
        .resource-grid-wrapper{
            margin: 0 auto 5rem;
        }
    }

    .no-resources-page{
    padding: 1rem 1rem 4rem;
    margin: 1rem;
    
    box-shadow: 0px 3px 10px 1px rgba(0, 179, 159, 0.5);
    .errorMessage {
        font-size: 2rem;
        line-height: 2rem;
    }
    .error-text{
        margin-top: 5rem;
    }
    .errorSubtitle {      
        font-weight: 400;       
        font-size: 1.5rem;
        color: gray;
        font-style: italic;
        margin-top: 2.5rem;
    }
        img{
            display: block;
            margin:auto;
            margin-top: 3.125rem;
            width: 14rem;
            @media only screen and (max-width:700px){
                max-width: 100%;
            }
        }
    }
`;
