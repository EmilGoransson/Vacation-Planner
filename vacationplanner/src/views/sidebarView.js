import React from "react";

function SidebarView(favorites) {
  return (
    <div className="main">
      <div>Favorites</div>
      {renderFavorites(favorites)}
    </div>
  );
}
function renderFavorites(favorites) {
  function favoritesToTableRowCB(favorite) {
    return (
      <tr key={favorite}>
        <td>{<button onClick={"removeFavoriteACB"}>x</button>}</td>
      </tr>
    );
  }
  return (
    <table>
      <tbody>{favorites.forEach(favoritesToTableRowCB)}</tbody>
    </table>
  );
}
export default SidebarView;
