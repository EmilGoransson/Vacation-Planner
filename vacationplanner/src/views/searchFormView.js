import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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

  return (
    <div className="form-container">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="E.g Stockholm"
          aria-label="E.g Stockholm"
          aria-describedby="basic-addon2"
          onChange={onChangeACB}
        />
        <Button onClick={searchBtnACB}>Search!</Button>
      </InputGroup>
    </div>
  );
}
export default SearchFormView;
