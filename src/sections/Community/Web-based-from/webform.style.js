import styled from "styled-components";

const Webform = styled.div`
  
.timeline {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
  
  .li {
    transition: all 200ms ease-in;
  }
  
  .timestamp {
    margin-bottom: 20px;
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 100;
  }
  
  .status {
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    border-top: 5px solid #EFEFEF;
    position: relative;
    transition: all 200ms ease-in;
  }
  .status:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 25px;
    border: 5px solid #EFEFEF;
    position: absolute;
    top: -15px;
    left: 42%;
    transition: all 200ms ease-in;
  }

  .li.complete .status {
    border-top: 5px solid #00B39F;
  }
  .li.complete .status:before {
    background-color: #00B39F;
    border: none;
    transition: all 200ms ease-in;
  }
  .li.complete .status h4 {
    color: #66DC71;
  }
  
  @media (min-device-width: 320px) and (max-device-width: 700px) {
    .timeline {
      list-style-type: none;
      display: block;
    }
  
    .li {
      transition: all 200ms ease-in;
      display: flex;
      width: inherit;
    }
  
    .timestamp {
      width: 100px;
    }
  
    .status:before {
      left: -8%;
      top: 30%;
      transition: all 200ms ease-in;
    }
  }

    .title {
        font-weight: 700;
        margin: 70px 0px 10px 0px;
    }

    .para {
        color: #777777;
    }

    .container-1 {
      margin: 40px 0;
      
      .text {
        margin: 80px 0;
      }
    }

    .btn-prev1 {
      float: right;
      margin: 20px 0;
      background-color: white; 
      border: none;
      color: #828C8C;
      padding: 12px 15px;
      font-size: 16px;
      cursor: pointer;
      margin: 0 5px;

      .back {
        font-size: 20px;
      }
    }

    .btn-prev1:hover {
      transition: all 200ms ease-in;
      color: #00B39F;
    }

    .form {
        margin 40px 40px;

        .form-name {
            font-weight: 600;
            margin: 20px 0px 5px 0px;
        }

        .text-field {
            width: 100%;
            border: 1px solid black;
            border-radius: 15px;
            height: 40px;
            padding: 5px;
        }

        .form-select {
            width: 150px;
            border: 1px solid black;
            border-radius: 15px;
            height: 40px;
            padding: 5px;
        }

        .upload-field {
            width: 100%;
            border: 1px dashed black;
            border-radius: 15px;
            height: 50px;
            padding: 12px;
        }

        .form-check {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          outline: 1px solid #828C8C !important;
          margin: 0px 10px !important;
        }

        .btn {
          float: right;
          margin: 20px 0;
        }

        .btn-wrapper {
          float: right;
          width: 350px;

          .btn-next {
            float: left;
          }

          .btn-prev {
            background-color: white; 
            border: none;
            color: #828C8C;
            float: left;
            padding: 12px 15px;
            font-size: 16px;
            cursor: pointer;
            margin: 0 5px;

            .back {
              font-size: 20px;
            }
          }

          .btn-prev:hover {
            transition: all 200ms ease-in;
            color: #00B39F;
          }
        }
    }

    .center {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 70px;
    }

    .option {
        cursor: pointer;
        flex: 1 1 160px;
        height: 200px;
        border-radius: 15px;
        background-color: #00B39F;
        margin: 10px 5px;
        max-width: 250px;
        color: white;
        text-align: center;
        padding-top: 85px; 
    }
    .option:hover{
        background-color: #EBC017;
    }

    .black-box {
      margin: auto;
      width: auto;
      padding: 20px;
      min-height: 400px;
      margin: 3rem 13%;
      border-radius: 50px;
      background-color: #1E2117;

      h2{
        padding-top: 60px;
        color: white;
        font-size: 2.4em;
        font-weight: 700;
        text-align: center;
      }

      p {
        padding-top: 10px;
        color: white;
        text-align: center;
      }

      .btn-box {
        width: 50%;
        margin: auto;

        .btn-one {
          color: white;
          margin: 10px;
        }

        .btn-two {
          margin: 10px;
        }

        .btn-one:hover {
          color: #111111;
        }
      }

      @media only screen and (max-width: 600px) {
        .btn-box {
          width: 100%;
        }
      }
    }
`;

export default Webform;
