import styled from "styled-components";

const ProgramsPageWrapper = styled.div`
 margin-bottom: 30px;
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
