import styled from "styled-components";

const MeshSectionWrapper = styled.section`
  margin: 1rem 0 5rem
  position: relative;
  overflow: hidden;
  .title{ 
    text-transform: uppercase;
    color: #A0AAAA;
  }
  .side-text{
    font-size: 34px;
    font-weight: 400;
    line-height: 44.2px;
    color: ${props => props.theme.headingColor ? props.theme.headingColor : "#2C0075"};
    margin: 0 0 24px 0;
    span{
        font-weight: 600;
    }
   }
  .backBtn {
        color: #00B39F;
        cursor: pointer;
        &:hover{
            .icon{
                transform: translate3d(5px, 0, 0);
            }
         }
        line-height: 21px;
        font-size: 21px;
        margin-top: 21px;
    }
   .mesh-image{
        height: 397px; 
   }
   .icon{
       padding: 0px;
       margin: 3px;
       cursor: pointer;
       vertical-align: middle;
       }
       
   }
   .description{
       margin-bottom: 24px;
       font-style: normal;
       font-weight: 300;
       font-size: 18px;
       line-height: 27px;
   }

  @media only screen and (max-width: 480px) {
    padding: 40px 0 60px 0;
    .mesh-image{
        display: none;
    }

  }
  @media only screen and (max-width: 780px) {
    .mesh-image{
        display: none;
    }

  }
  @media only screen and (max-width: 568px) {
    padding: 60px 0 40px 0;
     .section-title,
     .content-wrap{
        text-align: center;
    }
    .mesh-image{
        display: none;
    }
    .side-text{
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            line-height: 21px;

    }
    .image-col{
        display: none;
    }
    .description{
        text-align: center;
        padding: 20px;
        font-weight: 300;
    }
    .backBtn{
        text-align: center;
    }

  }
  
`;
export default MeshSectionWrapper;
