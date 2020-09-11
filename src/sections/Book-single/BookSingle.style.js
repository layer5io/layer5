import styled from "styled-components";

const BookSinglePageWrapper = styled.div`
 color: #000;   
.single-post-wrapper{
    padding: 50px 0 180px 0;
}
.single-post-block{
    p{
        font-size: 16px;
        font-weight: 300; 
        line-height: 29px;
        letter-spacing: 0.2px;
    }
    p+p{
        margin-top: 30px;  
    }  
}

@media only screen and (max-width: 912px) {
     .single-post-block{
         padding-bottom: 120px;
     }
}
`;

export default BookSinglePageWrapper;
