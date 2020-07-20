import styled from 'styled-components';

const FeturesSectionWrapper = styled.section`
   padding: 70px 0 110px 0;
    .fetures-block{

        .features-icon {
            position: relative;
            display: inline-block;
            padding: 15px; 
            border-radius: 5px;
            margin-bottom: 10px;

            &:before {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 5px;
                background: #52DE97;
                content: " ";
                opacity: 0.08;
            }

            img {
                display: block;
                margin: 0;
                height: 30px;
                width: 30px;
            }
        }
        h3{
            font-size: 22px;
            color: #1D316C;
            margin-bottom: 15px;
            font-weight: 600;
            line-height: 30px;
        }
        p{
            margin: 0 0 50px 0;
            font-weight: 300;
        }

        &:hover{
            .features-icon {
                border-color: #DC7DCE; 
            }
        }
    }
    @media only screen and (max-width: 760px) {
        padding: 70px 0 60px 0;
    }
    @media only screen and (max-width: 568px) {
        .fetures-block{
            text-align: center;
        }
    }
`

export default FeturesSectionWrapper;