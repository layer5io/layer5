import styled from "styled-components";

const GSODSectionWrapper = styled.div`
element.style {
    font-size: 0.7em;
    padding-bottom: 40px;
    padding-top: 10px;
    width: 300px;
}
a {
    text-decoration: none;
}
.post-title{
    text-align: center;
    color: #1D316C;
    font-size: 2rem;
    margin: 1.46rem 0 1.168rem 0;
    line-height: normal
}
.card-content{
    position:relative;
    float:right;
    margin-left:20px;
}
@media (max-width:400px){
.card-content{
    position:relative;
    float:none;
    margin-left: 0px;
     overflow: hidden;
}
.card-content iframe{
   border: 0;
   height: 100%;
   width: 100%;
   left:0;
   top:0;
}}
.logo{
    width:  150px;
    float:  left;
    margin: 20px;
}
    padding: 140px 0 60px 0;
    position: relative;
    .CTA-content{
        h2{
            font-size: 40px;
            line-height: 56px;
            font-weight: 600;
            margin-bottom: 30px;
        }
        h3{
            font-size: 40px;
            line-height: 56px;
            font-weight: 600;
            margin-bottom: 30px;
        }
        p{
            font-weight: 300;
            margin-bottom: 45px;
        }
    }
    }
    
`;

export default GSODSectionWrapper; 