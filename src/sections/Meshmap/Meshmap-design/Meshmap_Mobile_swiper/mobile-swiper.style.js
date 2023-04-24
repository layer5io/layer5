import styled from "styled-components";


const SwiperContainer = styled.div`

@media (min-width: 769px) {
    display: none;
}


.swiper-slide{
  border-radius: 20px;
}

.card.light {
  box-shadow: none;

  background: linear-gradient(
    266.65deg,
    #00b39f 40.19%,
    #00B39F 74.31%,
    #3c494f 92.89%
  )
}

.card.dark {
  background: linear-gradient(
    266.65deg,
    #00584e 40.19%,
    #2e5363 74.31%,
    #212529 92.89%
  );
}


 .card{
    /* box-shadow: rgb(38, 57, 77, 0.5) 0px 20px 30px -10px; */
    /* box-shadow: none; */

  /* background: linear-gradient(
    266.65deg,
    #00b39f 40.19%,
    #477e96 74.31%,
    #3c494f 92.89%

  ); */


  height:64vh;
  padding:1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card img{
  height:40%;
  width:100%;
  /* margin-left: 1.5rem; */
}
.card h2{
  text-align: center;
  color:white;
}
.card p{
  text-align: center;
  color:white;
}
.card a{
  margin-top: 1rem;
  color: white;
}
@media (max-width:670px){
.card img{
  height:40%;
  width:100%;
}
}

@media (max-width:577px){

  h2{
      font-size: 1.4rem;

  }
  p{
      font-size: 1rem;
  }

}

@media (max-width:520px){

    h2{
        font-size: 1.2rem;
    }
    p{
        font-size: 0.8rem;
    }

  }
  @media (max-width:470px){
    .card{
      height:50vh;
      padding: 1rem;
    }
    .card img{
      max-height:30%;
      width:100%;
      margin-left: 0.5rem !important;
    }
    /* h2{
        font-size: 1rem !important;
    }
    p{
        font-size: 0.6rem !important;
    } */

  }


@media (max-width:716px){
  width:65vw;
}
@media (max-width:470px){
  width:74vw;
}
@media (max-width:577px){
  width:64vw;
}

  border-radius:20px;
  width: 57vw;
  // height:100vh;

  .swiper {
    width: 100%;
    height: 100%;

  }

  h1 {
    text-align: center;
  }

  h2 {
    margin: 0 0 1rem 0;
  }

  h6 {
    margin: 10px 0 2.5rem 0;
  }

  `;
export default SwiperContainer;