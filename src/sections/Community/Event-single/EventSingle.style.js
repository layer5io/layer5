import styled from "styled-components";

const EventSinglePageWrapper = styled.div`
    .single-event-wrapper{
        padding: 3rem 0 5rem;
    }
    .single-event-block{
        p+p{
            margin-top: 1.75rem;  
        }  
    }
    div.event-title {
        text-align: center;
        margin-bottom: 4rem;
    }
    ul.speakers {
        margin-left:0px;
        padding-left:0px;
    }
    li.speakers {
        margin-left: 2rem;
    }
`;

export default EventSinglePageWrapper;
