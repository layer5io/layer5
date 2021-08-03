import styled from "styled-components";


export const DropdownWrapper = styled.div`


.category{
   
    font-weight: bold;
    color: black;
    
    padding-right: 100%;
   
    }   

    
.allOptions {
  
    margin-left: 2.5rem;
   
    font-size: medium;
    text-align: left;
    }  

@media only screen and (max-width: 992px) {
        .allOptions{
            
            margin-left: 2.8rem;  
        }
}     

@media only screen and (max-width: 580px) {
        .allOptions{
            margin-left: 4rem;  
        }
}   

`;
