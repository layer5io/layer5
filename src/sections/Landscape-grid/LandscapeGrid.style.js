import styled from "styled-components";
export const LandscapePageWrapper=styled.div`

.timeline-heading {
  padding: 20px;
}
.meshtitle-img {
  display: flex;
}
.meshtitle-img > h3 {
  padding: 20px;
} 
.heading-container{
  padding: 40px 0 40px 0;
} 
ul.category {
  font-weight: bold;
}

ul.category li {
  margin-left: 5px;
  font-weight: normal;
  display: inline-flex;
  width: 200px;
}

.card-content {
  border-right: none;
}

.card-content:not(:last-child) {
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  border-bottom-color: var(--main-dark-grey);
}
.landscape-bg{
  background-image: url('/assets/images/mesh-cubes-trans.svg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: var(--main-dark-grey);
  color: aliceblue;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 5;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
`;
