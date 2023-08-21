import styled from "styled-components";

const PricingWrapper = styled.section`

.freeCont{
  width:100vw;
  overflow:hidden;
}
.headers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* gap: 40px; */
  padding: 0 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  h1{
    margin-bottom: 2.5rem;
    color: ${props => props.theme.whiteToBlack};
  }
  h1 span{
    color: rgb(235,192,23);
  }

  p{
    color: ${props => props.theme.whiteToBlack};
    margin-bottom: 5rem;
  }

  .header-heading {
    color: ${props => props.theme.whiteToBlack};
    text-align: center;
  }
}
.proName{
  display: flex;
  flex-direction: row;
}
.HeroBtn{
  display: flex;
  gap: 40px;
}

.subscription-duration {
    margin-top: 2rem;
    margin-bottom: 4rem;
    text-align: center;
    h2 {
      color: ${props => props.theme.whiteToBlack};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @media (min-width: 1400px) {
      h2{
        color: ${props => props.theme.whiteToBlack};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

    }
}
.gap{
  padding: 5rem 20px;
}
.freeTry{
  position: relative;
  display: flex;
  justify-content: center;
  left: -10vw;
  width: 120vw;
  margin: 2.5rem 0;
  background:#000D12 ;
  transform: rotate(4deg);
  overflow: hidden;
  .bgSvgLeft{
    position: absolute;
    bottom: 0;
    right: -240px;
    width: 860px;
  }
  .bgSvgRight{
    position: absolute;
    top: 0;
    left: -240px;
    width: 860px;
  }
}
.rotate{
  /* position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); */
  transform: rotate(-4deg);
  width: 100vw;
}

.subscriptionButtons {
  .button {
    margin:.5rem 0rem 0rem 0rem;
    font-weight:400;
    color: white;
  }
  @media (min-width: 434px) {
    .button:first-child{
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
    }
    .button:last-child{
      border-top-left-radius: 0rem;
      border-bottom-left-radius: 0rem;
    }
  }
.active {
  border-left: 1px solid ${props => props.theme.caribbeanGreenColor};
  border-right: 1px solid ${props => props.theme.caribbeanGreenColor};
  background-color: ${props => props.theme.caribbeanGreenColor};
  padding: 0.3rem;
  }

.inactive {
  background-color: ${props => props.theme.primaryLightColor};
  padding: 0.2rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
}

.wrapper{
  max-width: 1090px;
  position: relative;
  width: 100%;
  padding: 0 2rem;
  margin: -2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 1400px) {
    margin: -8rem auto 0;
  }
  @media (min-width: 2048px) {
    margin: -10rem auto;
  }
}


.pricing-table {
  background-color: ${props => props.theme.grey212121ToWhite};
  border-top: 3px solid #00b39f;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	border-radius: 4px;
	transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 992px) {
    margin: 1.5rem 1rem;
  }
}

.featured{
      transform: scale(1.05);
      background-color: ${props => props.theme.grey212121ToWhite};
      box-shadow: 0px 2px 12px 0px rgb(0, 179, 158, 0.7);
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
.pricing-table:hover {
      box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, .15);
    }
.featured:hover{
      box-shadow: 0px 2px 16px rgb(0, 179, 158, 0.9);
    }

.pricing-table{

    .pricing-label {
      border-radius: 2px;
      background-color: rgb(235,192,23);
      padding: .25rem .5rem;
      display: block;
      position: relative;
      float: right;
      justify-content: flex-end;
      align-content: flex-end;
      width: fit-content;
      font-size: .75rem;
      font-weight: 500;
      margin-top: -1rem;
      margin-right: -1rem;
      margin-bottom: 1rem;
    }

    h2 {
      margin-top: 1rem;
      color: ${props => props.theme.greyDCDCDCToGrey3B3B3B};
      font-size: 24px;
      font-weight: 500;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .byline {
      color: ${props => props.theme.greyC8C8C8ToGreen3C494F};
      font-size: 16px;
      font-weight: 400;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .pricing-features {
      margin-top: 2rem;
    }

    .pricing-features .feature {
      margin: .75rem 0rem;
      .details{
        display: flex;
        margin: 0.5rem 0;
      }
      h5{
        color: ${props => props.theme.greyAAAAAAToGrey7A848E};
        display: block;
        font-size: 16px;
        font-weight: 400;
        vertical-align: text-top;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .check{
        padding-right: 0.2rem;
        vertical-align: middle;
        color: ${props => props.theme.secondaryColor};
      }
    }


    .price-tag {
      margin-top: 2rem;
      text-align: center;
      font-weight: 500;
    }

    .price-tag .symbol {
      font-size: 24px;
    }

    .price-tag .amount {
      letter-spacing: -2px;
      font-size: 3rem;
      @media screen and (max-width: 992px) and (min-width: 768px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 2rem;
      }
    }

    .price-tag .free {
      font-size: 40px;
    }

    .price-tag .after {
      color: #3b3b3b;
      font-weight: 500;
    }

    .price-button-disabled, .price-button-link {
      color: #fff;
      display: block;
      margin: 2rem auto 0;
      padding: 1rem 2rem;
      width: 100%;
      text-align: center;
      font-weight: 500;
      transition: .3s;
      background: ${props => props.theme.secondaryColor};
    }

    .price-button-disabled{
      background: rgb(0, 179, 158, 0.6);
    }
    .price-button-disabled:hover{
      cursor: default;
      box-shadow: none;
    }

    .pricing-label {
      background: rgb(235,192,23);
      color: #000;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .price-tag {
      color:  ${props => props.theme.secondaryColor};
    }
}

.accordion__item {
  .accordion__header {
    margin: 0.1rem 0;
  }
}

.pricing_coming_soon{
  width : 150px;
  position : relative ;
  float : right;
  z-index:2;
  margin-top:-2rem;
  margin-right:-5.4rem;
  -webkit-transform: translateY(0%) translateX(0%) rotate(14deg);
}
.product_hero{
  background: linear-gradient(180deg, rgba(0, 211, 169, 0.10) 0%, rgba(0, 179, 159, 0.00) 100%);
  padding: 40px;
  display:flex;
  justify-content: space-between;
}
.product_hero_text{
  display: flex;
  flex-direction: column;
  flex:1;
  gap: 40px;
}
.product_hero_text h1{
  color: #FFF;
font-family: Qanelas Soft;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: ${props => props.theme.whiteToBlack};
}
.product_hero_text h1 span{
  color: ${props => props.theme.secondaryColor};
}
.product_hero_text p{
  /* padding-top:2rem; */
  color: #D9D9D9;
font-family: Qanelas Soft;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px;
color: ${props => props.theme.whiteToBlack};
}
.HeroBtn Button{
  color:black;
  font-size:18px;
  font-weight:700;
  /* margin-top:1rem; */
  width:100px;
}
.product_hero_img{
  flex:1;
  
}
.product_cards{
  /* min-height:90vh; */
}
.product_cards h2{
  text-align:center;
  font-size: 56px;
font-style: normal;
font-weight: 700;
}

.card{
  min-width:200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 560px;
  aspect-ratio: 3/2 !important;
  border-radius: 20px;
  background-color: ${props => props.theme.grey212121ToGreyF0F0F0};
  transition: .4s ease-in-out ;
padding:2rem;
/* margin:2rem; */
}

.card:hover{
        box-shadow: 0px 0px 10px ${props => props.theme.green00D3A9ToGreyE6E6E6};
}
.hoverCard{
  border-radius: 16px;
background: linear-gradient(133deg, #293B43 0%, rgba(41, 59, 67, 0.00) 100%, rgba(41, 59, 67, 0.00) 100%);
box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.25);
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
aspect-ratio: 2/1;
max-width: 560px;
animation: hover 4s ease-in-out infinite;
position: relative;
}
@keyframes hover {
  0% {top: 0px;}
  50% {top: 20px;}
  100% {top: 0px}
}
.hoverCard h2{
  color: #00b39f;
}
.cards {
  padding: 40px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  
}
.card_head{
  display:flex;
  /* position:relative; */
  justify-content: space-between;
}
.card_head .logo{
  padding:1rem;
  padding-left:0;
  padding-top:0;
}
.card_head .title{
  padding:1rem;
  padding-top:0;
  font-size: 32px;
font-weight: 700;
}
.card .text{
  /* padding-bottom:2rem; */
  font-size: 16px;
font-style: normal;
font-weight: 400;
color:${props => props.theme.whiteToBlack};
}

.card_bottom{
  border-top: 2px solid #2C2C2C;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
}
.card_bottom .learn{
  /* margin-bottom:20px; */
  text-decoration:underline;
  text-decoration-color: ${props => props.theme.secondaryColor};
  text-underline-offset: 8px;
  cursor:pointer;
  color:${props => props.theme.whiteToBlack};
}
.btns{
  display: flex;
  flex-direction: row;
}
.btns Button{
margin:20px 0 0 0;
color:${props => props.theme.whiteToBlack};
font-weight:700;
font-size:20px;
}
.iconss{
  display: flex;
  gap: 12px;
}

.iconss img{
  /* width: 32px; */
}
@media (max-width:1322px){

  .card_bottom{
    flex-direction:row;
    align-items:center;
  }
}
@media (max-width:1098px){
.btns {
  display:flex;
 align-items:center;
 justify-content:center;
}
}
@media (max-width:938px){
  .product_hero_text{
    text-align: center;
    align-items: center;
    flex: 1;
  }
  .HeroBtn{
    /* align-items: center; */
    justify-content: center;
  }
  .product_hero_text h1{
    font-size:36px;
  }
  .btns{
    flex-direction:row;
  }

.product_hero_text p{
  font-size:16px;
}
  .product_hero_img {
    display:none;
  }
}

@media (max-width:768px){
  .product_hero{
    flex-direction:column;
  }
  .product_hero_img img{
    display:none;
  }
  /* .cards{
    flex-direction:column;
    justify-content:center;
    margin:auto;

  } */
  .card_head{
    align-items:flex-start
  }
  .product_cards{

    display:flex;
    flex-direction:column;
    justify-content:center;
  }

  .btns{
    flex-direction:row;
  }
}

@media (max-width:580px){
  .card_head{
padding:10px;
align-items:flex-start
  }
  .cards{
    padding: 20px;
  }
  .card {
    padding: 12px;
  }
  .card_head .logo{
    padding:0px;
  }
  .btns{
    flex-direction:column;
  }
}
@media (max-width:494px){
  .card_head .title{
padding:10px;
font-size:24px
  }
  .text{
   font-size: 12px;
   line-height: normal;
}
}
@media (max-width:404px){
  .product_hero{
    justify-content:center;
    margin:auto;
    width:100vw;
  }
.text{
   font-size: 12px;
   line-height: normal;
}
.product_hero_text h1{
  font-size:28px;
  text-align:center;
}
.product_hero_text p{
  font-size:15px;
  text-align:center;
  padding:10px;
  margin-top:10px;
}
.HeroBtn{
  display:flex;
  gap: 40px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.product_hero_text{
  margin:1rem;
}

}
@media (max-width:344px){
  .card{
    padding:0;
  }
  .card_head{
    padding:0;
  }
  .card .text{
    /* padding:2px; */
  }
  .btns Button{
    margin:4px;
  }
  .icons{
    margin-left:0;
  }
  .card_head{
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  .card_head .logo{
    display:flex;
    justify-content:center;
    align-items:center;
  }
}

`;

export default PricingWrapper;
