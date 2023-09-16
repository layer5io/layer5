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
      padding: 0.75rem 1.5rem 1.5rem;;
      align-items: center;
    }

    .service-mesh-image {
        width: 2.75rem;
        margin-right: 1rem;
        border-radius: 5px;
        a {
            display: block;
            padding: 0.1rem 0.35rem;
            text-align: center;
        }
        .old-gatsby-image-wrapper {
            img {
                max-height: 2.15rem;
                vertical-align: top;
            }
        }
    }

    .service-mesh-image-active {
        border: 2px solid rgb(0, 179, 159);
    }

    .chapter-container {
        @media (min-width: 576px) {
            max-width: 100%;
        }
        @media (min-width: 1200px) {
            max-width: 1270px; 
        }
    }
    .chapter-data {
        border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 3rem;
        .chapter-heading {
            margin-bottom: 1.5rem;
        }
    }
    .toc-switcher-parent-div{
        position: sticky;
        top: 10rem;
        left: 0;
    }
`;
