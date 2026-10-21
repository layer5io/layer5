import styled from "styled-components";
export const QuizContainerWrapper = styled.div`
  margin: 3rem auto;
  padding: 1rem;

  .login-form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
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
    padding: 1rem 0.5rem;
    font-size: 0.9rem;
  }

  .text-field:focus {
    border: 2px solid #00b39f;
  }

  .btn {
    margin: 40px 0;
    align-self: center;
    width: 6rem;
  }

  @media only screen and (max-width: 750px) {
    .login-form {
      width: 100%;
    }
  }
`;
