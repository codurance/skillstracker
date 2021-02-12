import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalHeader} from "reactstrap";
import {CraftspersonForm} from "./CraftspersonForm";

type CraftspersonModalProps = {
    buttonLabel: string;
    className: string;
    handleFormSubmission: (event: any) => void;
}
export const CraftspersonModal = (props: CraftspersonModalProps) => {

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
