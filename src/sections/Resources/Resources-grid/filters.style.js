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
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

      .clear-icon{
        vertical-align: middle;
        width: 1rem; 
        height: 1rem; 
      }
    }
  }

  .heading-name{
    margin: 0 0 0.3rem 0;
  }
  .heading-name>span:hover{
    color: ${(props) => props.theme.secondaryColor};
  }

  .heading-name>strong{
    font-size: 1.5rem;
  }

  .mob-view{
    display: none;
  }

  .clear-disabled{
    display: none;
  }

  .filter-icon{
    width: 1.2rem; 
    height: 1.2rem; 
    cursor: pointer;
    margin : 0.2rem;
  }

  .filter-menu-icon{
    display : none;
  }
  .filter-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.secondaryColor};
    color: #FFF;
    font-weight: 500;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    span{
      padding-left: 0.5rem;
      float: right;
      color: #FFF;
      font-size: 1.2rem;
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
            color: ${props => props.theme.grey737373ToGreyB3B3B3};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

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

    @media only screen and (max-width: 991px) {
      margin-left: 1.5rem;
      .filter-menu-icon{
        display: flex;
      }
      .filter-menu-icon>span{
        font-size: 1.2rem;
        font-weight: 600;
        margin : 0 1rem;
      }
      .filter-close{
        width: 1.2rem; 
        height: 1.2rem;
      }
      .filters-boxes{
        display: none;
      }
      .heading{
        display: flex;
        justify-content: space-between;
        border: none;
      }
      .heading-name>strong{
        display : none;
      }
      .desk-view{
        display:none;
      }
      .mob-view{
        display:block;
      }
      .clear-disable{
        display: none;
      }
      #filters-boxes{
        display : block
      }
    }
    @media only screen and (max-width: 575px) {
      margin-left: 0rem;
      .heading{
        margin-left: 0;
        margin-bottom: 1.5rem
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