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
            background-color: #00b39f;
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
`;
