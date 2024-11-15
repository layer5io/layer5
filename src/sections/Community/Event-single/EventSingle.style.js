import styled from "styled-components";

const EventSinglePageWrapper = styled.div`
    .single-event-block{
        p+p{
            margin-top: 1.75rem;  
        }  
    }
    div.event-title {
        text-align: center;
        margin-bottom: 4rem;
        h3 {
        color:black;
        }
    }
    ul.speakers {
        margin-left:0px;
        padding-left:0px;
    }
    li.speakers {
        margin-left: 2rem;
    }


    .thank-you-box {
        margin: 1rem 0 1rem 2rem;
        max-width: 20rem;
        float: right;
    }

  .form-body{
    float: right;
    margin: 1rem 0 1rem 2rem;
  }

  @media (max-width: 770px) {
        .thank-you-box, .form-body{
            float: none;
            margin: 1rem 0;
            max-width: 100%;
        }           
    }
  .register-form {
    @media (max-width: 770px) {
        display: none;
     }
   }
  .register-form-sm {
    display: none;
    @media (max-width: 770px) {
        display: block;
     }
   }

`;

export default EventSinglePageWrapper;
