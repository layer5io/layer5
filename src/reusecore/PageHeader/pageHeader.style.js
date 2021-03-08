import styled from "styled-components";


const PageHeaderWrapper = styled.div`
        position: relative;
        overflow: hidden;
        z-index:1;
        .page-header {
            text-align: center;
            position: relative;
            height: auto;
            margin: 2.5rem auto;
            padding: 0 1rem 0;
            z-index: 99;
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
            h5 {
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
`;

export default PageHeaderWrapper;
