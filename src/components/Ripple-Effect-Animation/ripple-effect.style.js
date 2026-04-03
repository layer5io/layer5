import styled from "styled-components";
const RippleWrapper = styled.div`
$color: green;

body {
  background-color: black;
  overflow: hidden;
}

.wrap {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
}

button {
  background: transparent;
  cursor: pointer;
  border: 2px solid white; 
  color: white;
  height: 130px;
  width: 130px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 100%;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 30px;
  transition: all 0.7s ease;
  padding: 10px;
  &:hover {
    animation: ripple 1.5s linear infinite;
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
    font-size: 16px;
    line-height: 24px;
  }
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba($color, 0.3),
      0 0 0 1px rgba($color, 0.3),
      0 0 0 3px rgba($color, 0.3),
      0 0 0 5px rgba($color, 0.3);
  }
  100% {
    box-shadow: 0 0 0 0 rgba($color, 0.3),
      0 0 0 4px rgba($color, 0.3),
      0 0 0 20px rgba($color, 0),
      0 0 0 30px rgba($color, 0);
  }
}
`;
export default RippleWrapper;