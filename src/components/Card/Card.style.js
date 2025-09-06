import styled from "styled-components";

export const CardWrapper = styled.div`
    .post-block{
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        background-Color:${props => props.theme.grey212121ToWhite};
        box-shadow: 0px 2px 6px 0px ${props => props.theme.green00D3A9ToBlackTwo};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        /* Fix: Ensure the card doesn't overflow its container */
        overflow: hidden;
        display: flex;
        flex-direction: column;

        &:hover{
            box-shadow: 0px 2px 15px 4px ${props => props.theme.whiteNineToBlackOne};
            .post-thumb-block{
                .gatsby-image-wrapper, .old-gatsby-image-wrapper{
                    transform: scale3d(1.1,1.1,1);
                }
            }
            .readmore-btn{
                color: ${props => props.theme.secondaryColor};
                svg{
                    margin-left: 0.25rem;
                    transform: scale(1.2);
                }
            }
        } 
    }
    .readmore-btn{
        color: ${props => props.theme.secondaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @media screen and (max-width:776px){
		.post-block{
			width: auto;
			margin: auto auto 2rem;
		}
	}

   .post-thumb-block{
        overflow: hidden;
        height: 11.5rem;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        /* Fix: Prevent shrinking on mobile */
        flex-shrink: 0;

    .gatsby-image-wrapper, .old-gatsby-image-wrapper{
        height:100%;
        margin-top: 0.2rem;
        transition: all 0.3s ease-in;
    }
    img{
        height: inherit;
        max-height: 180px;
        display: block;
        text-align: center;
        margin: auto;
        /* Fix: Ensure images don't overflow */
        width: 100%;
        object-fit: cover;
        }

    }
    

    .post-content-block{
        padding: 1rem 2rem;
        height: 8rem;
        /* Fix: Allow content to grow and add proper overflow handling */
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 8rem;
        
        /* Fix: Ensure padding works on all screen sizes */
        @media screen and (max-width: 480px) {
            padding: 1rem 1rem;
            min-height: 9rem;
        }
        
        @media screen and (max-width: 320px) {
            padding: 0.75rem;
            min-height: 10rem;
        }
    }

    @media screen and (max-width: 1200px) and (min-width: 992px){
        .post-thumb-block{
            height: 12rem;
        }
       
        .post-content-block{
            min-height: 10rem;
        }
    }
   
    @media screen and (max-width: 670px) and (min-width: 560px){
        .post-content-block{
            min-height: 10rem;
        }
    }

    @media screen and (max-width: 350px){
        .post-content-block{
            min-height: 10rem;
        }
    }

    .post-title{
        font-size: 1.4rem;
        font-weight: 400;
        /* Fix: Replace single-line truncation with multi-line for better mobile experience */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.3;
        margin-bottom: 0.5rem;
        
        /* Fix: Responsive font sizing */
        @media screen and (max-width: 768px) {
            font-size: 1.2rem;
            -webkit-line-clamp: 3;
        }
        
        @media screen and (max-width: 480px) {
            font-size: 1.1rem;
        }
        
        @media screen and (max-width: 320px) {
            font-size: 1rem;
        }
    }

    .post-meta-block{
        height: auto;
        display: flex;
        margin-bottom: 0.5rem;
        /* Fix: Better responsive behavior for meta information */
        flex-wrap: wrap;
        gap: 0.5rem;
        
        /* Fix: Stack on very small screens */
        @media screen and (max-width: 400px) {
            flex-direction: column;
            gap: 0.25rem;
        }

        .author{
            text-align: end;
            /* Fix: Don't force text-align on small screens */
            @media screen and (max-width: 400px) {
                text-align: left;
            }
        }
        .author, p{
            color: ${props => props.theme.whiteSixToBlackSix};
            font-size: 0.9rem;
            font-weight: 400;
            flex: auto;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            /* Fix: Prevent text overflow */
            word-break: break-word;
            
            @media screen and (max-width: 480px) {
                font-size: 0.85rem;
            }
            
            @media screen and (max-width: 320px) {
                font-size: 0.8rem;
            }
        }
        .type{
            text-align: end;
            font-size: 1rem;
            font-weight: 400;
            /* Fix: Responsive type sizing */
            @media screen and (max-width: 480px) {
                font-size: 0.9rem;
            }
            
            @media screen and (max-width: 400px) {
                text-align: left;
            }
            
            @media screen and (max-width: 320px) {
                font-size: 0.85rem;
            }
        }
    }

    .readmore-btn-wrapper{
        display: flex;
        justify-content: flex-start;
        /* Fix: Add margin-top auto to push buttons to bottom */
        margin-top: auto;
        /* Fix: Better responsive spacing */
        gap: 0.5rem;
        align-items: center;
        
        /* Fix: Stack buttons on very small screens if needed */
        @media screen and (max-width: 320px) {
            flex-wrap: wrap;
        }
    }

    .readmore-btn::after{
        content: '';
        position: absolute;
        margin: 0 1rem 2rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    
    .readmore-btn, .external-link-btn{
       color: ${props => props.theme.whiteFourToBlackFour};
       display: flex;
       flex: auto;
       align-items: center;
       transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       /* Fix: Prevent text overflow in buttons */
       white-space: nowrap;
       min-width: 0; /* Allow flexbox to shrink */
       
       /* Fix: Better touch targets on mobile */
       @media screen and (max-width: 768px) {
           min-height: 44px;
           padding: 0.5rem;
       }
       
       svg{
           font-size: 1.5rem;
           transition: all 0.3s;
           /* Fix: Prevent icon from shrinking */
           flex-shrink: 0;
           
           @media screen and (max-width: 480px) {
               font-size: 1.3rem;
           }
       }
    }

    .external-link-btn{
        justify-content: flex-end;
        /* Fix: Limit width so it doesn't take too much space */
        flex: 0 0 auto;
        max-width: 60px;
        
        svg{
            font-size: 2rem;
            padding: 0.25rem;
            position: relative;
            
            @media screen and (max-width: 480px) {
                font-size: 1.8rem;
                padding: 0.2rem;
            }
            
            @media screen and (max-width: 320px) {
                font-size: 1.6rem;
            }
        }

        &:hover{
            color: ${props => props.theme.secondaryColor};
            svg{
                transform: scale(1.25);
            }
        }
    }
    
    /* Fix: Additional mobile-specific improvements */
    @media screen and (max-width: 768px) {
        .post-block {
            margin-bottom: 1.5rem;
        }
    }
    
    @media screen and (max-width: 480px) {
        .post-block {
            margin-bottom: 1rem;
        }
        
        .post-thumb-block {
            height: 10rem;
        }
    }
    
    @media screen and (max-width: 320px) {
        .post-thumb-block {
            height: 9rem;
        }
    }
`;