import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

/*
@Author Mahdi <mnazari@kth.se>
@Co-Author Emil <emilgo@kth.se>
TODO:
DONE:
*/

function SearchFormView(props) {
  function onChangeACB(e) {
    props.setSearchTest(e.target.value);
  }

  function searchBtnACB() {
    props.doSearch();
  }
  function handleKeyPressACB(target) {
    if (target.charCode === 13) {
      props.doSearch();
    }
  }

  return (
    <div className="form-container">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="E.g Stockholm"
          aria-label="E.g Stockholm"
          aria-describedby="basic-addon2"
          onChange={onChangeACB}
          onKeyPress={handleKeyPressACB}
        />
        <Button onClick={searchBtnACB}>Search!</Button>
      </InputGroup>
    </div>
  );
}
export default SearchFormView;
