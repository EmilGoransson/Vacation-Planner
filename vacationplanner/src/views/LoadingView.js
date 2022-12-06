import React from "react";
/*
@Author Emil <emilgo@kth.se>
DONE: Displays gif
*/
function LoadingView() {
  return (
    <div className="text-center">
      <div className="spinner-border m-5" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
export default LoadingView;
