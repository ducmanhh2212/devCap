import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from "reactstrap";

function ResultFormCategoryItem({ ondeleteCategory, onHandleClickEdit }) {

    // khai baos bien items de hien thi du lieu
    let items = "";

    // su dung useSelector de lay listCategory
    let listCategory = useSelector((stateRedux) => stateRedux.listCategoryState.listCategory)

    // khai bao ham delete
    let handleDelete = (id) => {
        ondeleteCategory(id)
    }

    // khai bao ham edit
    let handleEdit = (category) => {
        onHandleClickEdit(category)
    }

    if (listCategory) {
        items = listCategory.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td> <Button color="warning" onClick={() => handleEdit(category)}>Edit</Button></td>
                    <td> <Button color="danger" onClick={() => handleDelete(category.id)}>Delete</Button></td>
                </tr>
            );
        })
    }

    return items;
}

export default ResultFormCategoryItem;