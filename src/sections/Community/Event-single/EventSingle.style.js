import styled from "styled-components";

const EventSinglePageWrapper = styled.div`
    .single-event-wrapper{
        padding: 3rem 0 5rem;
    }
    .single-event-block{
        p+p{
            margin-top: 1.75rem;  
        }  
    }
    div.event-title {
        text-align: center;
        margin-bottom: 4rem;
    }
    ul.speakers {
        margin-left:0px;
        padding-left:0px;
    }
    li.speakers {
        margin-left: 2rem;
    }


    .thank-you-box {
        padding: 2rem;
        margin: 1rem 0 1rem 2rem;
        max-width: 20rem;
        background-color: ${props => props.theme.darkJungleGreenColor};
        border-radius: 2rem;
        float: right;
        
        h2, h3 {
          color: white;
        }
        h2{
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        p {
          margin-top: .85rem;
          color: white;
        }
    }

  .form-body{
    box-shadow: 0px 5px 5px 2px ${props => props.theme.primaryLightColor};
    float: right;
    margin: 1rem 0 1rem 2rem;

      .required-sign {
        color: #8b0000;
      }
  
    .form-title {
      padding: 1rem;
      text-align: center;
      background-color: ${props => props.theme.secondaryColor};
      color: white;
    }
  
      .form {
          font-size: .9rem;
          padding: 1rem;
  
          label {
            display: block;
            font-size: 1rem;
          }
          
          .form-name {
            font-weight: 600;
            margin: 20px 0px 5px 3px;
            display: block;
          }
  
        .text-field {
          width: 100%;
          border: 1px solid black;
          border-radius: 10px;
          padding: .5rem .5rem;
          font-size: .85rem;
        }
  
        .text-field:focus {
          border: 2px solid #00B39F;
        }
  
        .btn {
          margin: 1.9rem auto;
          display: block;
          width: auto;
        }
      }
    }
    @media (max-width: 770px) {
        .thank-you-box, .form-body{
            float: none;
            margin: 1rem 0;
            max-width: 100%;
        }       
         
    }

`;

export default EventSinglePageWrapper;
