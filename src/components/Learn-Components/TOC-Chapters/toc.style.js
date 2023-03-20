import styled from "styled-components";

const TOCWrapper = styled.div`

    .chapter-back {
        display:flex;
        justify-content:space-between;
        align-items:center; 
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

        .toc-toggle-btn{
            display:none;
        }

        .toc-menu-icon{
            width: 1.5rem; 
            height: 1.5rem; 
            cursor: pointer;
            fill: ${props => props.theme.menuColor};
        }
    }
    

    .toc-list {
        ul {
            position: relative;
            padding-inline-start: 3.031rem;
            -moz-padding-start: 2.78rem;
            &::after {
                position: absolute;
                inset: 1rem auto 1rem 31px;
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
                        color: ${props => props.theme.whiteSixFiveToBlackSixFive};
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
                    inset: 1rem auto 1rem 32.4px;
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
                flex-direction: column;
                padding-inline-start: 0rem;
                &::after{
                    display: none;
                }
                li {
                    list-style-type: none;
                    margin: 0.5rem;
                    display: none;
                }
            }

            .toc-ul{
                opacity:0;
                height:0;
                transition:none;
                padding-left: 1rem;
            }

            .toc-ul-open{
                height:auto;
                opacity:1;
                transition:all .4s;
            }

            .toc-ul-open li {
                display: inline-block;
            }
        }

        .chapter-back {
            h4 {
                margin: 0 1rem;
            }

            .toc-toggle-btn{
                display: flex;
            }
        }
    }
`;

export default TOCWrapper;
