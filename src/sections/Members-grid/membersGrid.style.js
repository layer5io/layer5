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
        margin-top: 80px;
    }
    @media only screen and (max-width: 912px) {
        .members-page-wrapper{
            padding-bottom: 80px;
        }
    }
    .filter-color{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        &.active {
            background-color: ${props => props.theme.headingColor};
        }
        &.inactive {
            background-color: gray;
        }
    }
`;
