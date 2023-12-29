import ModelCreateNewCategory from "ComponentProduct/Category/ModelCreateNewCategory";
import ModelUpdateNewCategory from "ComponentProduct/Category/ModelUpdateNewCategory";
import ResultFormCategory from "ComponentProduct/Category/ResultFormCategory";
import CreateButton from "ComponentProduct/Product/CreateButton";
import { Link } from "react-router-dom";

import {
  actionAddCategory_API,
  actionFetchListCategoryAPI,
  actionDeleteCategory_API,
  actionUpdateCategory_API,
} from "Redux/Action/ActionCategory";
import {
  actionCloseInputForm,
  actionShowInputForm,
} from "Redux/Action/ActionForm";
import {
  actionCloseInputFormUpdate,
  actionShowInputFormUpdate,
} from "Redux/Action/ActionFormUpdate";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

function CategoryPageContainer(props) {
  let dispatchRedux = useDispatch();

  const onHandleClickButton = () => {
    dispatchRedux(actionShowInputForm());
  };

  const onHandleCloseButton = () => {
    dispatchRedux(actionCloseInputForm());
  };

  const onHandleCloseEdit = () => {
    dispatchRedux(actionCloseInputFormUpdate());
  };

  useEffect(() => {
    dispatchRedux(actionFetchListCategoryAPI());
  }, []);

  const onHandleCreateNewCategory = (categoryNewParam) => {
    let categoryNewParam_API = {
      name: categoryNewParam.name,
    };
    dispatchRedux(actionAddCategory_API(categoryNewParam_API));
    dispatchRedux(actionCloseInputForm());
  };
  const ondeleteCategory = (idDelete) => {
    alert("Đã xóa sản phẩm");
    dispatchRedux(actionDeleteCategory_API(idDelete));
  };
  const onHandleClickEdit = (category) => {
    dispatchRedux(actionShowInputFormUpdate());
    dispatchRedux(actionEditCategory(category));
  };
  const onhandleUpdate = (categoryUpdate) => {
    let categoryNewParam_Update = {
      id: categoryUpdate.id,
      name: categoryUpdate.name,
    };
    dispatchRedux(actionUpdateCategory_API(categoryNewParam_Update));
    dispatchRedux(actionCloseInputFormUpdate());
  };
  let navigate = useNavigate();

  useEffect(() => {
    let user_login = JSON.parse(localStorage.getItem("user_login"));
    if (!user_login) {
      // TH này khi User chua login sẽ chuyển tới trang login
      return navigate("/login");
    }
  }, []);
  return (
    <div>
       <Link to={"/"} >Trang chủ</Link>
      <div><Link to={"/product"}>Sản phẩm</Link></div>
      <div>
      <input
                  type="text"
                  placeholder="Find?"
                  value={""}
                
                  
                />
                <button type="submit">
                  Search
                </button>
      
      </div>
      <Container style={{ marginTop: "150px" }}>
        <CreateButton onHandleClickButton={onHandleClickButton} />
        <ModelCreateNewCategory
          onHandleCloseButton={onHandleCloseButton}
          onHandleCreateNewCategory={onHandleCreateNewCategory}
        />
        <ResultFormCategory
          ondeleteCategory={ondeleteCategory}
          onHandleClickEdit={onHandleClickEdit}
        />
        <ModelUpdateNewCategory
          onHandleCloseEdit={onHandleCloseEdit}
          onhandleUpdate={onhandleUpdate}
        />
      </Container>
    </div>
  );
}
export default CategoryPageContainer;
