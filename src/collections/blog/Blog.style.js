import styled from "styled-components";
export const BlogWrapper = styled.div`
    color:#000;
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
      text-align:center;
    }
    .table-adapters {
      float: right;
      width: auto;
      vertical-align: middle;
      border: 1px solid darkgray;
      .adapter-logo {
        vertical-align: middle;
        margin-right: 5px;
        height: 30px;
        width: 30px;
      }
      .stable-adapters {
        width: auto;
        background-color: #3C494F;
        text-align: center;
        color: #fff;
      }
      .beta-adapters {
        width: auto;
        background-color: #00D3A9;
        text-align: center;
        color: #fff;
      }
      .alpha-adapters {
        width: auto;
        background-color: lightgray;
        text-align: center;
        color: black;
      }
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
        width: 90%;
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
    .smp-image{
      height:40%;
      width:40%;
    }
    .date{
      color:gray;
    }

    .centered-text{
      color:#3c494f;
      text-align:center;
    }
    .kubecon-header{
      color:#00b39f;
    }
    .kubecon-img1{
      width:28%;
    }
    .kubecon-img2{
      padding-top:8px;
      width:28%;
    }
    .kubecon-img3{
      padding-top:15px;
      width:28%;
    }
`;
