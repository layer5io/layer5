import styled from "styled-components";
export const LandscapePageWrapper=styled.div`

    .landscape-list-wrapper{
        padding: 50px 0;
    }
    .landscape-grid-wrapper{
        padding-bottom: 60px;
        margin-top: 80px;
    }
    .timeline {
        position: relative;
        max-width: 750px;
        margin: 0 auto 50px;
      }
      .timeline::before {
        content: "";
        position: absolute;
        left: 46.7%;
        top: -25px;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 25px solid #39d3a9;
      }
      
      .timeline::after {
        content: "";
        position: absolute;
        width: 6px;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
      }
      .img-style0,
.img-style1 {
  width: 75px;
  height: 70px;
}

.img-style0 {
  float: right;
  margin: -5px 0 0 5px;
}

.img-style1 {
  float: left;
  margin: -5px 5px 0 0;
}
.data-cont {
    padding: 10px 40px;
    padding-bottom: 0px;
    position: relative;
    background-color: inherit;
    width: 50%;
    margin-bottom: -80px;
  }
  .data-cont::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -18px;
    background-color: #3b494f;
    border: 4px solid #39d3a9;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  .arr0 {
    left: -5px;
  }
  .arr1 {
    left: 50%;
  }
  .arr0::before,
.arr1::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 18px;
  width: 0;
  z-index: 1;
  border: medium solid white;
}

.arr0::before {
  right: 30px;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

.arr1::before {
  left: 30px;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}
.arr1::after {
    left: -12px;
  }
  .content0,
.content1 {
  background-color: white;
  position: relative;
  border-radius: 6px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 4px;
}
.content0,
.content1 {
  background-color: white;
  position: relative;
  border-radius: 6px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 4px;
}

.content0 {
  text-align: right;
}

.mesh-name {
  font-size: 1.6rem;
  margin: 10px 0 0;
}

.mesh-ann-date {
  font-size: 1.2rem;
  padding-top: 0px;
  margin-top: 0px;
}

.meshname-img {
  height: 90px;
}
.content0,
.content1 {
  background-color: white;
  position: relative;
  border-radius: 6px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 4px;
}

.content0 {
  text-align: right;
}

.mesh-name {
  font-size: 1.6rem;
  margin: 10px 0 0;
}

.mesh-ann-date {
  font-size: 1.2rem;
  padding-top: 0px;
  margin-top: 0px;
}

.meshname-img {
  height: 90px;
}

    @media only screen and (max-width: 912px) {
        .landscape-page-wrapper{
            padding-bottom: 80px;
        }
    }
`;
