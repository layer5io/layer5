import styled from "styled-components";

const DeployServiceMeshWrapper = styled.div`   
    html {
        scroll-behavior: smooth;
    }
    h3.sub-heading {
        margin-top: 2rem;
        color: ${props => props.theme.white};
    }
    .hero{
        background-color: #EBC017;
        height: 35rem;
        text-align: center;
        padding: 200px 0px 10px 0px;
        p{
            padding-top: 20px; 
        }
    }
    .info{
        padding: 70px 0px 70px 0px;
        h3{
            font-weight: 650;
        }
        h4{
            font-weight: 600;
            padding-bottom: 15px;
        }
        p{
            color: #737373;
            font-size: 1.2em;
            padding-right: 20px
        }
        .button{
            text-align: center;
            padding-top:  20px;
        }
    }
    
    .arrow{
        margin: auto;
        width: auto;
        padding: 20px;
        min-height: 400px;
        margin: 3rem 13%;
        border-radius: 50px;
        background-color: #000000;
        h2{
            padding-top: 40px;
            color: white;
            font-size: 2.5em;
            font-weight: 700;
            text-align: center;
        }
        .text{
            color: white;
            display: flex; 
            padding: 30px 40px 0px 40px;
            .right{
                margin-left: auto;
            }
            p{
                padding: 0px 20px 0px 20px;
                font-size: 1.2em;
            }
        }
    }
    .form{
        
        h3{
            font-weight: 700;
        }
        .submit-btn{
            text-align: center;
            padding:  20px 0px 100px 0px;
         }
        .text{
            color: black;
            display: flex; 
            padding: 30px 60px 20px 150px;
            p{
                font-weight: 600;
            }
            .right{
                padding-left: 10px;
                margin-left: auto;
            }
        }
        #slider{
            display: flex;
            padding: 40px
            h4{
                font-size: 16px;
                font-weight: 700;
                width: 150px;
            }
            h5 {
                font-size: 16px;
                font-weight: 700;
                margin-left: 10px;
                margin-top: 7px;
            }
        }
    }
    .slidecontainer {
        width: 100%;
        position: absolute;
        margin: 0 auto;
      }
      
      @media screen and (-webkit-min-device-pixel-ratio:0) {
        input[type='range'] {
            -webkit-appearance: none;
            background-color: #D2CECC;
            -webkit-appearance: none;
            -moz-apperance: none;
            border-radius: 6px;
            height: 6px;  
        }
        .bubble {
            background: red;
            color: white;
            padding: 4px 12px;
            position: absolute;
            border-radius: 4px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 5px;
          }
          .bubble::after {
            content: "";
            position: absolute;
            width: 2px;
            height: 2px;
            background: red;
            top: -1px;
            left: 50%;
          }
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        // overflow: hidden;
        cursor: pointer;
      }
      
      .slider:hover {
        opacity: 1;
      }
      
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border:5px solid #00B39F;
        // box-shadow: -100vw 0 0 100vw dodgerblue;
        background: #FFFFFF;
        cursor: pointer;
      }
      
      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
      }
      .additional{
          position: relative;
          .blur{
            filter: blur(4px);
          }
      }
      .submit{
          text-align: center;
          padding: 150px 0px 200px 0px;
          background-color: rgba(228, 231, 237, 0.8);
          position:absolute;
          left: 0;
        right: 0;
        margin: auto
          border-radius: 25px;
          z-index: 3000;
        width: 100%;
        height: 90%;
        
          h2{
              font-weight: 700;
              padding: 0px 0px 20px 0px;
          }
          .email{
              width: 200px;
              height: 48px;
              padding: 15px;
              margin: 5px;
              border-radius: 5px;
              font-size: 15px;
          }
          #arrow-btn{
              width: 60px;
          }
      }
    
    .book_cover{
        display: flex;
        margin: auto;
        background: #00B39F;
        .book_col {
            max-height: 40rem;
        }
        .text{
            padding: 5rem 5rem 5rem 13rem;
            @media screen and (max-width: 1200px) {
                padding: 5rem 5rem 5rem 10rem;
            }
            @media screen and (max-width: 950px) {
                padding: 5rem;
            }
            @media screen and (max-width: 750px) {
                padding: 2rem;
            }
            .cover{
                border: 2px solid white;
                width: 240px;
                padding: 10px;
                text-align: center;
            }
            h1, p, .learn{
                color: white;
            }
        }
    }

    .book_img {
        text-align: center;
        align-self: center;
        .bookLink {
            
        }
        img {
            max-height: 38rem;
            vertical-align: middle;
            @media screen and (max-width: 576px) {
                max-height: 28rem;
                margin: 1rem auto;
            }
        }
    }

    .tooltip {
        position: relative;
        display: inline-block;
      }
      
      .tooltip .tooltiptext {
        visibility: hidden;
        
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        font-size: 1rem;
        
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        padding: 1rem;
        margin-left: -140px;
        width: 12.5rem;
        font-size: .9125rem;
        line-height: 1.25rem;
        text-align: center;
        width: 300px;
        color: ${props => props.theme.white};
        background: ${props => props.theme.tertiaryColor};
        z-index: 3000;
        border-bottom-right-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        transition: all 0.5s ease;
        p {
            margin: 0;
        }
        &:hover {
            cursor: default;
            .tooltiptext {
                transform: translateY(-0.5rem);
            }
        }
      }
      
      .tooltip:hover .tooltiptext {
        visibility: visible;
      }
      .progress {
        background-color: #d8d8d8;
        border-radius: 20px;
        position: relative;
        margin: 15px 0;
        height: 30px;
        width: 90%;
        margin: 20px auto;
    }
    
    .progress-done {
        background: linear-gradient(to left, #00B39F, #00D3A9);
        box-shadow: 0 3px 3px -5px #00B39F, 0 2px 5px #00B39F;
        border-radius: 20px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 0;
        opacity: 0; 
        transition: 1s ease 0.3s;
    }
`;

export default DeployServiceMeshWrapper;