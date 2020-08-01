import styled from "styled-components";
export const BlogWrapper = styled.div`
    
    kbd, pre, samp {
      background-color: black;
      color: white;
      padding:10px;
    }
    
    code {
      color: #666;
    }
    
    .sub-heading {
      color:gray;
      position:relative;
      top:-10px;
    }
    
    .to-uppercase {
      text-transform: uppercase;
    }
    
    .content-left-margin {
      margin-left:.5em;
    }
    
    .table-1 {
      line-height: .15em;
      white-space: nowrap;
      max-width:290px;
    }
    
    .table-2 {
      width:40%;
      margin-left:1.8em;
    }
    
    .table-box {
      margin-top:2em;
      margin-bottom:2em;
      width:50%;
      border: 2px solid gray;
    }
    .text-centre {
      text-align:center
    }
    
    .starting-letter {
      margin-left:.75em;
      font-size: 2em;
    }
    
    .pull-right {
      float:right;
    }
    
    .hidden {
      display:none;
    }
    
    .fit-content {
      width:fit-content;
    }
    
    .embed-dimension {
      min-height: 315px;
      min-width: 280px;
    }
    
    .pa-20{
      padding: 20px;
    }
    
    .image-left {
      width: 40%;
      float: left;
      padding-right: 10px;
    }
    
    .image-right {
      width: 40%;
      float: right;
      padding-left: 10px;
    }
    
    .image-center {
      display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    
    .align-right{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 22%;
      height: 22%;
      float: right;
      border-radius: 50%;
    }
    
    .gsoc-image{
        max-width: 100%; 
        height: auto;
    }
`;
