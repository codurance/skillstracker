import {Table} from "reactstrap";
import React from "react";
import {Craftsperson} from "./Craftsperson";
import {TableData} from "./TableData"

type SkillsTrackerTableProps = {
    craftspeople: Craftsperson[];
}

export function SkillsTrackerTable(props: SkillsTrackerTableProps) {
    const {craftspeople} = props;
    const crafters = craftspeople.map((craftsperson, index) => <TableData
        key={index}
        name={craftsperson.name}
        seniority={craftsperson.seniority}
        skillset={craftsperson.skillset}
        currentProject={craftsperson.currentProject}/>
    );

    return <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Seniority</th>
                <th>Skill Set</th>
                <th>Current Project</th>
            </tr>
        </thead>
        <tbody>
            {crafters}
        </tbody>
    </Table>;
}
