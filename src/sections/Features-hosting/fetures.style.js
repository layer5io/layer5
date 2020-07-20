import styled from 'styled-components';

const FeturesSectionWrapper = styled.div`
    padding: 120px 0;
    position: relative;
    background: #fbfbfb;
   .section-title{
       h2{
           font-weight: 600;
       }
   }
   
    .fetures-block{
        padding: 15px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        transition: all 0.3s ease-in;
        &:hover{
            box-shadow: 0 0 40px rgba(0,0,0,0.15);
            .fetures-icon-block{
                background: rgb(224,215,222); /* Old browsers */
                background: -moz-linear-gradient(45deg, rgba(224,215,222,1) 1%, rgba(162,155,254,1) 48%, rgba(162,155,254,1) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(45deg, rgba(224,215,222,1) 1%,rgba(162,155,254,1) 48%,rgba(162,155,254,1) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(45deg, rgba(224,215,222,1) 1%,rgba(162,155,254,1) 48%,rgba(162,155,254,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0d7de', endColorstr='#a29bfe',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
            }
        }
    }
    .fetures-icon-block{
        height: 95px;
        width: 95px;
        line-height: 130px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s ease-in;
        background: rgb(162,155,254); /* Old browsers */
        background: -moz-linear-gradient(45deg, rgba(162,155,254,1) 0%, rgba(162,155,254,1) 57%, rgba(224,215,222,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, rgba(162,155,254,1) 0%,rgba(162,155,254,1) 57%,rgba(224,215,222,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, rgba(162,155,254,1) 0%,rgba(162,155,254,1) 57%,rgba(224,215,222,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a29bfe', endColorstr='#e0d7de',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        img{
            margin: 0 auto;
            width: 45px;
        }
       
    }
    .fetures-content-block{
        flex-basis: 68%;
        margin-left: 20px;
        h3{
            font-size: 28px;
            font-weight: 400;
            margin-bottom: 7px;
        }
        p{
            font-weight: 300;
        }
    }
    
    @media only screen and (max-width: 1024px) {
        .fetures-block{
            display: block;
        }
        .fetures-icon-block{
            margin-bottom: 30px;
        }
        .fetures-content-block{
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 80px 0 0px 0;
    }
    @media only screen and (max-width: 760px) {
        padding: 80px 0 50px 0;
    }
    @media only screen and (max-width: 568px) {
        .fetures-icon-block{
            margin: 0 auto 30px auto;
        }
        .fetures-content-block{
          text-align: center;
        }
    }
    
`

export default FeturesSectionWrapper;