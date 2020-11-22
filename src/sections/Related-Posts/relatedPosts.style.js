import styled from "styled-components";


const RelatedPostsWrapper = styled.div`
        .sidebar-widgets {
            padding: 0 30px;
        }

        .widgets-title{
            margin-bottom: 20px;
            margin-left: 5px;
            h3{
                display: inline-block;
                font-size: 21px;
                font-weight: 500;
                line-height: 30px;
                position: relative;
                &:before{
                    position: absolute;
                    top: 50%;
                    right: -80px;
                    content: '';
                    width: 70px;
                    height: 1px; 
                }
            }
            
        }
        
        .sidebar-widgets{
            &+.sidebar-widgets{
                margin-top: 52px;
            }            
        }

    @media only screen and (max-width: 1024px) {
        .sidebar-widgets {
            padding: 0;
        }
    }
       
`;

export default RelatedPostsWrapper;
