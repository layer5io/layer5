import styled from "styled-components";
import theme from "../../theme/app/themeStyles";

export const TableWrapper = styled.div`

    overflow: auto;

    table{
        border-collapse:collapse; 
        box-shadow:0px 2px 16px rgba(0,0,0,0.2);
        width: 100%;
        margin: auto;

        td{
            padding:0.5rem;
            border-collapse:collapse;
        }


        th{
            background:${theme["tertiaryColor"]};
            color:${theme["white"]};
            padding:10px;
            border-collapse:collapse;

            :first-child{
                    border-top-left-radius:0.5rem;
                }

            :last-child{
                border-top-right-radius:0.5rem;
            }

            a{
                color:${theme["shadowLightColor"]};

                &:hover{
                    color:#ccc;
                }
            }
            span {
                img{
                    margin-left: 1rem;
                    position: relative;
                    top: 0.25rem;
                }
            }
        }

        .area-header{
            border-radius: 0 !important;
        }
        
        .table-header {
            border-radius: 0 !important;
            background-color: ${theme["primaryColor"]};
        }

        tbody{
            tr{
                border-bottom:1px solid #e0e0e0;

                &:hover{
                    transform: translateY(0px);
                    ${props => props.theme.DarkTheme ? "box-shadow: 0px 0px 8px 3px #00B39F;" : "box-shadow: 0px 2px 15px -10px black;"}
                }
            }

            .bold{
            font-weight:650;
            background:${theme["secondaryColor"]};
            color:${theme["tertiaryColor"]};
            }
        }
    }
`;
