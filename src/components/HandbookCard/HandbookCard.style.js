import styled from "styled-components";

export const HandbookCardWrapper = styled.div`
	.handbook__card--main {
	  margin: 1rem;
	  display: block;
	}

    .handbook__card {
	  border-radius: 5px;
	  width: 25rem;
	  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	  overflow: hidden;
	  height: 15rem;
	  transition: all 0.3s;
	  position: relative;
	}

	.handbook__card--head {
	  padding: 1.25rem;
	  color: rgb(30, 33, 23);
	  text-align: center;
	  transition: all 0.3s;
	  position: relative;
	  font-size: 1.5rem;
	}

	.handbook__card--head::before {
	  content: "";
	  display: inline;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 4px;
	  background: rgb(71,126,150);
      background: linear-gradient(250deg,rgba(71,126,150,1) 0%,rgba(0,179,159,1) 35%,rgba(60,73,79,1) 100%);
	  z-index: -100;
	  transition: all 0.3s;
	}

	.handbook__card--line {
	  margin: 0 1rem;
	  height: 1px;
	  background-color: #eee;
	}

	.handbook__card--para {
	  color: rgba(0, 0, 0, 0.75);
	  text-align: center;
	  margin: 1.5rem;
	  margin-bottom: 0rem;
	  line-height: 2;
	  letter-spacing: 1px;
	  font-weight: 500;
	  font-size: .8rem;
	}

	.handbook__card--lm__container {
	  display: flex;
	  justify-content: flex-end;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  padding-bottom: 10px;
	}

	.handbook__card--lm {
	  margin: .5rem 1rem;
	  font-size: .8rem;
	  text-decoration: none;
	  color: rgba(71,126,150,1);
	  font-weight: 500;
	  padding: 0.1rem .5rem;
	  transform: translateX(5rem);
	  transition: all 0.4s;
	  opacity: 0;
	  display: flex;
	  align-items: center;
	}

	.handbook__card--lm:hover {
	  border-bottom: 1px solid rgba(71,126,150,1);
	}

	.handbook__card:hover .handbook__card--lm {
	  transform: translateX(0);
	  opacity: 1;
	}

	.handbook__card:hover .handbook__card--head::before {
	  height: 100%;
	}

	.handbook__card:hover {
	  height: 17rem;
	}

	.handbook__card:hover .handbook__card--head {
	  color: #fff;
	}
`;
