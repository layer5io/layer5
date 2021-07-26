import styled from "styled-components";

const TOCWrapper = styled.div`

    position: sticky;
    top: 10rem;
    left: 0;
    margin-left: -3rem;

    .go-back {
        margin-left: 1rem;
        a {
            display: inline-flex;
            svg {
                align-self: center;
                font-size: 1.5rem;
                color: rgb(177, 182, 184);
                width: 100%;
                max-width: 1.5rem;
            }
            h4 {
                font-weight: 500;
                text-transform: capitalize;
                font-size: 1.25rem;
                white-space: nowrap;
            }
            &:hover {
                svg, h4 {
                    color: #3C494F;
                }
            }
        }
        margin-bottom: 1rem;
    }

  .toc-sub-heading {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 1.15rem;
  }
    

    .toc-list {
  
        ul {
            position: relative;
            padding-inline-start: 2.75rem;
            list-style-type: none;
            
            li {
                line-height: 3rem;
                width: fit-content;
                margin-left: 1rem;

                &::marker {
                    color: rgba(177, 182, 184, 0.75);
                }
                p {
                    margin: 0;
                    font-size: 1rem;

                    a {
                        color: rgba(0, 0, 0, 0.65);
                    }
                }
                &:hover {
                    &::marker, p, a {
                        color: ${props => props.theme.secondaryColor};
                    }
                }

            }
            .active-link {
                &::marker, p, a {
                    color: ${props => props.theme.secondaryColor};
                }
            }
        }
    }
`;

export default TOCWrapper;
