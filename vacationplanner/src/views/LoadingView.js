import React from "react";
/*
@Author Emil <emilgo@kth.se>
DONE: Displays gif
*/
function LoadingView() {
  return (
    <div>
      <img
        className="imageSearchResult"
        src={"https://acegif.com/wp-content/uploads/loading-25.gif"}
        height={"100"}
      />{" "}
    </div>
  );
}
export default LoadingView;
