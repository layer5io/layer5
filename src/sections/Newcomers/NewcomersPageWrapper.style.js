import styled from "styled-components";

const NewcomersPageWrapper = styled.section`
	max-width: 1170px;
	display: block;
	height: auto;
	padding: 0px 20px;
	margin: 200px auto;

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

	.newcomersImage {
		max-width: 500px;
		float: right;
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

			&:hover {
				background-color: #f5f5f5;
			}
		}

		th,
		td {
			border-bottom: 1px solid #ddd;
			padding: 0px 10px;
		}
	}

	h3,
	h4 {
		margin-bottom: 20px;
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
