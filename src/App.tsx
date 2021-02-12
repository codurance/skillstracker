import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Table } from "reactstrap";

interface Craftsperson {
    name: string;
    seniority: string;
    skillset: string;
    currentProject: string;
}

type CraftspersonFormProps = {
    toggle: () => void;
    handleFormSubmission: (event: any) => void;
}

const CraftspersonForm = (props: CraftspersonFormProps) => {
    const {toggle, handleFormSubmission} = props;
    return (
        <div>
            <Form onSubmit={handleFormSubmission}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input id="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="seniority">Seniority</Label>
                    <Input id="seniority" />
                </FormGroup>
                <FormGroup>
                    <Label for="skillset">Skillset</Label>
                    <Input id="skillset" />
                </FormGroup>
                <FormGroup>
                    <Label for="currentProject">Current Project</Label>
                    <Input id="currentProject" />
                </FormGroup>
                <Button color="primary" type="submit" onClick={toggle}>Submit</Button>{' '}
                <Button color="secondary" type="button" onClick={toggle}>Cancel</Button>
            </Form>
        </div>
    )
}

type CraftspersonModalProps = {
    buttonLabel: string;
    className: string;
    handleFormSubmission: (event: any) => void;
}

const CraftspersonModal = (props: CraftspersonModalProps) => {

    const {buttonLabel, className, handleFormSubmission} = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <CraftspersonForm toggle={toggle} handleFormSubmission={handleFormSubmission}/>
                </ModalBody>
            </Modal>
        </div>
    )
}



function TableData(props: Craftsperson) {
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

type SkillsTrackerTableProps = {
    craftspeople: Craftsperson[];
}

function SkillsTrackerTable(props: SkillsTrackerTableProps) {
    const {craftspeople} = props;
    console.log(craftspeople);
    const crafters = craftspeople.map(craftsperson => <TableData
        name={craftsperson.name}
        seniority={craftsperson.seniority}
        skillset={craftsperson.skillset}
        currentProject={craftsperson.currentProject} />
    )
    console.log(crafters);

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
