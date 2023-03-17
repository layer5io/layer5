import styled from "styled-components";

export const ProgramsWrapper = styled.div`
    a {        color: ${props => props.theme.keppelColor};
}
    img{
        width: 19vw;
        float: right;
        margin-left: 40px;
        margin-bottom: 30px;
        &.hacktoberfest-img {
            width: 50%;

            @media only screen and (max-width: 768px) {
                width: 27vw;
            }
        }
        @media only screen and (max-width:572px) {
            display: block;
            float: none;
            width: 35vw;
            margin: 0 auto 40px auto;
            &.hacktoberfest-img {
                width: 50vw;
            }
        }
    }

    .flex-div{
        flex-grow: 0.25;
    }

    .iframe-container {
        position: relative;
        float: right;

        @media only screen and (max-width:572px){
            float:none;
            margin-left: 0px;
            overflow: hidden;

             iframe{
               border: 0;
               height: 100%;
               width: 100%;
               left:0;
               top:0;
            }
        }
    }

    .apply-button{
        position: relative;
        text-align: center;
        vertical-align: bottom;
    }
    .gsod-table-container{
        overflow-x: auto;
    }
    .tutorials-table {
        border-spacing: 0;
        th {
            padding: 14px 0 14px 12px;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
        }
        td {
            padding: 14px 0 14px 12px;
            border-bottom: 1px solid #e3e3e3;
        }
        tbody tr {
            transition: .2s ease;
            :hover {
                ${props => props.theme.DarkTheme ? "background-color: #3c494f" : "background-color: #f5f5f5" };
            }

        }
    }
`;
