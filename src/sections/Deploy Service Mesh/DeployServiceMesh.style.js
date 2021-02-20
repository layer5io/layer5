import styled from "styled-components";
import bookCover from "../../assets/images/learn/book-cover.png";

const DeployServiceMeshWrapper = styled.div`     
    scroll-behavior: smooth; 
    #hero{
        background-color: #EBC017;
        height: 246px;
        text-align: center;
        padding: 50px 0px 10px 0px;
        p{
            padding-top: 20px; 
        }
    }

    #info{
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
    
    #arrow{
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
        #text{
            color: white;
            display: flex; 
            padding: 30px 40px 0px 40px;
            #right{
                margin-left: auto;
            }
            p{
                padding: 0px 20px 0px 20px;
                font-size: 1.2em;
            }
        }
        #arrow-box{
            
            padding: 20px 40px 20px 40px;
            display: flex;
            .arrow-left {
                // width: 90%;
                height: 0;
                padding-top: 2.3em;
                padding-bottom: 25%;
                padding-left:20px;
                position: relative;
                overflow: hidden;
            }
            .arrow-left:after {
                content: "";
                display: block;
                width: 0; 
                height: 0; 
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent; 
                border-right: 60em solid #00B39F;
            }

            .arrow-right {
                margin-left: auto;
                // width: 10%;
                height: 0;
                padding-top: 1.3em;
                padding-bottom: 20%;
                padding-right: 75px;
                position: relative;
                overflow: hidden;
            }
            .arrow-right:after {
                content: "";
                display: block;
                width: 0; 
                height: 0; 
                border-top: 2em solid transparent;
                border-bottom: 2em solid transparent;
                border-left: 8em solid #00B39F;
            } 
            @media only screen and (min-width: 1000px) {
                
                .arrow-left:after {
                    
                    border-right: 60em solid #00B39F;
                }
    
                .arrow-right {
                    padding-top: 1.3em;
                }
            }
            @media only screen and (max-width: 1000px) {
                
                .arrow-left:after {
                    
                    border-right: 60em solid #00B39F;
                }
    
                .arrow-right {
                    padding-top: 2.1em;   
                }
                .arrow-right:after {
                    border-top: 1.4em solid transparent;
                    border-bottom: 1.4em solid transparent;
                    border-left: 5em solid #00B39F;
                }
            }
            @media only screen and (max-width: 600px) {
                
                .arrow-left:after {
                    
                    border-right: 60em solid #00B39F;
                }
    
                .arrow-right {
                    padding-top: 2.6em;   
                }
                .arrow-right:after {
                    border-top: 1.0em solid transparent;
                    border-bottom: 1.0em solid transparent;
                    border-left: 2.4em solid #00B39F;
                }
            }
            @media only screen and (max-width: 400px) {
                
                .arrow-left:after {
                    
                    border-right: 60em solid #00B39F;
                }
    
                .arrow-right {
                    padding-top: 3.1em;   
                }
                .arrow-right:after {
                    border-top: 0.4em solid transparent;
                    border-bottom: 0.4em solid transparent;
                    border-left: 1.4em solid #00B39F;
                }
            }
        }
    }

    #form{
        #text{
            color: black;
            display: flex; 
            padding: 30px 60px 20px 150px;
            p{
                font-weight: 600;
            }
            #right{
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
            // #slide{
            //     margin: 60px 0 0 0%;
            //     width: 100%;
            // }
        }
    }
    .slidecontainer {
        width: 100%;
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
      #submit{
          text-align: center;
          padding: 150px 0px 200px 0px;
          h2{
              font-weight: 700;
              padding: 0px 0px 20px 0px;
          }
          .email{
              width: 200px;
              height: 48px;
              padding: 15px;
              margin-right: 10px;
          }
          #arrow-btn{
              width: 60px;
          }
      }

      #bot{
          #green{
              background: #00B39F;
              width: 100%;
              min-height: 400px;
              #text{
                  color: white;
                  padding: 120px 70px 120px 150px;
                  #cover{
                      border: 2px solid white;
                      width: 240px;
                      padding: 10px;
                      text-align: center;
                  }
                  h1{
                      color: white;
                  }
                  #learn{
                      color: white;
                  }
              }
          }
          #book{

            background-image: url(${bookCover});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: right;
            
            @media only screen and (min-width: 1600px) {
                background-size: 55em 2000px;
            }
            @media only screen and (max-width: 1400px) {
                background-size: 50em 2000px;
            }
            @media only screen and (max-width: 1200px) {
                background-size: 45em 2000px;
            }
            @media only screen and (max-width: 1000px) {
                background-size: 40em 2000px;
            }
          }
      }
`;

export default DeployServiceMeshWrapper;
