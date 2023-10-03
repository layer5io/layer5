import styled from "styled-components";

export const BlogPageWrapper = styled.div`
	.blog-list-wrapper {
		margin: 5rem auto;
	}
	.blog-lists{
		margin-top: 5rem;
	}

	.tooltip-search{
		margin-bottom: 0.8rem;
	}
	.post-block{
		background-color: ${props => props.theme.grey212121ToWhite};
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
	.blog-lists{
		margin-top: 5rem;
	}
	.post-thumb-block{
		height: 8rem;
		width: 25%;
		img{
			padding: 0px;
			margin-left: 0.5rem;
			width: 100%;
			height: 100%;
		}
	}

	.post-content-block{
		height: 8.5rem;
		width: 75%;
	}

	.post-title{
		font-size: 1.5rem;
	}

	.post-meta-block{
		flex-direction: row-reverse;
		p{
			font-size: 1rem;
			text-align: end;
		}
		.author{
			font-size: 1rem;
			text-align: start;
			margin-bottom:0;
		}
	}

	@media screen and (max-width:1200px){
		.post-block{
			height: auto;
		}
		.post-thumb-block{
			height: 8rem;
		}

	}

	@media screen and (max-width:992px){
		.post-block{
			height: 10rem;
			width: auto;
		}
		.post-thumb-block{
			height: 15rem;
	
			img{
				max-height:15rem;
			}
		}
	}

	@media screen and (max-width:576px){
		.post-block{
			height: 9rem;
		}
		.blog-list-wrapper{
			margin: 1.5rem auto 5rem;
		}
		.blog-lists{
			margin-top: 0rem;
		}
		.post-content-block{
			height: fit-content;
		}
		.tooltip-search{
			display: block;
		}
	}

	@media only screen and (min-width: 577px) {
    .tooltip-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
    }
  }
  
`;
