import styled from "styled-components";
import Istio_Book from "../../assets/images/learn/istio-book-cover-frame.png";

export const LearnPageWrapper = styled.div`
    .page-header-section {
        height: 35rem;
        text-align: center;
        background: url(${Istio_Book});
        background-size: cover;
        background-position: center;
        h1 {
            line-height: 35rem;
            color: white;
        }
    }

    .join-community{
        width: 100%;
        height: 28rem;
        background-position: top;
    }
`;