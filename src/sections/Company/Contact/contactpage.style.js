import styled from "styled-components";

const ContactPageWrapper = styled.section`
  margin-bottom: 2rem;
  .page-header {
    h3 {
      color: gray;
      font-weight: 400;
    }
  }

  .cards-container {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
  }

  .contact-form-row {
    padding: 0 2rem;

    > div {
      width: 100%;
      margin: auto;
    }

    .card-outline {
      width: 100%;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .contact-form {
    display: flex;
    transition: height ease-in-out 0.75s;
    flex: auto;
    justify-content: center;
    overflow: hidden;
    height: 0rem;
  }

  .showForm {
    display: flex;
    flex-wrap: wrap;
    height: 70rem;
    margin: auto -15px;
  }

  @media screen and (max-width: 765px) {
    .contact-form {
      .form {
        width: 100%;
      }
    }

    .cards-container {
      padding: 0 2rem 0 2rem;
    }
  }
`;

export default ContactPageWrapper;
