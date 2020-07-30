import styled from 'styled-components';

const LanguageWrapper = styled.section`
    .icons{
        margin-left: 15px;
        .flag{
            padding:2px
        }
    }
    .title{
        color: ${props => props.theme.white};
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

export default LanguageWrapper;