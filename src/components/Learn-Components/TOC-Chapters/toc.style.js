import styled from "styled-components";

const TOCWrapper = styled.div`

    .chapter-back {
        a {
            display: inline-flex;
            svg {
                align-self: center;
                font-size: 1.25rem;
                color: rgba(177, 182, 184, 0.75);
            }
            h4 {
                font-weight: 500;
                text-transform: capitalize;
                font-size: 1.25rem;
            }
            &:hover {
                svg, h4 {
                    color: #3C494F;
                }
            }
        }
        margin-bottom: -1rem;
    }

    .toc-list {
        ul {
            position: relative;
            padding-inline-start: 2.75rem;
            &::after {
                position: absolute;
                inset: 2rem auto 1rem 26px;
                width: auto;
                height: auto;
                border-left: 1px solid rgba(177, 182, 184, 0.25);
                content: "";
                z-index: 0;
            }
            li {
                line-height: 3rem;
                font-size: 1.3rem;
                width: fit-content;

                &::marker {
                    color: rgba(177, 182, 184, 0.75);
                }
                p {
                    margin: 0;
                }
                p a {
                    color: rgba(0, 0, 0, 0.65);
                }
                &:hover {
                    &::marker, p, a {
                        color: ${props => props.theme.secondaryColor};
                    }
                }

            }
        }
    }
`;

export default TOCWrapper;
