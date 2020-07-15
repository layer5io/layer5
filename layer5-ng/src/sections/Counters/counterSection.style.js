import styled from 'styled-components'


const CounterSectionWrapper = styled.section`
    padding: 140px 0 60px 0;
    .counter__item {
        text-align: center;
        margin-bottom: 50px;
        span{
            color: ${props => props.theme.tetriaryColor};
            font-size: 52px;
            font-weight: 400;
            margin-bottom: 15px;
        }
        p{
            color: ${props => props.theme.black};
            font-size: 15px;
            font-weight: 400;
            margin: 0;
        }
    }
    
    @media only screen and (max-width: 912px) {
        padding: 0px;
     }
    
`

export default CounterSectionWrapper;