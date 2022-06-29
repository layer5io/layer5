import styled from "styled-components";

const ProgramsPageWrapper = styled.div`
margin-bottom : 3.125rem;

.rowWrapper{
    align-items: center;
    position: relative;
    top: 1.5rem;
    padding: 1rem;
}

.selectWrapper{
    margin-left: auto;
    width: 400px;
}

.backBtn {
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

.single-post-wrapper{
    padding: 50px 0 180px 0;
}
#programs {
    padding: 50px 0 0 0;
}
.single-post-block{
    p{
        line-height: 29px;
        letter-spacing: 0.2px;
    }
    p+p{
        margin-top: 30px;  
    }
}

@media only screen and (max-width: 912px) {
     .single-post-block{
         padding-bottom: 10px;
     }
}
`;

export const selectStyles = {
  menu : styles => ({ ...styles, zIndex : 999, }),
  control : styles => ({ ...styles, backgroundColor : "white", zIndex : 900 }),
  option : (styles, { isFocused, isSelected }) => ({
    ...styles,

    alignItems : "center",
    display : "flex",

    ":before" : {
      borderRadius : 10,
      content : "\" \"",
      display : "block",
      marginRight : 12,
      marginLeft : 5,
      height : 10,
      width : 10,
      zIndex : 1000,
    },

    backgroundColor : isSelected
      ? "rgba(11, 177, 158, 1)"
      : isFocused
        ? "rgba(11, 177, 158, 0.30)"
        : "white",

    color : isSelected ? "white" : "black",

    zIndex : 900,

    ":active" : {
      ...styles[":active"],
      backgroundColor : (isSelected
        ? "rgba(11, 177, 158, 0.75)"
        : "white"),
    },
  }
  ),
  input : styles => ({ ...styles, zIndex : 900 }),
  placeholder : styles => ({ ...styles, zIndex : 900 }),
  singleValue : (styles) => ({ ...styles, zIndex : 900 }),
};

export const dropdownTheme = theme => ({
  ...theme,
  borderRadius : 0,
  colors : {
    ...theme.colors,
    primary50 : "#b0e8e2",
    primary25 : "#b0e8e2",
    primary : "#00b39f",
  }
});

export default ProgramsPageWrapper;
