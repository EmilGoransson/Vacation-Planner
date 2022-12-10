function summarySidebarFavView(props) {
  function getFavoriteFromArrayCB(obj) {
    console.log(obj);
    return (
      <div key={obj.attractionInfo.location_id} className="sidebarText">
        <div></div>
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
