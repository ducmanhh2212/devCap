import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { generateId } from "../../Utils/Generate_Id";
import { useSelector } from "react-redux";

function InputFormCategory({ onHandleCreateNewCategory }) {
  // khai bao cac state de luu tru du lieu nguoi dung nhap trong cac o nhap lieu
  let [Name, setName] = useState("");

  const handleClickCreate = () => {
    let categoryNew = {
      id: generateId(),
      name: Name,
    };

    onHandleCreateNewCategory(categoryNew);
  };

  // khai bao hook useSelecter de lay state tu kho store cua redux
  let stateRedux = useSelector((stateRedux) => stateRedux);

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="Name">Tên danh mục sản phẩm: </Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Nhập tên danh mục sản phẩm"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
      </Form>

      <Button color="primary" onClick={handleClickCreate}>
        Thêm mới
      </Button>
      {/* <Button color="danger"> Làm mới </Button> */}
    </Container>
  );
}

export default InputFormCategory;
