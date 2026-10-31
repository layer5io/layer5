import styled from "styled-components";
export const ResourcePageWrapper = styled.div`

    .resource-grid-wrapper{
        margin: 0.8rem 0 1.5rem 1.5rem;
    }

    .search{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        width:100%;
        
        margin-bottom: 0.8rem;
        .searchBox{
            flex: 0 1 400px;
            min-width:0;
            & > div,
            .search-box{
                width: 100%;
                max-width: 100%;
            }
            @media only screen and (max-width:990px){
                flex: 1 1 auto;
                min-width: 0;
                .search-box{
                    width: 100%;
                }
            }
        }
        .sortBox {
            align-self: stretch;
            margin-right: 1rem;
            @media only screen and (max-width: 600px) {
                margin-right: 0.5rem;
            }
            .sortDropdown {
                height: 100%;
                padding: 15px 40px 15px 15px;
                border-radius: 5px;
                border: 1px solid ${(props) => props.theme.headingColor};
                background-color: ${(props) => props.theme.shadowDarkColor};
                color: ${(props) => props.theme.text};
                font-size: 0.9rem;
                cursor: pointer;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right 12px center;
                background-size: 16px;

                &:focus {
                    outline: 2px solid #00b39f;
                    outline-offset: 2px;
                }

                option {
                    color: ${(props) => props.theme.text};
                    background-color: ${(props) => props.theme.shadowDarkColor};
                }

                @media only screen and (max-width: 600px) {
                    width: 48px;
                    height:48px;
                    padding: 0;
                    font-size:0;
                    color: transparent;
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round'%3e%3cline x1='4' y1='7' x2='20' y2='7'/%3e%3cline x1='4' y1='12' x2='15' y2='12'/%3e%3cline x1='4' y1='17' x2='10' y2='17'/%3e%3c/svg%3e");
                    background-position: center;
                    background-size: 22px;
                }
            }
        }
        
    }
    .post-content-block{
        height: 7rem;
    }
    .post-thumb-block{
        height: 10.5rem;
    }
    .post-meta-block{
        p{
            margin:0;
        }
    }
    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 3rem auto 4rem;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          gap: 1rem;
          margin: 2rem auto 3rem;
        }
      }

      .nav-btn {
        min-width: 130px;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media screen and (max-width: 768px) {
          min-width: 160px;
          padding: 0.75rem 1.75rem;
        }
      }

    @media only screen and (max-width: 575px) {
        .resource-grid-wrapper{
            margin: 0 auto 5rem;
        }
    }

    .no-resources-page{
    padding: 1rem 1rem 4rem;
    margin: 1rem;
    
    box-shadow: 0px 3px 10px 1px rgba(0, 179, 159, 0.5);

    .empty-state-row {
        flex-wrap: wrap;
    }

    .errorMessage {
        font-size: 2rem;
        line-height: 2rem;
        overflow-wrap: break-word;
        word-break: break-word;
    }
    .error-text{
        margin-top: 5rem;
        overflow-wrap: break-word;
        word-break: break-word;
    }
    .errorSubtitle {      
        font-weight: 400;       
        font-size: 1.5rem;
        color: gray;
        font-style: italic;
        margin-top: 2.5rem;
        overflow-wrap: break-word;
        word-break: break-word;
    }
        img{
            display: block;
            margin:auto;
            margin-top: 3.125rem;
            width: 14rem;
            max-width: 100%;
            height: auto;
            object-fit: contain;
        }

    @media only screen and (max-width: 992px) {
        padding: 2rem 1.5rem 3rem;
        text-align: center;

        .empty-state-row {
            justify-content: center;
        }

        img {
            margin: 1rem auto 0;
            width: 12rem;
            max-width: 100%;
            height: auto;
        }

        .error-text {
            margin-top: 1.5rem;
            text-align: center;
        }

        .errorMessage {
            font-size: 1.5rem;
            line-height: 1.3;
        }

        .errorSubtitle {
            font-size: 1.15rem;
            line-height: 1.4;
            margin-top: 1rem;
        }
    }

    @media only screen and (max-width: 575px) {
        padding: 1.5rem 1rem 2.5rem;
        margin: 0.5rem;

        img {
            width: 9rem;
            max-width: 100%;
        }

        .errorMessage {
            font-size: 1.25rem;
        }

        .errorSubtitle {
            font-size: 1rem;
            margin-top: 0.75rem;
        }
    }
    }
`;
