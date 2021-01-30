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
    margin: 50px 0 24px 0;
    span{
        font-weight: 600;
    }
   }
   .side{
       vertical-align: center;
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
    padding: 40px 20px 60px 20px;
    .mesh-image{
       width: 200px;
    }
    .description{
        margin: 0px;
    }
    

  }
  @media only screen and (max-width: 780px) {
    .mesh-image{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%
    }
    .section-title{
        margin: 0;
        padding: 0;
    }
    .side-text{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        line-height: 21px;
        margin-top: 0;

    }
    .big-title{
        margin: 0;
        padding: 0;
    }

    .description{
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 300;
        margin: 0;
    }
    .backBtn{
        text-align: center;
    }

  }
  @media only screen and (max-width: 568px) {
    padding: 60px 0 40px 0;
      .section-title{
          margin: 0;
          padding: 0;
      }
     .section-title,
     .content-wrap{
        text-align: center;
    }
    .mesh-image{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%
    }
    .side-text{
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            line-height: 21px;
            margin-top: 0;

    }
    .big-title{
        margin: 0;
        padding: 0;
    }
    
    .description{
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 300;
        margin: 0;
    }
    .backBtn{
        text-align: center;
    }

  }
  
`;
export default MeshSectionWrapper;
