import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePhone, AiOutlineMenu } from "react-icons/ai";
import "./Header.css";
import {
  actionFetchFilterProductAPI,
  actionFetchListProductAPI,
  actionFetchSearchProductAPI,
  actionFetchSortProductAPI,
} from "../../Redux/Action/ActionProduct";
import {
  Col,
  Button,
  InputGroup,
  Input,
  FormGroup,
} from "reactstrap";

function ComponentFilter(props) {
  const [isShowCategories, setShowCategories] = useState(false);

  //Todo khai bao useDispatch de gui du lieu len Store
  let dispatchRedux = useDispatch();

  let filterItem = (categoryItem) => {
    dispatchRedux(actionFetchFilterProductAPI(categoryItem));
  };

  const AllItem = () => {
    dispatchRedux(actionFetchListProductAPI());
  };

  //todo khai bao state de luu tru gia tri o input search
  let [search, setSearch] = useState("");

  const handleSearch = (searchName) => {
    dispatchRedux(actionFetchSearchProductAPI(searchName));
  };

  //todo xu ly ham sort
  let [sort, setSort] = useState("");
  dispatchRedux(actionFetchSortProductAPI(sort));

  return (
    <div className="container">
      <div className="row categories_container">
        <div className="col-lg-3 categories">
          <div
            className="categories_all"
            onClick={() => setShowCategories(!isShowCategories)}
          >
            <AiOutlineMenu /> List Product
          </div>
          {isShowCategories && (
            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Button color="white" onClick={AllItem}>
                  All
                </Button>
              </li>
              <li>
                <Button color="white" onClick={() => filterItem("Điện thoại")}>
                  Phone
                </Button>
              </li>
              <li>
                <Button color="white" onClick={() => filterItem("Máy tính")}>
                  Laptop
                </Button>
              </li>
              <li>
                <Button color="white" onClick={() => filterItem("Tai nghe")}>
                  EarPhone
                </Button>
              </li>
              <li>
                <Button color="white" onClick={() => filterItem("Đồng hồ")}>
                  Clock
                </Button>
              </li>
              <li>
                <Button color="white" onClick={() => filterItem("Tablet")}>
                  Tablet
                </Button>
              </li>
            </ul>
          )}
        </div>
        <div className="col-lg-9 search_container">
          <div className="search">
            <div className="search_form">
              <InputGroup>
                <input
                  type="text"
                  placeholder="What do you want to find?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() => handleSearch(search)} type="submit">
                  Search
                </button>
              </InputGroup>
            </div>
            <div className="search_phone">
              <div className="search_phone_text">
                <FormGroup>
                  <Input
                    id="Sort"
                    name="Sort"
                    type="select"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value={""}>sắp xếp</option>
                    <option value={"price,desc"}>Giá cao đến thấp</option>
                    <option value={"price,asc"}>Giá thấp đến cao</option>
                  </Input>
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 search_container">
          <Col sm={3}></Col>
        </div>
      </div>
    </div>
  );
}

export default ComponentFilter;
