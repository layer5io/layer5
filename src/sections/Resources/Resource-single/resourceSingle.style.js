import styled from "styled-components";

const ResourcePageWrapper = styled.div`
    color: ${props => props.theme.text};
    .single-resource-wrapper{
        margin-bottom: 4rem;

        h3 {
            text-align: center;
        }
    }

    .resource-info-block{
        margin-top: 3rem;
        border-bottom: 1px solid ${props => props.theme.text};
        padding-bottom: 2rem;
    }
    p {
        color: ${props => props.theme.text};
    }
    li {
        color: ${props => props.theme.text};
    }
    .backBtn {
        margin: 3rem auto;
        font-weight: 600;
        z-index: 2;

        @media screen and (max-width: 62rem) {
            display: none;
        }
        a{
            display: flex;
            color: ${props => props.theme.primaryColor};
            &:hover{
                color: ${props => props.theme.linkColor};
            }

            h4 {
                line-height: 1.75rem;
                margin-left: 0.5rem;
            }
            svg {
                font-size: 1.75rem;
            }
        }
    }

    .tags{
        display: flex;
        span{
            font-size: 1.2rem;
            align-self: center;
        }
        a{
            color: ${props => props.theme.black};
            margin: 0.2rem;
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 0.2rem;
            background: #F0F0F0;
            transition: all 0.3s linear;
            &:hover{
                background: ${props => props.theme.secondaryColor};
                color: ${props => props.theme.white};
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
export default ResourcePageWrapper;
