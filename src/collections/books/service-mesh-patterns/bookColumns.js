import React from "react";
import layer5_img from "./layer5-white.png";

export const Columns = [
    {
        Header:()=> <span>Authors: <a href="https://twitter.com/lcalcote">Lee Calcote</a>, <a href="https://twitter.com/sheriffjackson">Nic Jackson</a></span>,
        columns: [
            {
                Header: "Service Mesh Pattern",
                accessor: "service_mesh_pattern"
            }
        ],
        accessor: "service_mesh"
    },
    {
        Header:()=> <a href="https://layer5.io"><img src={layer5_img} alt="layer5"/></a>,
        columns: [
            {
                Header: "Category",
                accessor: "category"
            }
        ],
        accessor: "category_column"
    }
];