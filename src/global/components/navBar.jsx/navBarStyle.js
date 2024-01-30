import styled from "styled-components";

export const Tab = styled.span`
    user-select: none;
    cursor: pointer;
    position:relative;
    padding: 10px 0px ;
    color: ${({isSelected})=> (isSelected ? "#000000" : "#767676")};
    &::after{
        content:'';
        width:100%;
        border-bottom:2px solid ${({isSelected})=> (isSelected ? "#000000" : "transparent")};
        position:absolute;
        bottom:0px;
        left:0;
    };
`;