import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Button, Table} from "reactstrap";

function App() {
    const [crafter, setCraftsperson] = useState("");

    const onAddCraftsperson = (craftsperson: string) => {
        setCraftsperson(craftsperson)
    }
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
                  <td>{crafter}</td>
                  <td>S1</td>
                  <td>Clojure, Ruby, Rails, JS, NodeJs</td>
                  <td>Lloyds</td>
              </tr>
          </tbody>
      </Table>
      <Button color="primary" onClick={() => onAddCraftsperson("Takuma")}>Add</Button>
    </div>
  );
}

export default App;
