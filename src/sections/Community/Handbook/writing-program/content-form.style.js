import styled from "styled-components";

const ContentFormWrapper = styled.section`
    .validation{
      margin: 0;
      font-size: 0.7rem;
      color: red;
    }
    .thank-you-box {
      padding: 2rem;
      margin: 1rem;
      background-color: ${props => props.theme.darkJungleGreenColor};
      border-radius: 0.1rem;
      min-height: 20rem;
      
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
    .form{
        font-size: .9rem;
        margin: 0 1rem 1rem;
        padding: 1rem;
        
    
          label {
            display: block;
            font-size: 1rem;
          }
    
          .required-sign {
            color: #8b0000;
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
`;

export default ContentFormWrapper;
