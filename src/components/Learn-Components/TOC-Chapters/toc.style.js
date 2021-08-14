import styled from "styled-components";

const TOCWrapper = styled.div`

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
            padding-inline-start: 3.031rem;
            -moz-padding-start: 2.85rem;
            &::after {
                position: absolute;
                inset: 1.5rem auto 1.5rem 32px;
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
                    inset: 1.5rem auto 1.5rem 27.4px;
                }
            }
            
        }
    }
    @media(max-width: 767px){
        position: initial;
         .toc-list{
            ul{
                display: flex;
                flex-flow: wrap;
                margin: 1.5rem 0;
                padding-inline-start: 0rem;
                &::after{
                    display: none;
                }
                li {
                    list-style-type: none;
                    margin:0.5rem;
                }
            }
    }
    .chapter-back {
        h4 {
            margin: 0 1rem;
        }
    }
`;

export default TOCWrapper;
