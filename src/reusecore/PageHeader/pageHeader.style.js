import styled from "styled-components";


const PageHeaderWrapper = styled.div`
        position: relative;
        overflow: hidden;
        z-index:1;
        .page-header {
            text-align: center;
            position: relative;
            height: auto;
            margin-bottom: 2rem;
            padding: 0 1rem 0;
            z-index: 99;
            h1 {
                padding-top: 1.5rem;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                img{
                    padding-left: 1rem;
                    width: 3rem;
                    filter: invert(${(props) => props.theme.meshInterfaceLogoFilter});
                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

                }
            }
        }
        
        .feature-image{
            /* margin: 2rem auto; */
            object-fit: contain;
            justify-content: center; 
            
            img{
                max-height: 25rem;
                /* max-width: 31rem; */
                display: block;
                margin-left: auto; 
                margin-right: auto; 
            }   
        }
        .breadcrumbs {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
            align-items: center;  
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
