import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {CraftspersonModal} from "./CraftspersonModal";
import {SkillsTrackerTable} from "./SkillsTrackerTable";
import {Craftsperson} from "./Craftsperson";


function App() {
    const [craftspeople, setCraftsperson] = useState<Craftsperson[]>([]);
    const handleFormSubmission = (event: any) => {
        event.preventDefault();
        const { name, seniority, skillset, currentProject } = event.target;
        const craftspersonAttributes = {
            name: name.value,
            seniority: seniority.value,
            skillset: skillset.value,
            currentProject: currentProject.value
        };
        craftspeople.push(craftspersonAttributes)
        setCraftsperson([...craftspeople])
    };
  return (
    <div className="App">
        <header className="header">
            <h1>Codurance Skills Tracker</h1>
        </header>
        <SkillsTrackerTable craftspeople={craftspeople}/>
        <CraftspersonModal buttonLabel="Add Craftsperson" className="craftsperson-modal"
                           handleFormSubmission={handleFormSubmission}/>
    </div>
  );
}

export default App;
