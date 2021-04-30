import styled from "styled-components";

const NavigationWrapper = styled.header`
  background-color: #F3FFFD;
  position: sticky;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 9999;
  transition: all 0.3s ease 0s;
	.navbar-wrap {
		display: flex;
		align-items: center;
	}
	.logo {
		display: flex;
		transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
		img {
			width: 155px;
			padding: 0 0.75rem 0 0;
		}

		.logo-header {
			padding: 0 0 0 0.75rem;
			border-left: 1px solid ${props => props.theme.menuColor};
			color: ${props => props.theme.menuColor};
		}
	}

	.nav {
		display: flex;
		flex: auto;
		justify-content: center;
	}

	@media screen and (max-width: 992px) {
		.logo {
			img {
				width: 125px;
			}
		}
	}

	@media screen and (min-width: 768px) {
		.nav-menu {
			display: flex;
			justify-content: center;

			.nav-menu-items {
				display: flex;
				padding: 0;
				li {
					list-style: none;
					padding: 0 1rem;
					a {
						color: black;
					}
				}
			}
		}

		.sign-in-btn {
			background: black;
			color: white;
			width: 8rem;
			height: 3.5rem;
			min-width: auto;
			font-size: 1.125rem;
		}
	}

	.sign-in-btn-mobile button, .mobile-menu-icon {
		display: none;
	}

	@media screen and (max-width: 767px){
		padding: 1.5rem 2rem;

		.logo {
			width: 100%;
		}

		.sign-in-btn {
			display: none;
		}

		.sign-in-btn-mobile button {
			display: flex;
			min-width: auto;
			width: 6rem;
			height: 2.5rem;
			background: black;
			color: white;
		}

		.nav-mobile-menu {
			position: absolute;
      top: 4rem;
      right: 1rem;
      height: auto;
      width: auto;
      padding: 0 1.5rem;
      visibility: hidden;
      opacity: 0;
      transition: .3s;
      display: block;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 10px 10px 10px rgba(0, 211, 169, 0.10);
		}
		.expand {
      visibility: visible;
      opacity: 1;
      .nav-mobile-menu {
        visibility: visible;
        opacity: 1;
      }
    }

    .nav-mobile-menu-items {
      display: flex;
      flex-direction: column;
			padding: 0;
			li {
				list-style: none;
				a {
					color: black;
				}
			}
    }
		.mobile-menu-icon {
			display: inline-block;
			position: relative;
			cursor: pointer;
			font-size: 24px;
			animation: open-icon 0.3s ease-in;
		}
		.mobile-menu-icon.open {
			animation: close-icon 0.3s ease-in;
		}
		@keyframes open-icon {
			from { opacity: 0; }
			to { opacity: 1; }
			0% { transform: scale(0); }
			100% { transform: scale(1); }
		}
		@keyframes close-icon {
				from { opacity: 0; }
				to { opacity: 1; }
				0% { transform: rotate(0deg); }
				100% { transform: rotate(180deg); }
		}
	}
`;

export default NavigationWrapper;
