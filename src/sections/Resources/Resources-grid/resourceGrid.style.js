import styled from "styled-components";
export const ResourcePageWrapper = styled.div`

    .resource-grid-wrapper{
        margin: 0.8rem 0 1.5rem 1.5rem;
    }

    .search{
        display:flex;
        justify-content:flex-end;
        width:100%;
        
        margin-bottom: 0.8rem;
        .searchBox{
            flex:0 0 50%;
            @media only screen and (max-width:990px){
                
                    flex:0 0 100%;
                    max-width:100%;
                
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
            max-width: 12rem;
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
            max-width: 9rem;
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
