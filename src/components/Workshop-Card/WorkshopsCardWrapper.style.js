import styled from "styled-components"

const WorkshopCardWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 20px;

    .title{
      text-align: center;
      font-size: 20px;
      padding-bottom: 10px;
    }

    .image{
      position: relative;
      overflow: hidden;
      display: inline-block;
      width: 100%;
      height: 190px;
      transition: 0.5s ease-in-out all;
      padding: 10px;
    }

    .links{
      margin-left: 10px;
      margin-bottom: 10px;
      color: turquoise;
      font-size: 18px;
      font-weight: 600;
      padding: 0px 5px;
      transition: 0.5s ease-in-out all;

      &:hover{
        background-color: gold;
        color: #fff;
        border-radius: 5px;
      }
    }

    .para{
      padding: 10px;
    }
  @media only screen and (max-width: 480px) {

  }
`

export default WorkshopCardWrapper
