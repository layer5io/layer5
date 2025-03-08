import styled from "styled-components";

const NotificationWrapper = styled.div`
    position: fixed;
    bottom: 1rem;
    left: 1.5rem;
    z-index: 999;
    max-width: 70%;

    .notification-container {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border-radius: 5px;
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
        background: ${props => props.theme.highlightColor};
        animation: fadeIn .8s;

        p {
            margin: 0;
            margin-right: 15px;
        }

        .notification-cross-icon {
            cursor: pointer;
            width: 1.5rem;
            height: 1.5rem;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateX(-10%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
`;

export default NotificationWrapper;