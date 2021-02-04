import styled from "styled-components";

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: "\" \"",
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
    zindex: 1000,
  },
});

export const selectStyles = {
  menu: styles => ({ ...styles, zIndex: 999, }),
  control: styles => ({ ...styles, backgroundColor: "white", zIndex: 900 }),
  option: (styles, { data, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.value == "inactive" ? "rgba(171, 171, 171, 1)" : "rgba(11, 177, 158, 1)"
        : isFocused
          ? data.value == "inactive" ? "rgba(171, 171, 171, 0.30)" : "rgba(11, 177, 158, 0.30)"
          : "white",

      color: isSelected ? "white" : data.color,

      zIndex: 900,

      ":active": {
        ...styles[":active"],
        backgroundColor: (isSelected
          ? data.value == "inactive"
            ? "rgba(171, 171, 171, 0.75)" : "rgba(11, 177, 158, 0.75)"
          : "white"),
      },
    };
  },
  input: styles => ({ ...styles, ...dot(), zIndex: 900 }),
  placeholder: styles => ({ ...styles, ...dot(), zIndex: 900 }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color), zIndex: 900 }),
};

export const dropdownTheme = theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50:"#b0e8e2",
    primary25: "#b0e8e2",
    primary: "#00b39f",
  }
});

export const MembersGridWrapper = styled.div`

    .members-list-wrapper{
        padding: 50px 0;
    }
    .members-grid-wrapper{
        padding-bottom: 60px;
        z-index: -1;
    }
    .members-profile-cards{
        z-index: -1 !important;
    }
    @media only screen and (max-width: 912px) {
        .members-page-wrapper{
            padding-bottom: 80px;
        }
    }
    
    .color-legend{
        padding: 0px 20px 20px 20px;
        display: flex;
        justify-content: flex-end;
        
        @media only screen and (max-width: 576px) {
            justify-content: center;
        }
        
        button{
            margin: 0px 10px 10px 10px;
        }  
    }
    .active-filter-color{
            background-color: ${props => props.theme.secondaryColor};
            width: 20px;
            height: 20px;
            margin-right: 10px;
    }
    
    .inactive-filter-color{
            background-color: gray;
            width: 20px;
            height: 20px;
            margin-right: 10px;
    }

    .members-grid-select{
        z-index: 900 !important;
    }
    .AboutCommunity {
		display: flex;
		text-align: center;
        margin: auto;
        margin-bottom: 4rem;
        align-items: center;


        .sectionTitle{
            width: 100%;
            margin: auto;
            margin-bottom: 1rem;
            margin-right: 3rem;
            text-align: center;
        }
		img {
            width: 100%;
            padding-right: 3rem;
            padding-left: 3rem;
            margin-right: 3rem;
            margin-top: 3rem;
        }
        .detailsCommunity {
            width: 60%;
            flex-grow: 1;
        }
        .text-gray {
            margin-top: 2rem;
            color: gray;
            font-style: italic;
        }
		@media screen and (max-width:767px) {
            display: inline;
            margin: auto;
            text-align: center;
            width: 70%;

            .sectionTitle {
                display: inline-block;
                width: 90%;
                font-size: 2.25rem;
                margin: auto;
                margin-top: 1rem;
                margin-bottom: 1.5rem;
                align-items: center;
                text-align: center;
            }

			img {
                text-align: center;
                align-items: center;
				width: 70%;
				height: inherit;
				margin-right: 0rem;
                margin-bottom: .25rem;
                margin-top: .25rem;
            }
            .detailsCommunity {
                width:100%;
                
            }
    }
    .memberProfileBtn{
        margin: 1rem;
        
    }
`;
