import styled from "styled-components";

const PaginationWrapper = styled.div`
    margin-bottom: 30px;

	button {
		outline: none;
		border: none;
		padding: 5px 10px;
		background: darkturquoise;
		color: aliceblue;
		font-size: 20px;
		display: flex;
        align-items: center;
        box-shadow: 0px 5px 10px rgba(0,81,82,0.1);
        border-radius: 5px;
        cursor: pointer;
        transition:  0.5s ease-in-out all;
    
        &:hover{
            box-shadow: 0px 8px 10px rgba(0,81,82,0.2);
        }
	}
`;

export default PaginationWrapper;
