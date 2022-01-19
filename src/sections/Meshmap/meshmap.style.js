import styled from "styled-components";

const MeshmapWrapper = styled.div`
  

  .required-sign {
    color: #8b0000;
  }

  .checkbox-label {
    font-size: .8rem;
  }

  .para {
      padding-top: 4rem;
  }

  .image {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-bottom: 1rem;

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
    width: 100%;
}
p.caption {
  display: relative;
  margin-top: -3rem;
  font-style: italic;
  text-align: center;
}
  .member-header{
    align-items:center;
    padding-left:200px
  }

  .title1 {
    font-weight: 700;
    margin: 70px 0px 10px 0px;
  }
    .title {
        font-weight: 700;
        margin: 70px 0px 10px 0px;
    }

    .label {
      font-size: 1rem;
    }




    .form {
        margin: 1rem;
        font-size: .9rem;
        margin: 1rem 1.25rem 1rem 0rem;
        box-shadow: 0px 10px 10px 2px rgba(0, 179, 159, 0.5);
        padding: 1rem;


        label {
            display: block;
        }
        
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
            font-size: .85rem;
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
          margin: 1.9rem auto;
          display: block;
          width: auto;
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
      margin: 5%;
      padding: 5%;
      background-color: ${props => props.theme.darkJungleGreenColor};
      border-radius: 10%;
      
      h2, h3 {
        color: white;
      }
      h2{
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

      @media only screen and (max-width: 62rem) {
          .image {
            width: auto;
            height: auto;
          }
          .title1 {
            text-align: center;
        }
        .hero-text {
            text-align: center;
        }
        p {
            padding-top: 4rem;
        }
        }

        @media (max-width: 770px) {
            .image {
                width: auto;
                height: auto;
              }

           

            .hero-text {
                .title1 {
                    text-align: center;
                }
            }
            
             
        }
      @media only screen and (max-width: 600px) {
        image {
            width: auto;
            height: auto;
          }
        .form{
            .btn {
            width: 50%;
        }
    }
      }
    }
`;

export default MeshmapWrapper;
