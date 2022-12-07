Vacation-Planner


Lets you search for a famous city, get the activities/attractions and check the weather

What you have done:
You can search and get activities/attractions and check the weather. You can add your favorite attraction to the sidebar, check recent searches and check details about each attraction

What you still plan to do:
1) Sign in/Authentication 
2) Firebase integration (persistance)
3) Fix race-conditions for search
4) Further implement functions on "more details"
5) Make it possible to plan your trip (add time/date to favorized attractions) & print favorites with date
6) Make favorites clickable in sidebar

Your project file structure (short description/purpose of each file):

MVP structure:

Model: 
recentStore.js (observers/stores latest data of recent searches, add recent, remove recent) & vacationStore.js (observers/stores latest data of favorites, search query, attraction in "focus", remove favorites, add favorites)

Pages: searchResultPage.js & sidebarPage.js (To organize the page layout code & routing)

Presenters: headerPagePersenter.js , searchFormPresenter.js, searchResultPresenter.js, sidebarRecentPersenter.js, signInPagePresenter.js & weatherPersenter.js (passes info/ACB to corresponding views)

Views: HeaderPageView.js (shows logo/title/sign in button), LoadingView.js (Loading animation), searchFormView.js (Shows textbox & search button), searchResultView.js (Shows API results (image/location/rating)), sidebarFavView.js (Shows sidebar with favorites & button to remove), sidebarRecentView.js (Shows sidebar with recent searches & button to remove), signInPageView.js (shows page) & weatherView.js (shows weather)
