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
        max-width: 800px;
        gap: 0.3rem;
        flex-wrap: wrap;
        padding: 1rem;
    }
    
    .page-numbers {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        flex-wrap: wrap;
    }
    
    .page-btn {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: 2px solid transparent;
        background: ${props => props.theme.grey212121ToWhite};
        color: ${props => props.theme.whiteEightToBlack};
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.9rem;
        
        &:hover {
            background: ${props => props.theme.secondaryColor};
            border-color: ${props => props.theme.secondaryColor};
            color: white;
        }
    }
    
    .active-btn {
        background: ${props => props.theme.secondaryColor};
        border-color: ${props => props.theme.secondaryColor};
        color: white;
    }
    
    .pagination-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        border: 2px solid ${props => props.theme.grey212121ToWhite};
        border-radius: 8px;
        background: ${props => props.theme.grey212121ToWhite};
        color: ${props => props.theme.whiteEightToBlack};
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.9rem;
        min-width: 100px;
        
        &:hover:not(.disabled-btn) {
            background: ${props => props.theme.secondaryColor};
            border-color: ${props => props.theme.secondaryColor};
            color: white;
        }
    }
    
    .prev-btn {
        margin-right: 0;
    }
    
    .next-btn {
        margin-left: 0;
    }
    
    .disabled-btn {
        opacity: 0.4;
        cursor: not-allowed;
        
        &:hover {
            background: ${props => props.theme.grey212121ToWhite};
            border-color: ${props => props.theme.grey212121ToWhite};
            color: ${props => props.theme.whiteEightToBlack};
        }
    }
    
    .ellipsis {
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.whiteEightToBlack};
        font-weight: 500;
    }
    
    /* Mobile Responsive Styles */
    @media only screen and (max-width: 575px) {
        .resource-grid-wrapper{
            margin: 0 auto 5rem;
        }
        
        .pagination-container {
            flex-direction: column;
            gap: 1rem;
            margin: 1.5rem 0.5rem;
            padding: 1rem 0.5rem;
        }
        
        .page-numbers {
            order: 2;
            width: 100%;
            justify-content: center;
            overflow-x: auto;
            padding: 0.5rem 0;
            
            /* Hide scrollbar but keep functionality */
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        
        .page-btn {
            width: 2.75rem;
            height: 2.75rem;
            min-width: 2.75rem;
            font-size: 1rem;
            margin: 0 0.1rem;
            flex-shrink: 0;
        }
        
        .prev-btn {
            order: 1;
            margin-right: 0;
            width: 100%;
            max-width: 200px;
            align-self: center;
            min-width: 120px;
        }
        
        .next-btn {
            order: 3;
            margin-left: 0;
            width: 100%;
            max-width: 200px;
            align-self: center;
            min-width: 120px;
        }
        
        .pagination-btn {
            padding: 0.875rem 1rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 10px;
        }
        
        .ellipsis {
            width: 1.5rem;
            font-size: 1rem;
            flex-shrink: 0;
        }
    }
    
    /* Very small screens */
    @media only screen and (max-width: 320px) {
        .pagination-container {
            margin: 1rem 0.25rem;
            padding: 0.75rem 0.25rem;
        }
        
        .page-btn {
            width: 2.5rem;
            height: 2.5rem;
            min-width: 2.5rem;
            font-size: 0.9rem;
        }
        
        .pagination-btn {
            padding: 0.75rem 0.75rem;
            font-size: 0.9rem;
            min-width: 100px;
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

