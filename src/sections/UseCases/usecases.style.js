import styled from "styled-components";

export const UseCasesWrapper = styled.div`
    .page-title{

        .heading{

        }
        .description{

        }
    }

    // card
    .workshop-grid-wrapper {
		padding-bottom: 3.75rem;
	}

    .workshop-grid-card {
		background-color: ${props => props.theme.grey212121ToWhite};
		width: 100%;
		display: block;
		height: auto;
		border-radius: 0.3125rem;
		margin-bottom: 1.25rem;
		box-shadow: 0rem 0.0625rem 0.3125rem rgba(0, 0, 0, 0.2);
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

		&:hover {
			.main {
				box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.15);
			}
		}
	}

    .text-contents {
		display: none;
		width: 100%;
		height: 100%;
		font-family: "Qanelas Soft", "Open Sans", sans-serif;
	}

    .active {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.5rem;
	}

    .externalLink {
		position: relative;
		left: 1rem;
		margin-top: 0.25rem;
	}

    a.siteLink {
		padding: 0.5rem 0.25rem 0rem;
		filter: grayscale(100%) brightness(${props => props.theme.siteLinkBrightness});
		transition: 0.2s ease-in-out all;

		&:hover {
			color: ${props => props.theme.keppelColor};
			filter: none;
		}
	}

`