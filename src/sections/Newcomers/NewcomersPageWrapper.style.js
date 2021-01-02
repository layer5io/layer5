import styled from "styled-components";

const NewcomersPageWrapper = styled.section`
  max-width: 1170px;
  display: block;
  height: auto;
  padding: 0px 20px;
  margin: 200px auto;
  color: #3c494e;
  line-height: 32px;

  table {
    display: block;
    width: auto;
    overflow-x: auto;
  }

  .title {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
  }

  .newcomersIntro {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #00b39f;
  }

  .newcomersImage {
    max-width: 450px;
    height: 420px;
  }
  .newcomersContribute h4 {
    font-size: 25px;
  }
  .newcomersContribute {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .left h4::after {
    background: none repeat scroll 0 0 #00b39f;
    bottom: -7px;
    content: "";
    display: block;
    height: 2px;
    position: relative;
    width: 72%;
  }
  .row p {
    text-align: center;
  }
  .scnd h4::after {
    background: none repeat scroll 0 0 #00b39f;
    bottom: -7px;
    content: "";
    display: block;
    height: 2px;
    position: relative;
    width: 84%;
  }
  .right h4::after {
    background: none repeat scroll 0 0 #00b39f;
    bottom: -7px;
    content: "";
    display: block;
    height: 2px;
    position: relative;
    width: 52%;
  }
  .newcomersContribute li {
    margin-left: 0rem;
  }
  .left {
    margin-left: 5.5rem;
  }
  ol {
    list-style: upper-roman inside;
    margin-left: -1rem;
  }
  .left p {
    margin: 0 !important;
  }
  .left h4 {
    margin-left: 1.5rem;
  }
  .right h4 {
    margin-left: 1.5rem;
  }
  .right {
    margin-right: 4rem;
    margin-left: -2rem;
  }
  .right li {
    margin: 0;
  }
  .newcomersDescription {
  }
  .newcomers {
    display: flex;
    flex-direction: column;
    column-gap: 4rem;
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
    margin-bottom: 3.5rem;
    margin-top: 4rem;
  }
  .newcomersBody {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
  .contributorsJourney {
    margin: auto 0;
  }
  .contributorsJourney p {
    font-size: 40px;
    font-weight: 50 !important;
    line-height: 3rem;
    text-align: center;
    color: #3c494e;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .newcomersButton {
    color: white;
    background: #00b39f;
  }
  
  .newcomersEnd {
    position: relative;
    text-align: center;
    color: white;
    line-height: 3rem;
    font-size: 45px;
  }
  .newcomersTable {
    display: table;
    width: 100%;
    height: auto;
    border-collapse: collapse;
    margin: 60px auto;

    th,
    tr {
      height: 60px;
      vertical-align: middle;
    }
    th {
      background-color: #f0f0f0;
    }
    th,
    td {
      border-bottom: 1px solid #ddd;
      padding: 0px 10px;
    }
  }

  h3 {
    margin-bottom: 5px;
    text-align: center;
    font-size: 30px;
  }
  @media screen and (max-width: 992px) {
    .newcomers {
      width: 90vw;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .newcomersBody {
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
    }
    .contributorsJourney p {
      font-size: 25px;
      font-weight: bolder;
    }
    .newcomersContribute {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      margin-top: -2rem;
    }
    .working {
      flex-direction: column-reverse;
    }
    .newcomersDescription {
      margin-top: -5rem;
    }
    .left {
      margin-left: 0;
    }
    .right {
      margin-left: 0;
    }
    .row {
      margin-top: 4rem;
    }
    .row h4 {
      text-align: center;
    }
    .date {
      display: none;
    }

    .newcomersEnd {
      position: relative;
      text-align: center;
      color: white;
    }
    .newcomersButton {
      margin-top: 1rem;
    }
    .newcomersEnd p {
      font-size: 13px;
      line-height: 1.25rem;
    }
    .row td {
      font-size: 12px;
      line-height: 1.25;
    }
  }

  @media (max-width: 920px) {
    .newcomersImage {
      max-width: 300px;
    }

    .title {
      font-size: 35px;
    }
  }

  @media (max-width: 670px) {
    .newcomersIntro {
      flex-wrap: wrap;
    }
  }
`;

export default NewcomersPageWrapper;
