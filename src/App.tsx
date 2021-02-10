import React, { MouseEventHandler, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";


const CraftspersonForm = (props: any) => {
    return (
        <Form>
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
                <Label for="current-project">Current Project</Label>
                <Input id="current-project" />
            </FormGroup>
        </Form>
    )
}

type CraftspersonModalProps = {
    buttonLabel: string;
    className: string;
}
const CraftspersonModal = (props: CraftspersonModalProps) => {
    
    const {buttonLabel, className} = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleFormSubmission = (event: any) => {
        console.log(event.target)
    };

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <CraftspersonForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleFormSubmission}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}



function App() {
    const [crafter, setCraftsperson] = useState<object[]>([]);

    const craftspeople = [
        {
            name: "Mark",
            seniority: "S3",
            skillset: ["Java", "CI/CD"],
            currentProject: "Acuris"
        }
    ];

    const handleFormSubmission = () => {
        console.log({crafter});
        setCraftsperson([...craftspeople])
    };

  return (
    <div className="App">
      <header className="header">
        <h1>Codurance Skills Tracker</h1>
      </header>
      <Table striped>
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
              <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>S3</td>
                  <td>Java, CI/CD</td>
                  <td>Acuris</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td>Otto</td>
                  <td>Craftsperson</td>
                  <td>Javascript, Typescript, AWS Lambda</td>
                  <td>Cazoo</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td>Ade</td>
                  <td>Principal</td>
                  <td>Everything</td>
                  <td>Digital Theatre</td>
              </tr>
              <tr>
                  <th scope="row">4</th>
                  <td>Matt</td>
                  <td>S1</td>
                  <td>Ruby, Rails, JS, NodeJs</td>
                  <td>Lloyds</td>
              </tr>
              <tr>
                  <th scope="row">5</th>
                  <td>Takuma</td>
                  <td>S1</td>
                  <td>Clojure, Ruby, Rails, JS, NodeJs</td>
                  <td>Lloyds</td>
              </tr>
          </tbody>
      </Table>
      <CraftspersonModal buttonLabel="Add Craftsperson" className="craftsperson-modal" />
    </div>
  );
}

export default App;
