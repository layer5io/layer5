import styled from "styled-components";

const TOCWrapper = styled.div`

    position: sticky;
    top: 10rem;
    left: 0;
    .chapter-back {
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
            }
            &:hover {
                svg, h4 {
                    color: #3C494F;
                }
            }
        }
    }

    .toc-list {
        ul {
            position: relative;
            padding-inline-start: 2.5rem;
            &::after {
                position: absolute;
                inset: 1.5rem auto 1.5rem 27px;
                width: auto;
                height: auto;
                border-left: 1px solid rgba(177, 182, 184, 0.25);
                content: "";
                z-index: 0;
            }
            li {
                width: fit-content;
                margin: 1rem 0;
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
    @media(max-width: 992px){
        .toc-list{
            ul{
                &::after {
                    inset: 1.5rem auto 1.5rem 28px;
                }
            }
            
        }
    }
`;

export default TOCWrapper;
