import styled from "styled-components";
const Loader = styled.div`
        width: 100vw;
        height: 100vh;
        .loading-modal{
           position:fixed;
           top:0;
           left:0;
           width:100%;
           height:100vh;
           display: flex;
           justify-content: center;
           align-items: center;
           z-index:99999;
        
            svg{
                width: 100px;
                height: 100px;
                path{
                    -webkit-animation: loader 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
                    animation: loader 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
                    opacity: 0;
                    &:nth-of-type(1){
                        animation-delay: 900ms;
                    }
                    &:nth-of-type(2){
                        animation-delay: 800ms;
                    }
                    &:nth-of-type(3){
                        animation-delay: 600ms;
                    }
                    &:nth-of-type(4){
                        animation-delay: 400ms;
                    }
                }
                polygon{
                    -webkit-animation: loader 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
                    animation: loader 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
                    opacity: 0;
                    &:nth-of-type(1){
                        animation-delay: 200ms;
                    }
                    &:nth-of-type(2){
                        animation-delay: 100ms;
                    }
                }
            }
        }
        .calender{
            
            top:0;
            opacity:0.2;
        }
      @keyframes loader {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
      }
`;
export default Loader;
