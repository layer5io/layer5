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

  .li.active .status::before {
    border-color: #00B39F;
  }

  .li.complete .status,
  .li.active .status {
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

  .required-sign {
    color: #8b0000;
  }

  .checkbox-label {
    font-size: .8rem;
  }

  @media (min-width: 320px) and (max-width: 700px) {
    .status {
      border-top: 3px solid #EFEFEF;
      padding: 0px 25px;
    }
    .status:before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 3px solid #EFEFEF;
      top: -12px;
      left: -10%
    }
  }
  .member-header{
    align-items:center;
    padding-left:200px
  }

    .title {
        font-weight: 700;
        margin: 70px 0px 10px 0px;
    }

    .para {
        color: #777777;
    }
    .label {
      font-size: .9rem;
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
        margin: 40px 40px;

        .form-name {
            font-weight: 600;
            margin: 20px 0px 5px 3px;
            display: block;
        }

        .text-field {
            width: 100%;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
            font-size: .9rem;
        }

        .text-field:focus {
          border: 2px solid #00B39F;

        }

        .form-select {
            width: 150px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
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
          margin: 2px 10px !important;
        }

        .btn {
          float: right;
          margin: 20px 0;
        }

      }
      .btn-wrapper {
        float: right;
        width: 350px;

        .btn-next {
          float: left;
        }

        button.btn-prev {
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

    .center {
        /* display: flex;
        flex-wrap: wrap; */
        align-items: center;
        justify-content: center;
        margin: 90px;
        padding:0px 10px;
    }

    .option {
        cursor: pointer;
        flex: 1 1 160px;
        /* border-radius: 15px; */
        background-color: #C9FCF6;
        margin: 25px 5px;
        color: #00B39F;
        text-align: center;
        padding: 25px 10px; 
    }
    .option:hover{
        background-color: #00B39F;
        color:white;
    }
    .option.active{
      background-color: #00B39F;
      color:white;
    }

    .black-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      min-height: 400px;
      margin: 3rem 13%;
      background-color: ${props => props.theme.darkJungleGreenColor};
      
      h2, h4 {
        color: white;
      }
      h4{
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
      p {
        margin-top: .85rem;
        color: white;
      }

      .btn-box {

        .btn-one, .btn-two {
          margin: .65rem;
        }

        .btn-one:hover {
          color: ${props => props.theme.darkJungleGreenColor};
        }
        .btn-two:hover {
          color: ${props => props.theme.darkJungleGreenColor};
        }
      }

      @media only screen and (max-width: 600px) {
        .btn-box {
          width: 100%;
        }
      }
    }

    h2.title {
      color: ${(props) => props.theme.primaryColor};
    }
`;

export default Webform;
