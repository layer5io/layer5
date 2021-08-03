import styled from "styled-components";
export const ChapterWrapper = styled.div`

    margin: 5rem auto;
    h4 {
              font-weight: 500;
              text-transform: capitalize;
              font-size: 1.25rem;
            }
    .service-mesh-switcher {
      display: flex;
      padding: 1.5rem;
      align-items: center;
    }

    .service-mesh-image {
        padding: 0.4rem;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        width: 2rem;
        margin-right: 1rem;
        border-radius: 5px;
    }

    .service-mesh-image-active {
        border: 2px solid rgb(0, 179, 159);
    }

    .sercive-mesh-switch-container {
        display: flex;
        flex-direction: row;  
        
}

    .chapter-container {
        @media (min-width: 576px) {
            max-width: 100%;
        }
        // @media (min-width: 768px) {
        //     max-width: 720px;
        // }
        // @media (min-width: 992px) {
        //     max-width: 960px;
        }
        @media (min-width: 1200px) {
            max-width: 1270px; 
        }
    }
    .chapter-data {
        .chapter-heading {
            margin-bottom: 1.5rem;
        }
    }
`;
