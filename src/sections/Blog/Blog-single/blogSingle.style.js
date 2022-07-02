import styled from "styled-components";

const BlogPageWrapper = styled.div`
    div{
        color: ${props => props.theme.text}; 

    }
    ul {
    list-style: none; /* Remove default bullets */
     }
    .single-post-wrapper{
        margin-bottom: 4rem;
    }

    ul li::before {
        content: "•";  
        color: ${props => props.theme.text}; 
        font-weight: bold;
        display: inline-block; 
        width: 1em; 
        margin-left: -1em; 
    }

    p{
        color: ${props => props.theme.text};
    }
    li{
        color: ${props => props.theme.text};
    }
    .post-info-block{
        margin-top: 3rem;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 2rem;
    }

    .tags{
        display: flex;
        span{
            font-size: 1.2rem;
            align-self: center;
        }
        a{
            color: ${props => props.theme.text};
            margin: 0.2rem;
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 0.2rem;
            background: ${props => props.theme.DarkTheme ? "#212121" : "F0F0F0"};
            transition: all 0.3s linear;
            &:hover{
                background: ${props => props.theme.secondaryColor};
                color: ${props => props.theme.textRevert};
            }
        }
        div{
            display: inline-flex;
            flex-wrap: wrap;
        }
    }
    @media screen and (max-width: 360px){
        .tags{
            span{
                position: relative;
                top: 0.5rem;
                align-self: flex-start;
            }
        }
    }
`;
export default BlogPageWrapper;
