import styled from "styled-components"

const L404SectionWrapper = styled.section`
  padding: 150px 0 100px 0;
  position: relative;
  overflow: hidden;
  text-align: center;
  .brandHeader {
    height: auto;
    vertical-align: middle;
    padding-top: 3rem;
  }
  .post-content {
    margin: 0 0.1rem;
    background-color: #8F8F8F;
    color: #ffffff
    padding: 1em;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .Layer5TagDark {
    background: #000000
  }
  h2 {
    color: grey;
    text-align: center;
  }
  .ImgDiv {
    text-align:center;
    margin: 2rem 0rem;
  }
  .waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    -webkit-transition: .3s ease-out;
    transition: .3s ease-out;
  }
  .waves-effect.waves-light .waves-ripple {
    background-color: rgba(255, 255, 255, 0.45);
  }
  .mr {
    margin: 6px 0;
  }
  .btn, .btn-large, .btn-flat {
    border: none;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 2rem;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
}
.z-depth-2 {
  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
 .l5-dark-yellow {
  background-color: rgb(186, 152, 16) !important;
}
.layerH3 {
    float: left;
}
  .buttonPara {
    text-align:center;
    float:right;
  }

  .MeshColor {
    float:left;
    padding:5px;
    margin:3px;
    height:227px;
    background-color:#3c494f;
    color:#fff;
    width:30%;
  }
  .ImageHubWhite {
    float:left;
    padding:3px;
    background-color:#3c494f;
  }
  .SmpWhite {
    background-color:#000000;
  }
`

export default L404SectionWrapper
