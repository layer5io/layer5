import styled from "styled-components";

const ContactPageWrapper = styled.section`

	margin-bottom: 2rem;
	.page-header {
		h3 {
			color: gray;
			font-weight: 400;
		}
	}

	.contact-form-row {
		padding: 0 2rem;

		> div {
			width: 100%;
			margin: auto;
		}

		.card-outline {
			width: 100%;

			&:hover {
				cursor: pointer;
			}
		}
	}

	.contact-form {
		display: flex;
		transition: height ease-in-out 0.75s;
		flex: auto;
		justify-content: center;
		overflow: hidden;
		height:0rem;

		.form-data {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin: auto;
		  }

		.form {
			width: 40%;
			margin: 40px 40px;
	  
			.radio-field {
			  margin-top: 1rem;
			}
			.form-name {
			  font-weight: 600;
			  margin: 20px 0px 5px 3px;
			  display: block;
			}
			.form-submit {
			  display: flex;
	  
			  margin-top: 20px;
			  align-content: center;
			  justify-content: center;
			}
			.text-field {
			  width: 100%;
			  border: 1px solid black;
			  padding: 0.5rem 0.5rem;
			  font-size: 1.1rem;
			}
	  
			.text-field:focus {
			  border: 2px solid #00b39f;
			}
	  
			.form-select {
			  width: 150px;
			  border: 1px solid black;
			  border-radius: 10px;
			  padding: 1rem 0.5rem;
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
			.newsletter {
			  display: flex;
			  flex-direction: row;
			  margin-top: 20px;
			}
			.required-sign {
				color: #8b0000;
			  }
			  
		  
			  .checkbox-label {
				font-size: 0.8rem;
			  }
		  }
	}

	.showForm {
		display: flex;
		flex-wrap: wrap;
		margin: auto -15px;
		height:68rem;
	}

	.form-frame {
		height: 68rem;
		width: 35rem;
		border: none;
		margin-top: -2rem;
	}

	@media screen and (max-width: 765px) {
		.form-frame {
			width: 25rem;
		}
		.contact-form {
			.form {
			  width: 100%;
			}
		  }
	}
`;

export default ContactPageWrapper;
