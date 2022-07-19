import styled from "styled-components";

export const MemberSingleWrapper = styled.div`
    margin: 4.5rem 0 3.125rem 0;
    .backBtn {
		font-weight: 600;
		margin-bottom: 1rem;
		@media screen and (max-width: 62rem) {
            display: none;
	    }
		a{
			display: flex;
		    color: ${props => props.theme.primaryColor};
		    &:hover{
		        color: ${props => props.theme.linkColor};
			}
			
			h4 {
				line-height: 1.75rem;
				margin-left: 0.5rem;
			}
			svg {
				font-size: 1.75rem;
			}
		}
	}
	
    ul{
        list-style: none;
    }
    .profile-image{
        border-radius: 5px;
        transition: 0.9s;
    }
    
    .body{
        display: block;
        position: relative;
        text-align: center;
        z-index: 1;
        overflow: hidden;

        .text{
            font-weight: 400;
            font-size: 1rem;
            letter-spacing: .5px;
            margin-top: 0.625rem;
            padding: 0;
            text-align: left;
        }
        .bio{
            margin-top: 1.25rem;
        }
        .location {
            margin-top: 0;
        }
        
        .bold{
            font-weight: 600;
        }
    }
    .profile-image{
        &:hover{
            transition: 0.9s;
            border-radius: 5px 50px 5px 50px;
        }
       }
        .header {
            display: block;
            position: relative;
            text-align: center;
            padding: 1.875rem 0 1.25rem;
            z-index: 1;
            overflow: hidden;
            
            .name {
                font-weight: 600;
                font-size: 40px;
                line-height: 1;
                color: black;
                letter-spacing: -2px;
                margin-top: 0.9375rem;
                padding: 0;
                text-align: left;
            }
            
            .position {
                font-weight: 400;
                font-size: 22px;
                font-style: italic;
                color: ${props => props.theme.menuColor};
                letter-spacing: .5px;
                margin-top: 0.9375rem;
                padding-top: 1px;
                padding-bottom: 3px;
                border-bottom: 3px solid ${props => props.theme.secondaryColor};
                width: 50%;
                text-align: left;
            }
        }
        
        .profile-social-links {
            display: flex;
            justify-content: left;
            width: 90%;
            padding-left: 0 !important;
            
            li {
                a{
                    display: block;
                    color: black;
                    text-align: left;
                    padding: 10px;
                    border-radius: 100%;
                    -webkit-transition: box-shadow 0.2s;
                    -moz-transition: box-shadow 0.2s;
                    -o-transition: box-shadow 0.2s;
                    transition: box-shadow 0.2s;
                    transition: 0.3s;
                    
                    &:hover{
                        box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
                        background: white;
                        
                        .github{
                            color: #211F1F;
                        }
                        .linkedin{
                            color: #0E76A8;
                        }
                        .twitter{
                            color: #1DA1F2;
                        }
                    }
                    
                    &:active{
                        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);
                    }
                    
                    svg{
                        color: greyscale;
                        display: block;
                        width: 2rem;
                    }
                    img {
                        display: block;
                        width: 2rem;
                        height: 2rem;
                        max-width: none;
                    }
                }
            }
        }
        .start-contributing{
          margin-top: 2.5rem;
          text-align: center;
          p{
            font-weight: 700;
          }
        }
`;
