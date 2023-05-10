import styled from "styled-components";

const BookSinglePageWrapper = styled.div`
  
	.backBtn {
		width: fit-content;
		position: relative;
		left: 0px;
		margin-top: 3rem;
		margin-left: 3rem;
		font-weight: 600;
		a{
			display: flex;
		    color: ${props => props.theme.whiteToGreen3C494F};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
				
		    &:hover{
		        color: ${props => props.theme.linkColor};
			}
			
			h4 {
				line-height: 1.75rem;
			}
			svg {
				font-size: 1.75rem;
			}
		}
		
	}

	@media only screen and (max-width: 480px) {
		#service-mesh-patterns-table > select{
			width: 100%;
		}
	}
    .single-post-wrapper{
        margin: 2rem 0;
    }
`;

export default BookSinglePageWrapper;
