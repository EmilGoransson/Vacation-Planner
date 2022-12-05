import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchFormView(props) {
  function onChangeACB(ev) {
    props.setSearchText(ev.target.value);
    console.log("test!!!!");
  }

  function optionCB(str) {
    return <option>{str}</option>;
  }

  function searchBtnACB() {
    props.searchNow();
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
