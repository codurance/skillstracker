import React from "react";
import {Craftsperson} from "./Craftsperson";

export function TableData(props: Craftsperson) {
    const {name, seniority, skillset, currentProject} = props;
    return (
        <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{seniority}</td>
            <td>{skillset}</td>
            <td>{currentProject}</td>
        </tr>
    )
}
