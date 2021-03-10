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
		height:0rem;
		iframe {
			height:0rem;
		}
	}

	.showForm {
		display: flex;
		flex-wrap: wrap;
		margin: auto -15px;
		height:68rem;
		iframe {
			height:unset;
		}
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
	}
`;

export default ContactPageWrapper;
