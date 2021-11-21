import styled from "styled-components";

const MeshmapWrapper = styled.div`
  

  .required-sign {
    color: #8b0000;
  }

  .checkbox-label {
    font-size: .8rem;
  }

  .image {
    width: 700px;
    height: 490px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-right: 20px;

}

  .bullet-image {
      width: 50px;
      height: 75px;
      vertical-align: middle;
  }


  .bullet {
      ul > li {
          color: ${props => props.theme.darkJungleGreenColor};
      }
  }
  .meshmapImage{
    display: block;
    margin: 4rem auto;
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
      font-size: 1rem;
    }


    .container-1 {
      margin: 40px 0;
      
      .text {
        margin: 80px 0;
      }
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
            font-size: 1rem;
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
`;

export default MeshmapWrapper;
