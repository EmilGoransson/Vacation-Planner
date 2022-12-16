import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function SidebarParentsView(props) {
  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={props.buttonInFocus}
      >
        <ToggleButton
          variant="outline-primary"
          id="tbg-radio-1"
          value={1}
          onClick={() => props.setCurrentViewToRecent()}
        >
          Recent Search
        </ToggleButton>
        <ToggleButton
          variant="outline-primary"
          id="tbg-radio-2"
          value={2}
          onClick={() => props.setCurrentViewToFavorite()}
        >
          Favorites
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
export default SidebarParentsView;
