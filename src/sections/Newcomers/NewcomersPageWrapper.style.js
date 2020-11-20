import styled from "styled-components";

const NewcomersPageWrapper = styled.section`
	max-width: 1170px;
	display: block;
	height: auto;
	margin: 200px auto;

	a {
		color: lightseagreen;
		font-weight: 500;

		&:hover {
			font-weight: 600;
		}
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

	.newcomersImage {
		max-width: 500px;
		float: right;
	}

	.newcomersYoutube {
		display: block;
		max-width: 90%;
		height: 500px;
		margin: 60px auto;
	}

	.newcomersTable {
		display: table;
		width: 100%;
		height: auto;
		border-collapse: collapse;
		margin: 60px auto;

		th,
		tr {
			text-align: center;
			height: 60px;
			vertical-align: middle;
		}

		th,
		td {
			border: 1px solid black;
		}
	}

	h3,
	h4 {
		margin-bottom: 20px;
	}
`;

export default NewcomersPageWrapper;
