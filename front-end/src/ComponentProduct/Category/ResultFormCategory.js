import React from "react";
import { Container, Table } from "reactstrap";
import ResultFormCategoryItem from "./ResultFormCategoryItem";

function ResultFormCategory({ ondeleteCategory, onHandleClickEdit }) {
  return (
    <Container>
      <h3>DANH MỤC SẢN PHẨM</h3>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormCategoryItem
            ondeleteCategory={ondeleteCategory}
            onHandleClickEdit={onHandleClickEdit}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormCategory;
