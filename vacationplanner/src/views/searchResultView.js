//@Author Emil Göransson

import React from "react";

/*
@Author Emil <emilgo@kth.se>
TODO: Title, description, rating, location, price, link to website when clicking on object, CSS
DONE: Loading when waiting on image, displaying image.
*/


function SearchResultView(props){

    function pictureFromSearchCB(obj){
        console.log(obj)
        function whenClickingOnPictureACB(){
            console.log("temp click")
        }
        if(obj.photo) { // if there is a photo

            return (<div key = {obj.location_id}>
                <span onClick={whenClickingOnPictureACB} className="searchResult">
        <img
            className="imageSearchResult"
            src={obj.photo.images.medium.url}
            height={"100"}
        />
        <div>{obj.title}</div>
      </span>
            </div>);
        }
        else return null;
    }
    return (
        <div className="searchResultViewMain">
            {props.attractionData.map(pictureFromSearchCB)}
        </div>
    );
}
export default SearchResultView;