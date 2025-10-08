import styled from "styled-components";
export const ChapterStyle = styled.div`

  color: ${(props) => props.theme.text};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  .chapter-sub-heading, .chapter-sub-heading a {
    color: ${props => props.theme.grey404040ToGreen3C494F};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .chapter-alt-heading, .chapter-alt-heading a {
    color: gray;
  }
  a {
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
  }

  .image-design-icons {
    object-fit: contain !important; 

    @media (max-width: 768px) {
      width: clamp(150px, 70vw, 400px) !important;
      height: auto !important;
      max-width: none !important;
    }
  }
`;
