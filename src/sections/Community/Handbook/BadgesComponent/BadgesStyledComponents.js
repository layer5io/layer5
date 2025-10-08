/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";


export const StyledTable = styled.table`
    width: 100%;
    font-size: 0.9rem;
`;

export const TableHeader = styled.th`
    border: 1px solid #ccc;
    font-weight: bold;
    text-align: left;
`;

export const TableCell = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    width: 1rem;
    vertical-align: top;
`;

export const DescriptionCell = styled.td`
    white-space: normal;
    word-wrap: break-word;
`;

export const Image = styled.img`
    horizontal-align: 'center'
    width: 100px;
    height: 100px;
    object-fit: contain;
`;
