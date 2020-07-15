import styled from 'styled-components';


const BlogSideBarWrapper = styled.div`
        .search-box {
            position: relative;
            display: flex;
            input{
                flex-basis: 100%;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid ${props => props.theme.headingColor ? props.theme.headingColor : "#1D316C"};

                &:focus{
                    border-color: ${props => props.theme.primaryColor ? props.theme.primaryColor : "#8A57DE"};
                }
            }
            button {
                position: absolute;
                right: 0px;
                top: 0;
                height: 100%;
                min-width: 20px;
                border-radius: 5px;
                background: transparent;
                font-size: 22px;
                color: ${props => props.theme.headingColor ? props.theme.headingColor : "#1D316C"}; 
            }
        }


        .sidebar-widgets {
            padding: 0 30px;
        }

        .widgets-title{
            margin-bottom: 20px;
            h3{
                display: inline-block;
                font-size: 21px;
                font-weight: 500;
                line-height: 30px;
                position: relative;
                &:before{
                    position: absolute;
                    top: 50%;
                    right: -80px;
                    content: '';
                    width: 70px;
                    height: 1px; 
                }
            }
            
        }
        .recent-post-block{
            display: flex;
            align-items: center;
            &+.recent-post-block{
                margin-top: 30px;
            }
            img{
                margin-right: 20px;
            }
            a{
                h3{
                    font-size: 16px;
                    font-weight: 400;
                    color: ${props => props.theme.black ? props.theme.black : "#333333"};
                    margin-bottom: 8px;
                    transition: all 0.3s ease-in;
                    &:hover{
                        color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
                    }
                }
            }
            .post-meta-block{
                margin-bottom: 0;
                font-size: 14px;
                color: ${props => props.theme.textColor ? props.theme.textColor : "#7A848E"};
                a{
                    font: 400 13px/20px "Open Sans", sans-serif;
                    color: ${props => props.theme.textColor ? props.theme.textColor : "#7A848E"};
                    &:hover{
                        color: ${props => props.theme.textColor ? props.theme.textColor : "#7A848E"};
                    }
                }
                a+a{
                    position: relative;
                    &:before{
                        content: "/";
                        display: inline-block;
                        margin: 0px 5px 0px 0px;
                    }
                }
            }
            
        }
        
        .sidebar-widgets{
            &+.sidebar-widgets{
                margin-top: 52px;
            }
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
            }
            &.catagorie{
               
                li{
                    &+li{
                        margin-top: 3px;
                    }
                    a{
                        color: ${props => props.theme.black ? props.theme.black : "#333333"};
                        display: flex;
                        line-height: 25px;
                        justify-content: space-between;
                        font: 400 16px/35px "Open Sans", sans-serif;
                        em{font-style: normal;}
                        span{
                            border-bottom: 1px solid transparent;
                            transition: all 0.3s linear;
                        }
                        &:hover{
                            span, em{
                                color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"}; 
                                border-color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"}; 
                            }
                        }
                    }
                }
            }
            &.tags{
                ul{
                    margin-top: -5px;
                    margin-left: -5px;
                    margin-right: -5px;
                }
                li{
                    display: inline-block;
                    a{
                        margin: 5px;
                        display: block;
                        padding: 6px 18px;
                        border-radius: 3px;
                        background: #F0F0F0;
                        font: 400 13px/26px "Open Sans", sans-serif; 
                        transition: all 0.3s linear;
                        &:hover{
                            background: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
                            color: #F0F0F0;
                        }
                    }
                }
                
            }
        }

    @media only screen and (max-width: 1024px) {
        .sidebar-widgets {
            padding: 0;
        }
       
    }
   
      
       
`;

export default BlogSideBarWrapper;