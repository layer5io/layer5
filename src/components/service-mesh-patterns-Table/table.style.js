import styled from "styled-components";

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
            background:${(props) => props.theme.tertiaryColor};
            color:${(props) => props.theme.white};
            padding:10px;
            border-collapse:collapse;

            :first-child{
                    border-top-left-radius:0.5rem;
                }

            :last-child{
                border-top-right-radius:0.5rem;
            }

            a{
                color:${(props) => props.theme.shadowLightColor};

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
            background-color: ${(props) => props.theme.primaryColor};
        }

        tbody{
            tr{
                border-bottom:1px solid #e0e0e0;

                &:hover{
                    transform: translateY(0px);
                    box-shadow: ${(props) => props.theme.boxShadowGreen00B39FtoBlack};
                }
            }

            .bold{
            font-weight:650;
            background:${(props) => props.theme.secondaryColor};
            color:${(props) => props.theme.tertiaryColor};
            }
        }
    }
`;
