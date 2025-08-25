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
    
    .pagination-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem auto;
        max-width: 600px;
        border-radius: 30px;
        background-color: ${props => props.theme.grey212121ToWhite};
        padding: 0.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .page-numbers {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .page-btn {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.25rem;
        border-radius: 5px;
        border: none;
        background: transparent;
        color: ${props => props.theme.whiteEightToBlack};
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover {
            background: ${props => props.theme.secondaryColor};
            color: white;
        }
    }
    
    .active-btn {
        background: ${props => props.theme.secondaryColor};
        color: white;
    }
    
    .pagination-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border: none;
        background: transparent;
        color: ${props => props.theme.whiteEightToBlack};
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 5px;
        
        &:hover:not(.disabled-btn) {
            background: ${props => props.theme.secondaryColor};
            color: white;
        }
        
        .arrow-icon {
            font-size: 0.8rem;
            margin: 0 0.5rem;
        }
    }
    
    .prev-btn {
        margin-right: auto;
    }
    
    .next-btn {
        margin-left: auto;
    }
    
    .disabled-btn {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
            background: transparent;
            box-shadow: none;
        }
    }
    
    .ellipsis {
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.whiteEightToBlack};
    }

    @media only screen and (max-width: 575px) {
        .resource-grid-wrapper{
            margin: 0 auto 5rem;
        }
        
        .pagination-container {
            flex-wrap: wrap;
            padding: 0.5rem 0.25rem;
        }
        
        .page-btn {
            width: 2rem;
            height: 2rem;
            margin: 0 0.1rem;
        }
        
        .pagination-btn {
            padding: 0.5rem;
            font-size: 0.9rem;
        }
    }

    .no-resources-page{
    padding: 1rem 1rem 4rem;
    margin: 1rem;
    
    box-shadow: 0px 3px 10px 1px rgba(0, 179, 159, 0.5);
    .errorMessage {
        font-size: 2rem;
        line-height: 2rem;
    }
    .error-text{
        margin-top: 5rem;
    }
    .errorSubtitle {      
        font-weight: 400;       
        font-size: 1.5rem;
        color: gray;
        font-style: italic;
        margin-top: 2.5rem;
    }
        img{
            display: block;
            margin:auto;
            margin-top: 3.125rem;
            width: 14rem;
            @media only screen and (max-width:700px){
                max-width: 100%;
            }
        }
    }
`;
