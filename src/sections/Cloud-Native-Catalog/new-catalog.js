import React from "react";
import styled from "styled-components";
import { Container } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";

const NewCatalogWrapper = styled.div`
  min-height: 500px;
  background-color: ${({ theme }) => theme.whiteOneToGreyF0F0F0};
  .container {
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .new-catalog__title {
    text-align: center;
    color: ${(props) => props.theme.tertiaryColor};
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 3.813rem;
    padding: 0 200px 20px 200px;
  }
  .new-catalog__button_section {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  @media screen and (max-width: 992px) {
    .new-catalog__title {
      padding: 0 0 10px 0;
    }
    .new-catalog__button_section {
      padding-top: 10px;
    }
  }
  @media screen and (max-width: 767px) {
    .new-catalog__title {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;

const NewCatalog = () => {
  return (
    <NewCatalogWrapper className="new-catalog">
      <Container className="container">
        <p className="new-catalog__title">
          CREATE AND SHARE YOUR OWN BEST PRACTICES
        </p>
        <div className="new-catalog__button_section">
          <Button primary external={true} title="Publish Your Own Design" url="https://github.com/meshery/meshery.io/blob/master/README.md#add-your-patterns-to-the-catalog" />
        </div>
      </Container>
    </NewCatalogWrapper>
  );
};

export default NewCatalog;
