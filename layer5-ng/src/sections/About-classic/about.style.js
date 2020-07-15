import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
     padding: 190px 0 60px 0;
    .single-item{
        margin-bottom: 30px;
        .item-head{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .item-icon {
            margin-right: 20px;
            position: relative;
            padding-left: 20px;

            &:before {
                position: absolute;
                left: -2px;
                top: 4px;
                background: ${props => props.theme.secondaryLightColor ? props.theme.secondaryLightColor : '#FFEBEC'};
                height: 55px;
                width: 55px;
                content: "";
                z-index: -1;
                border-radius: 5px;
                opacity: .7;
            }

            .item-icon img {
                height: 60px;
            }
        }
        h3{
            font-size: 23px;
            font-weight: 400; 
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 90px 0 0 0;
    }
    @media only screen and (max-width: 568px) {
        .single-item{
            text-align: center;
            margin-bottom: 40px;
            .item-head{
                justify-content: center;
            }
        }
    }
    
`
export default AboutSectionWrapper;