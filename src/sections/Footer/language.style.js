import styled from 'styled-components';

const LanguageWrapper = styled.section`
    margin-left:20px;
    margin-right:20px;
    .flag{
        padding:2px
    }
    .title{
        color: ${props => props.theme.white};
        font-size: 24px;
        margin-bottom: 35px;
    }
`;

export default LanguageWrapper;