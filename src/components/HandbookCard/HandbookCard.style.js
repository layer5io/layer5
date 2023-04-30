import styled from "styled-components";

export const HandbookCardWrapper = styled.div`
        .handbook__card--main {
        margin: 1rem;
        display: block;
        }

        .handbook__card {
        border-radius: 5px;
        width: 25rem;
        box-shadow: 0 5px 10px ${(props) => props.theme.green00D3A9ToGreyE6E6E6};
        overflow: hidden;
        height: 19rem;
        position: relative;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .handbook__card--head {
        padding: 1.25rem;
        color: ${(props) => props.theme.text};
        text-align: center;
        position: relative;
        font-size: 1.5rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .handbook__card--head::before {
        content: "";
        display: inline;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgb(71, 126, 150);
        background: linear-gradient(
            250deg,
            rgba(71, 126, 150, 1) 0%,
            rgba(0, 179, 159, 1) 35%,
            rgba(60, 73, 79, 1) 100%
        );
        z-index: -100;
        transition: all 0.3s;
        }

        .handbook__card--line {
        margin: 0 1rem;
        height: 1px;
        background-color: #eee;
        }

        .handbook__card--para {
        color: ${(props) => props.theme.whiteSevenToBlackSeven};
        text-align: center;
        margin: 1.5rem;
        margin-bottom: 0rem;
        line-height: 1.8;
        letter-spacing: 0px;
        font-weight: 400;
        font-size: 1.1rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .handbook__card--lm__container {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        bottom: 0;
        right: 0;
        padding-bottom: 10px;
        }

        .handbook__card--lm {
        margin: 0.5rem 1rem;
        font-size: 0.8rem;
        text-decoration: none;
        color: ${(props) => props.theme.green00D3A9ToBlue477E96};
        font-weight: 500;
        padding: 0.1rem 0.5rem;
        transform: translateX(5rem);
        opacity: 0;
        display: flex;
        align-items: center;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .handbook__card--lm:hover {
        border-bottom: 1px solid ${(props) => props.theme.green00D3A9ToBlue477E96};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .handbook__card:hover .handbook__card--lm {
        transform: translateX(0);
        opacity: 1;
        }

        .handbook__card:hover .handbook__card--head::before {
        height: 100%;
        }

        .handbook__card:hover {
        height: 21rem;
        }

        .handbook__card:hover .handbook__card--head {
        color: #fff;
        }
`;
