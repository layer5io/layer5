import styled from "styled-components";

export const HandbookWrapper = styled.div`
  /* Note: It’s best to define these CSS variables globally (e.g., via a GlobalStyle)
     so they can be shared across your application. */
  /* Example (if needed locally):
  :root {
    --text: #000000;
    --menuColor: #333333;
    --tertiaryColor: #444444;
    --secondaryLightColor: #f5f5f5;
    --primaryLightColorTwo: #cccccc;
    --meshInterfaceLogoFilter: 0;
    --keppelColor: #00cccc;
    --primaryLightColor: #dddddd;
    --grey313131ToGreenC9FCF6: #313131;
    --green00D3A9ToGreen00B39F: #00d3a9;
    --grey212121ToWhite: #212121;
    --projectShadowsize: 5px;
    --green00D3A9ToGreyE6E6E6: #e6e6e6;
    --primaryColor: #00d3a9;
    --secondaryColor: #ffcc00;
  }
  */

  .content > a:first-of-type > h2:first-of-type {
    padding-top: 1rem;
  }

  .highlight {
    font-weight: 600;
  }

  .content {
    width: 100%;
    padding-bottom: 2rem;
  }

  .content ul > li,
  .content ul > li > span {
    color: var(--text);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .content ol > li {
    color: var(--menuColor);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .content ol > li > span {
    color: var(--text);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  h2 h3 {
    margin: 0.5rem 0;
    color: var(--tertiaryColor);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  /* Page Sections */
  .page-section {
    h2 {
      padding-top: 0rem;
      margin-top: 0rem;
    }
    h3 {
      padding-top: 7rem;
      margin-top: -7rem;
    }
    @media (min-width: 750px) {
      margin-top: -53rem;
      margin-left: 20rem;
      display: flex;
    }
    @media screen and (min-width: 768px) and (max-height: 1145px) {
      margin-top: -90vh;
    }
    @media screen and (min-width: 1280px) and (max-width: 1350px) {
      margin-left: 16rem;
    }
  }

  .conduct-section {
    @media screen and (min-width: 751px) {
      margin-top: -90rem;
    }
    @media screen and (min-width: 768px) and (max-height: 1145px) {
      margin-top: -90vh !important;
    }
  }

  .page-section .heading-top {
    @media screen and (min-width: 751px) {
      padding-top: 1rem;
    }
  }

  /* Sidebar */
  .sidebar {
    margin: 0;
    padding: 0;
    width: 250px;
    background-color: var(--secondaryLightColor);
    position: absolute;
    height: 150rem;
    overflow: auto;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }

  .sidebar a.active {
    background-color: var(--primaryLightColorTwo);
    color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .sidebar a:hover:not(.active) {
    background-color: var(--secondaryLightColor);
    color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  /* Page Header */
  .page-header-section {
    height: 10rem;
    text-align: center;
    background: linear-gradient(
      250deg,
      rgba(71, 126, 150, 1) 0%,
      rgba(0, 179, 159, 1) 35%,
      rgba(60, 73, 79, 1) 100%
    );
    h1 {
      line-height: 10rem;
      color: white;
    }
  }

  /* Community Home */
  .community-home-subtitle {
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
  }

  #sign-off {
    padding-bottom: 4rem;
  }

  /* Tables */
  table {
    border-collapse: collapse;
    width: 98%;
    margin: 1rem 0 2rem;
  }

  table .github-icon {
    height: 1.7rem;
    width: auto;
    display: block;
    margin: 0 auto;
    filter: invert(var(--meshInterfaceLogoFilter));
  }

  table .site-icon {
    height: 1.6rem;
    width: auto;
    display: block;
    margin: 0 auto;
  }

  table .inline {
    display: inline;
    vertical-align: bottom;
  }

  table .smp-action {
    filter: invert(var(--meshInterfaceLogoFilter));
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  td,
  th {
    border: 0.05rem solid var(--primaryLightColor);
    text-align: left;
    padding: 0.5rem;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .archived-project {
    opacity: 0.3;
    background-color: #808080;
  }

  .linkscol {
    text-align: center;
    width: 8%;
  }

  tbody:nth-child(even) {
    background-color: var(--secondaryLightColorTwo);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .codes {
    width: 75%;
    margin-top: -2rem;
  }

  /* Community Home Container */
  .community-home-container {
    padding: 1rem 0;
    padding-bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-top: 10px;
  }

  /* Custom Checkbox Styles */
  input[type="checkbox"] + label {
    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label:before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    border: 0.1em solid #000;
    border-radius: 0.2em;
    display: inline-block;
    width: 1.3em;
    height: 1.3em;
    padding-left: 0.2em;
    padding-bottom: 0.3em;
    margin-right: 0.5em;
    margin-bottom: 0.15em;
    vertical-align: bottom;
    background-color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  input[type="checkbox"] + label:active:before {
    transform: scale(0);
  }

  input[type="checkbox"]:checked + label:before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    background-color: var(--keppelColor);
    border-color: var(--primaryLightColorTwo);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  input[type="checkbox"]:disabled + label:before {
    transform: scale(1);
    border-color: #aaa;
  }

  input[type="checkbox"]:checked:disabled + label:before {
    transform: scale(1);
    background-color: var(--secondaryLightColor);
    border-color: var(--secondaryLightColor);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  /* Repository Overview */
  div.accessRequired {
    font-size: small;
    line-height: 0.9rem;
    font-style: italic;
  }

  details.invite-only {
    margin: 1rem;
    padding: 1rem;
    background-color: var(--grey313131ToGreenC9FCF6);
  }

  details.invite-only span {
    font-weight: bold;
    display: inline;
  }

  /* Project Organization */
  .project-org-list a {
    margin-top: 0.5rem;
    margin-right: 0.3rem;
  }

  .project-org-list img {
    height: auto;
    width: 1.6rem;
    vertical-align: middle;
  }

  .project-description-icon {
    width: 3%;
    transform: translate(0, 25%);
    margin: 0 0.3%;
  }

  .project-title-icon {
    margin-left: 10%;
    width: 4%;
    text-align: left;
    transform: translate(0, 28%);
  }
  

  /* Responsive Styles */
  @media only screen and (max-width: 750px) {
    .content > a:first-of-type > h2:first-of-type {
      padding-top: 7rem;
    }
    .page-section {
      margin-top: -2rem;
      margin-left: 0;
      padding: 1rem 2.5rem;
    }
    .page-section .table-container table {
      width: 100%;
      margin-left: 0;
    }
    .page-section .table-container {
      overflow-x: scroll;
    }
    .page-section .table-container::-webkit-scrollbar {
      display: none;
    }
    .codes {
      width: 100%;
      margin-top: -2rem;
    }
  }

  @media only screen and (max-width: 475px) {
    .page-header-section h1 {
      padding: 0 1rem;
      line-height: 3rem;
      padding-top: 4rem;
    }
    .page-section {
      margin-top: -2rem;
      margin-left: 0;
    }
    table {
      margin-left: -1.5rem;
    }
    .frontendTable {
      margin-left: -2.8rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .project-title-icon {
      width: 5.5%;
      transform: translate(0, 23%);
    }
    .project-description-icon {
      width: 4%;
    }
  }

  @media only screen and (max-width: 768px) {
    .project-title-icon {
      width: 8.5%;
    }
    .project-description-icon {
      width: 7%;
    }
  }

  @media only screen and (max-width: 425px) {
    .project-title-icon {
      width: 11%;
      transform: translate(0, 25%);
    }
    .project-description-icon {
      width: 8%;
    }
  }

  @media only screen and (max-width: 375px) {
    .project-title-icon {
      width: 13%;
      transform: translate(0, 20%);
    }
    .project-description-icon {
      width: 10%;
    }
  }

  /* Channels */
  .channels-list {
    padding-left: 40px;
  }

  .channels-img {
    height: 30px;
  }

  .channels-para {
    display: flex;
    align-items: center;
  }

  /* Newcomers Journey */
  .newcomers-journey {
    text-align: center;
    display: flex;
    align-items: center;
    margin: 2.5rem 5rem 3rem 0;
  }

  @media only screen and (max-width: 992px) {
    .newcomers-journey {
      width: 100%;
    }
  }

  .newcomers-journey h2 {
    margin-bottom: 2rem;
  }

  /* Headings */
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heading-start {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-right: 2rem;
    margin-top: -2rem;
  }

  .heading-start h5 {
    font-size: 1.125rem;
    font-weight: 400;
    margin-right: 1rem;
  }

  .heading-start img {
    height: 3rem;
    width: 4rem;
    transition: 0.5s;
  }

  .heading-start img:hover {
    padding-left: 1rem;
    transition: 0.5s;
  }

  /* Intra-page Navigation */
  .intra-page {
    position: sticky;
    top: 10rem;
    right: 0;
    margin-right: 1rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .intra-page .active {
    font-weight: 5000;
    color: var(--secondaryColor);
  }

  .intra-page ul {
    list-style: none;
    margin-top: 3rem;
  }

  .intra-page li {
    padding: 0.5rem 0;
  }

  @media only screen and (max-width: 900px) {
    .intra-page {
      width: 0;
      opacity: 0;
      height: 0;
      visibility: hidden;
      transition: none;
    }
  }

  /* Learn Section */
  .learn {
    width: 10rem;
  }

  /* Writing Program Section */
  .writing_program {
    width: 90%;
  }

  @media only screen and (max-width: 900px) {
    .writing_program {
      width: 100%;
    }
  }

  .writing_program .list {
    padding: 1.875rem 0;
  }

  .writing_program .list table,
  .writing_program .list tr,
  .writing_program .list td {
    border: none;
  }

  .writing_program .list .text p {
    color: var(--tertiaryColor);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .writing_program .list .listed {
    text-align: left;
  }

  .writing_program .list .listed .table .icon {
    height: 2.5rem;
    width: 2.5rem;
    vertical-align: top;
  }

  .writing_program .list .listed .table .skill {
    color: var(--tertiaryColor);
    font-size: 16px;
    padding: 0 0 1.25rem 1.8rem;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .writing_program .list .listed .table .skill h4 {
    font-weight: 600;
  }

  /* Process Section */
  .process {
    margin: 10px auto;
    border-left: solid 2px var(--tertiaryColor);
    padding: 0 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .process .item {
    padding: 10px;
    font-size: 16px;
    line-height: 1.7;
    position: relative;
  }

  .process .item::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border: 3px solid var(--tertiaryColor);
    border-radius: 50%;
    background-color: var(--secondaryColor);
    top: 25px;
    left: -32px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

export default HandbookWrapper;
