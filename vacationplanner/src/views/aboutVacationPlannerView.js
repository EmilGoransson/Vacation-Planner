import React from "react";
function AboutVacationPlannerView() {
  return (
    <div className="aboutChild">
      <h6>
        <div>
          Vacation Planner was created as final project in the course
          Interaction Programming and the Dynamic Web (DH2642)
          <br />
          <br />
          The aim of the app is to give apportunity to the users to plan an
          unforgetable vacation full of activities.
          <br />
          <br />
          The app contains a bounch of functionalities to achieve its goal. User
          can search attractions for a specefic location by searching that
          location. The app will retrieve the most famous attractions for the
          searched location. The most of large cities around the world are
          covered by the app but unfortuately there are some limitations that
          user should be aware of. E.g. small towns might not be covered by the
          app and misspelt location can lead to long time loading stage with no
          search results.
          <br />
          Beside the attractions, user will get a weather forecast for three
          days ahead for the searched location as well. This functionality will
          give the user a better chance to make a more satisfying visiting plan.
          <br />
          <br />
          After discovering each attraction in the search result window, user
          will be able to add the desired attractions as his/her favorites which
          will be displayed at the left sidebar under Favourites. User will be
          able to add a start and end date/time for each added favourite.
          <br />
          At the end, user will be able to get a summary of his/her visiting
          plan by clicking on "Your Visiting Plan" button and then print out the
          plan or save the plan as a pdf file.
        </div>
      </h6>
    </div>
  );
}
export default AboutVacationPlannerView;
