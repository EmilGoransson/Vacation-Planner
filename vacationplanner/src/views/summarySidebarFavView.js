function summarySidebarFavView(props) {
  function getFavoriteFromArrayCB(obj) {
    return (
      <div key={obj.location_id} className="sidebarText">
        {obj.name}
        <div>from={props.startDate ? props.startDate.toString() : null}</div>
        <div>to={props.endDate ? props.endDate.toString() : null}</div>
      </div>
    );
  }
  return (
    <div className="sidebarParents">
      {props.favoriteArray.map(getFavoriteFromArrayCB)}
    </div>
  );
}
export default summarySidebarFavView;
