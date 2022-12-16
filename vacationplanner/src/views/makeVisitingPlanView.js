import React from "react";
function MakeVisitingPlanView() {
  return (
    <div className="aboutChild">
      <h5>A short description of how to make a visiting plan step by step</h5>
      <br />
      <h6>
        1. Search a location, the app will display attractions and weather
        forecast for Stockholm, Sweden by default. (Please be careful with
        spelling of location)
        <br />
        <br />
        At this point you get a list of attractions in the search results view.
        The weather forecast for three days ahead will be displayed at the right
        sidebar as well. Each attraction will contain a zoomable picture, a
        ranking, adress and website link that user can visit for more
        information.
        <br />
        Each attraction has two clickable buttons "More Info" and "Add To
        favorite". By clicking on "More Info" the user will get more details
        about that attraction. "Add To favorite" will add that attraction to the
        favorites sidebar.
        <br />
        <br />
        2. Set a start date and time for the added attraction. You can get more
        details even in the favorites sidebar by clicking on the added
        attraction.
        <br />
        You have access to your previous searches in the "Recen Search" sidebar
        and you can directly search the previous search by clicking on it in the
        sidebar.
        <br />
        <br />
        3. After adding your favorite attractions and setting the start- and end
        date/time for each, you can get a summary of your plan by clicking on
        the "Your Visiting Plan".
        <br />
        <br />
        4. After reviewing your visiting plan you can save the file as a pdf
        file in your local directory by clicking on the print symbole.
        <br />
        <br />
        5. Great! Now you have a visiting plan for your vacation. We hope that
        you enjoy of your vacation.
        <br />
        <br />
        Sincerly
        <br />
        Vacation Planner developers!
      </h6>
    </div>
  );
}
export default MakeVisitingPlanView;
