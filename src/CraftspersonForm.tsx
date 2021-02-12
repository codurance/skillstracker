import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import React from "react";

type CraftspersonFormProps = {
    toggle: () => void;
    handleFormSubmission: (event: any) => void;
}
export const CraftspersonForm = (props: CraftspersonFormProps) => {
    const {toggle, handleFormSubmission} = props;
    return (
        <div>
            <Form onSubmit={handleFormSubmission}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input id="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="seniority">Seniority</Label>
                    <Input id="seniority"/>
                </FormGroup>
                <FormGroup>
                    <Label for="skillset">Skillset</Label>
                    <Input id="skillset"/>
                </FormGroup>
                <FormGroup>
                    <Label for="currentProject">Current Project</Label>
                    <Input id="currentProject"/>
                </FormGroup>
                <Button color="primary" type="submit" onClick={toggle}>Submit</Button>{' '}
                <Button color="secondary" type="button" onClick={toggle}>Cancel</Button>
            </Form>
        </div>
    )
}
