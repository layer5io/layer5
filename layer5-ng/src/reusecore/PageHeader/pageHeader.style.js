import styled from 'styled-components';


const PageHeaderWrapper = styled.div`
        position: relative;
        overflow: hidden;
        z-index:1;
        .page-header {
            text-align: center;
            padding: 200px 0px 100px;
            position: relative;
            z-index: 99;
            h1{
                font-size: 36px;
                line-height: 48px;
            }

        .breadcrumbs {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;  
            a {
                color: inherit;

                &:hover{
                    opacity: .8;
                }
            } 
            a+a {
                margin: 0 15px 0px 7px;
            }
            h4 {
                margin:0 7px;
                opacity: .7;
            }
            &.page {
                a {
                   font-weight: 600;
                }
                span {
                    margin: 0 7px;
                }
                span+span{
                    margin-left: 0;
                }
            }


        } 
    }
    @media only screen and (max-width: 480px) {
       .page-header{
            padding: 160px 0px 100px;
            h1{
                font-size: 30px;
                line-height: 44px;
            }
       }
    }
`

export default PageHeaderWrapper;