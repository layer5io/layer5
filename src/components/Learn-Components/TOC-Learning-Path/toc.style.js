import styled from "styled-components";

const TOCWrapper = styled.div`

    position: sticky;
    top: 10rem;
    left: 0;
    margin-left: -3rem;

    .go-back {
        margin: 1rem 0;
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
                white-space: nowrap;
            }
            &:hover {
                svg, h4 {
                    color: #3C494F;
                }
            }
        }
    }

  .toc-toggle-btn{
    display:none;
  }
 
  .toc-ul-open{
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    list-style: none;
    height:auto !important;
    opacity:1 !important;
    transition:all .4s !important;
  }
  .toc-menu-icon{
    width: 1.5rem; 
    height: 1.5rem; 
    cursor: pointer;
    fill: ${props => props.theme.menuColor};
  }

  .toc-sub-heading {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 1.15rem;
  }
    
  .toc-item {
        line-height: 1.5rem;
    }
    .toc-list {
  
        ul {
            position: relative;
            padding-inline-start: 1.5rem;
            list-style-type: none;
            
            li {
                margin: 1rem 0 1rem 0.5rem;
                width: fit-content;

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
    
    @media only screen and (max-width: 991px){
        position: initial;
        margin-left: -0.5rem;
        width: auto;
        .toc-toggle-btn{
           display: flex;
        }
        .go-back{
           margin-left:0;
        }
        .toc-ul{
           opacity:0;
           height:0;
           transition:none;
           padding-left: .8rem !important;
        }
	.toc-item {
           line-height: .8rem;
        }
    }
`;

export default TOCWrapper;
