import styled from "styled-components";

export const BlogPageWrapper = styled.div`
	.blog-list-wrapper {
		margin: 5rem auto;
	}

	.blog-lists{
		margin-top: 5rem;
	}

	.post-thumb-block{
		height: 25rem;

		img{
			max-height:25rem;
		}
	}

	.post-content-block{
		height: 8.5rem;
	}

	.post-title{
		font-size: 1.5rem;
	}

	.post-meta-block{
		p{
			font-size: 1rem;
			text-align: start;
		}
		.author{
			font-size: 1rem;
			text-align: end;
		}
	}

	@media screen and (max-width:1200px){
		.post-thumb-block{
			height: 20rem;
	
			img{
				max-height:20rem;
			}
		}
	}

	@media screen and (max-width:992px){
		.post-thumb-block{
			height: 15rem;
	
			img{
				max-height:15rem;
			}
		}
	}

	@media screen and (max-width:500px){
		.blog-list-wrapper{
			margin: 0rem auto 5rem;
		}
		.blog-lists{
			margin-top: 0rem;
		}
		.post-content-block{
			height: 9rem;
		}
	}


`;
