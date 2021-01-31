import styled from "styled-components";

export const selectStyles = {
  menu: styles => ({ ...styles, zIndex: 999, })
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
            display: inline-block;
            background-color: ${props => props.theme.secondaryColor};
            width: 20px;
            height: 20px;
            margin-right: 10px;
    }
    
    .inactive-filter-color{
            display: inline-block;
            background-color: gray;
            width: 20px;
            height: 20px;
            margin-right: 10px;
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
