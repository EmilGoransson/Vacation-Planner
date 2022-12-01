function SearchFormView(props) {
  function onChangeACB(ev) {
    props.setSearchText(ev.target.value);
  }

  function optionCB(str) {
    return <option>{str}</option>;
  }

  return (
    <div className="form-container">
      <input
        placeholder="type here"
        onChange={onChangeACB}
        className="form-input"
      />
      <button className="searchButton" onClick={console.log("Click!")}>
        Search
      </button>

      <select onChange={console.log("One option was chosen")}>
        <option>Choose Options</option>
        {props.dishTypeOptions.map(optionCB)}
      </select>
    </div>
  );
}
export default SearchFormView;
