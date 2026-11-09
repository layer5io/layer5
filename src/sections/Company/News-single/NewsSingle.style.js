import styled from "styled-components";

const NewsPageWrapper = styled.div`    
.single-post-wrapper{
    padding: 50px 0;
}
.single-post-block{
    p{
        line-height: 29px;
        letter-spacing: 0.2px;
        color: ${props => props.theme.text};
    }
    span{
        span{
        color: ${props => props.theme.text};
        }
    }
    p+p{
        margin-top: 30px;  
    }
}
`;
export default NewsPageWrapper;
