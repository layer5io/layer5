import styled from "styled-components";
export const QuizComponentWrapper = styled.div`
    .instruction__container{
        padding: 7.5rem;
    }

    .ins__main{
        margin: 0 auto;
        background-color: ${props => props.theme.secondaryColor};
        padding: 2rem;
        max-width: 60rem;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }

    .ins__list{
        padding-left: 1rem;
        margin: 0 0 1rem 0;
    }

    .ins__list li{
        color: white;
        font-size: 1rem;
        margin: 1rem;
        font-weight: bold;
        line-height: 2.5rem;
    }

    .ins__btn{
        background-color: white;
        color: ${props => props.theme.secondaryColor};
        font-weight: bold;
        padding: 1rem;
        border: none;
        cursor: pointer;
        transition: all .4s;
        border-radius: 5px;
        width: 15rem;
        align-self: center;
    }

    .ins__btn:hover{
        background-color: #f1f1f1;
    }

    .resultbox__container {        
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7.5rem 10rem;
        padding-bottom: 10rem;
    }
    
    .resultbox__main {
        padding: 3rem 0;
        box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        min-width: 40rem;
        background-color: ${props => props.theme.secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .resultbox__main h1 {
        text-align: center;
        color: white;
        margin: 2rem 3rem;
        font-size: 2.5rem;
        margin-top: 0rem;
    }
    
    .resultbox__main p {
        text-align: center;
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        margin-bottom: 1.5rem;
    }
    
    .resultbox__main button {
        margin-top: 2rem;
        // width: 12rem;
        padding: 1rem;
        font-size: 1rem;
        border: 2px solid white;
        border-radius: 5px;
        background-color: white;
        color: ${props => props.theme.secondaryColor};
        font-weight: bold;
        cursor: pointer;
    }

    .quizbox__container {
        padding: 7rem 5rem;
        padding-top: 5rem;
        flex-direction: column;
      }
      
      .quizbox__head--container{
        display: flex;
        margin: 0 auto;
        width: 50rem;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2rem;

        .timer__text{
          color: ${props => props.theme.secondaryColor};
          border: 2px solid ${props => props.theme.secondaryColor};
          padding: 5px 8px;
          border-radius: 10px;
        }
      }
      
      .quizbox__progress{
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding: 0 .25rem;
        padding-bottom: 0;
      }

      .quizbox__control {
        display: flex;
        text-align: center;
        padding: 0 .25rem;
        padding-bottom: 0;
        
        & > div {
          flex: 1;
          &:first-child {
            margin-right: 1.5rem;
          }
        }
      }
      
      .quizbox__progress--score{
        padding: .6rem;
        margin-top: 1.5rem;
        background-color: ${props => props.theme.secondaryColor};
        font-size: 1rem;
        color: white;
        font-weight: bold;
        border-radius: 5px;
      }

      .quizbox__progress--control {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        .quizbox__progress-control__icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        label {
          margin: 0 0.5rem;
          cursor: pointer;
        }
      }
      
      .quizbox__head {
        color: ${props => props.theme.secondaryColor};
        text-transform: uppercase;
        letter-spacing: 3px;
      }
      
      .quizbox__main {
        width: 50rem;
        margin: 0 auto;
        padding: 2rem 3rem;
        padding-bottom: 1.5rem;
        box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }
      
      .quizbox__main ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 1rem 0;
        margin-top: 2rem;
    }
    
    .quizbox__main li {
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 1px solid rgb(189, 189, 189);
        margin-bottom: 2rem;
        font-weight: 600;
        font-size: 1rem;
        text-transform: capitalize;
        cursor: pointer;
      }
      
      .quizbox__main li:hover {
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
      }
      
      .quizbox__main li:last-of-type {
        margin-bottom: 0;
      }
      .no-ans{
        background:transparent;
        color: #222;
      }
      .ans {
        background-color:#00b39f;
        color:white;
      }

`;
