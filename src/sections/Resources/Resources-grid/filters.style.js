import styled from "styled-components";

export const ResourceNavigationWrapper = styled.div`

  .heading{
    margin-bottom:1rem;
    font-size: 1.5rem;
    border-bottom: 2px solid rgba(153, 151, 151, 0.2);
    span{
      float: right;
      font-size: 0.9rem;
      color: ${(props) => props.theme.primaryColor};
      cursor: pointer;
      .clear-icon{
        vertical-align: middle;
        width: 1rem; 
        height: 1rem; 
      }
    }
  }
  .heading>span:hover{
    color: ${(props) => props.theme.secondaryColor};
  }

  .heading-name{
    font-size: 1.5rem;
  }

  .clear-disabled{
    display: none;
  }

  .filter-icon{
    width: 1.5rem; 
    height: 1.5rem; 
    cursor: pointer;
    margin : 0.2rem;
  }

  .filter-menu-icon{
    display : none;
  }
  .filter-btn{
    display: flex;
    justify-content: space-between;
    background-color: #FFF;
    font-weight: 500;
    border: none;
    span{
      padding-left: 1rem;
      float: right;
      color: #000000;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

label {
        display: block;
        padding-left: 15px;
        margin-top: 1px;
        vertical-align: bottom;
        text-indent: -15px; 
        }
input {
        width: 22px;
        height: 22px;
        padding: 0;
        margin: 0 1rem 1rem 0;
        display: inline;
        vertical-align: middle;
        position: relative;
        top: -1px;
      }
input[type="checkbox"] {
        margin: 0;
        &:hover{
          cursor: pointer;
        }
        }

        ul{
            display:flex;
            flex-direction:column;
            white-space: nowrap;
          }
        
          .ul{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            list-style: none;
          }
        
          .total{
            float: right;
            color: ${props => props.theme.primaryLightColor}; 
            &:hover{
                  color: ${props => props.theme.secondaryColor}; 
                  border-color: ${props => props.theme.secondaryColor}; 
                  cursor: pointer;
          }
          }
           .ul-open{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            padding-left:0;
            list-style: none;
            height:auto !important;
            opacity:1 !important;
            margin-bottom: 2rem;
            transition:all .4s !important;
           }
        
          .menu-icon{
            width: 1.5rem; 
            height: 1.5rem; 
            cursor: pointer;
            float: right;
            vertical-align: bottom;
          }
            .toggle-btn{
                p{
                    display:inline;
                }
                cursor: pointer;
            }
         
            .ul{
             opacity:0;
             height:0;
             transition:none;
             visibility:hidden;
            }
         
            .ul-open{
             visibility:visible;
            }

  @media only screen and (max-width: 750px){
       position: initial;
       margin-left: 4rem;
       margin-right: 2rem;
       width: auto;
       .filter{
        display:contents;
       }
    }

    @media only screen and (max-width: 991px) {
      .filter-menu-icon{
        display: flex;
      }
      .filter-menu-icon>span{
        font-size: 1.2rem;
        font-weight: 600;
        margin : 0 1rem;
      }
      .filter-close{
        width: 1.7rem; 
        height: 1.7rem;
      }
      .filters-boxes{
        display: none;
      }
      .heading{
        display: flex;
        justify-content: space-between;
        border: none;
      }
      .heading-name{
        display : none;
      }
      #filters-boxes{
        display : block
      }
    }
    @media only screen and (max-width: 575px) {
      .heading{
        margin-left: 0;
        margin-bottom: 2.5rem
      }
      .filter-close{
        width: 1.7rem; 
        height: 1.7rem;
      }
    }
    @media only screen and (max-width: 430px){
      .filter{
        font-size: 1rem;
      }
      .filter-btn>span{
        font-size: 1rem;
        font-weight: bold;
        padding-left: 0.6rem;
      }
      .filter-icon{
        width: 1rem;
        height: 1rem;
      }

      .clear-enabled{
        font-size: 0.5rem;
      }
      
      .filter-close{
        width: 1.2rem; 
        height: 1.2rem;
      }
     }

     
    
           
`;

export default ResourceNavigationWrapper;