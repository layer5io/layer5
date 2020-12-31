import styled from "styled-components";


const PageHeaderWrapper = styled.div`
        position: relative;
        overflow: hidden;
        z-index:1;
        .page-header {
            text-align: center;
            position: relative;
            height: auto;
            margin: 4rem auto 2rem;
            padding: 0 1rem 0;
            z-index: 99;
            h1{
                font-size: 2.5rem;
                margin: 1rem auto;
            }
            h3{
                color: inherit;
                margin: 1rem auto;
            }
        
        .feature-image{
            margin: 2rem auto;
            max-height: 62.5rem;
            max-width: 31rem;
            object-fit: contain;    
        }
        .breadcrumbs {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;  
            h4 {
                display: inline-block;
                margin:0 0.4rem;
                opacity: .7;
            }
            p{
                margin: 0;
                display: inline-block;
            }
        } 
    }
    @media only screen and (max-width: 480px) {
        .page-header{
            h1{
                font-size: 2rem;
            }
        }

        .breadcrumbs{
            flex-direction: column;
            align-items: center;
        }
    }

    .sub_header h1{
        font-size: 2rem;
    }
`;

export default PageHeaderWrapper;
