import styled from "styled-components";

const ProgramsPageWrapper = styled.div`
margin-bottom : 3.125rem;
.backBtn {
    font-weight: 600;
    position: absolute;
    top: 9.30rem;
    z-index: 2;

    @media screen and (max-width: 62rem) {
        display: none;
    }
    a{
        display: flex;
        color: ${props => props.theme.primaryColor};
        &:hover{
            color: ${props => props.theme.linkColor};
        }
        
        h4 {
            line-height: 1.75rem;
            margin-left: 0.5rem;
        }
        svg {
            font-size: 1.75rem;
        }
    }
}

.single-post-wrapper{
    padding: 50px 0 180px 0;
}
#programs {
    padding: 50px 0 0 0;
}
.single-post-block{
    p{
        line-height: 29px;
        letter-spacing: 0.2px;
    }
    p+p{
        margin-top: 30px;  
    }
}

@media only screen and (max-width: 912px) {
     .single-post-block{
         padding-bottom: 10px;
     }
}
`;
export default ProgramsPageWrapper;
