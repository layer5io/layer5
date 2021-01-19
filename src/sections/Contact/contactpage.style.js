import styled from "styled-components";
import ContactWrapper from "../../components/ContactCard/contact.style";

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
		display: none;

		flex: auto;
		justify-content: center;
	}

	.showForm {
		display: flex;
		flex-wrap: wrap;
		margin: auto -15px;
	}

	.form-frame {
		height: 50rem;
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
