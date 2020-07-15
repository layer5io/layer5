import styled from 'styled-components';


const ClientsSectionWrapper =  styled.div`
    padding: 80px 0 180px 0;
    .slick-arrow{
        display: none !important;
    }
    @media only screen and (max-width: 912px){
        padding: 0 0 80px 0;
    }
    @media only screen and (max-width: 400px){
        img{
            margin: 0 auto;
        }
    }
`

export default ClientsSectionWrapper;