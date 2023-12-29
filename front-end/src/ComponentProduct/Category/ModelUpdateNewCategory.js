import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { useSelector } from 'react-redux';
import InputFormCategoryUpdate from './InputFormCategoryUpdate';

function ModelUpdateNewCategory({ onHandleCloseEdit, onhandleUpdate }) {

    const handleClose = () => {
        onHandleCloseEdit();
    }

    // khai bao ham useSelecter de lay state trong store
    let showFormUpdate = useSelector((stateRedux) => stateRedux.showFormUpdateState.showFormUpdate);


    return (
        <div>
            <Modal isOpen={showFormUpdate} >
                <ModalHeader>Update New Category</ModalHeader>
                <ModalBody>
                   <InputFormCategoryUpdate onhandleUpdate={onhandleUpdate}/>            
                </ModalBody>
                <ModalFooter> <Button color="danger" onClick={handleClose}>Close</Button></ModalFooter>
            </Modal>
        </div>
    );
}

export default ModelUpdateNewCategory;