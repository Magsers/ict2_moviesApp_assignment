# ICT Skills 2 Assignment.

## Name
Margaret McCarthy

## Overview

This project is a REACT application based on The Movies Database API https://developers.themoviedb.org/4/getting-started/authorization 
It uses the Material UI framework and Firebase Authentication.  

# App Overview
The features of this app include : 
* Display a list of current shows Eg: movies, tv series, upcoming movies and top rated movies.  Shows a poster image for each with some details.  
* Display more detailed information on a show (tv series or movie) from the above list by clicking its 'More Info ..' button. The details include plot, genres, runtime, revenue, etc.
* Show extracts from written reviews for a show (tv series or movie).
* Show the full review text for a review for tv series and movies.
* Add either tv series or movies to your favourites list which is displayed on a favourites page.
* Write a review for one of your favourite tv shows or movies.
* The cast list is listed for each show and if you click Full Cast a list of the all the actors in a show are listed.
* The header for the cast displays the show name.
* On each actor card there is an Actor Info button which brings the user to the Actor's details page where there is a biography, images and more information about the actor.
* Navigational arrows are throughout the app so the user can go back or forward to the page they were at.
* On movies and tv series pages, the user can select favourites to add to a Favourites List.
* On Upcoming movies and top rated movies the user can add movies to a Must Watch list.
* Favourites and Must watch movies can also be deleted from the list.
* To view the Favourites or the Must Watch list the user must be a registered user. Selecting these links without logging in will direct the user to a login page.
* User can either Register as a new user, Login or Reset their password if they are already a user but forgot their password.
* Firebase is used to authenticate the user.
* Firestore needs to be set up in order to store each user's favourites.  This has not been developed yet so each user has the same favourites and watchlist.
* Users can log out.  The site header will change to display logged in user's email when they log in and a logout button so they can log out.
* Storybook backup is used to ensure most components are robust.
* Caching is used throughout the app.


## Setup Requirements

Clone this repository. You will need node and npm installed globally on your machine.  

You will need a TMDB API key and a Firebase API key.  

You need to include a .env file ( see below ) which stores your TMDB API key and Firebase API key and Authentication information : 

REACT_APP_TMDB_KEY=
FAST_REFRESH=false

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGINGSENDERID=
REACT_APP_FIREBASE_APPID=

Installation:

npm install

To Start Server:

npm run start

To Start Storybook:

npm run storybook

To Visit App:

localhost:3000

## App Design

Routing/Navigation.

/movies - home page with list of movies
/movies/:id - detailed information on a specific movie.
/movies/upcoming - lists movies soon to be shown in cinemas.
/movies/toprated - lists top rated movies
/tvseries - lists tv series 
/tvseries/:id - detailed information on a specific tv series
/favourites - lists favourite tv series and favourite movies
/mustWatch - users watchlist
/reviews/:id - displays movie reviews 
/reviews/form - form to add a movie review
/reviews/tv/form - form to add a tv review
/actor/:id - displays an actor's details and images
/cast/:id/:str - displays either a tv or movie cast
/login - Login form 
/logout - Logout route
/register - Register as a new user
/reset - Reset your password if you have forgotten it

## Views/Pages

# actorPage
![][actor]

[actor]: /public/assets/actor.jpg

# addTVReviewPage

# castPage

# favouritesPage

# login

# mustWatchPage

# register

# reset

# topRatedMoviesPage

# tvSeriesDetailsPage

# tvSeriesPage



## Support
20095610@mail.wit.ie

## Roadmap
Features I would like to include in the future : 

* Firestore to store user data so each user's favourites and watchlist is unique
* More features to enhance the app.  Eg : Trailers, more actor / movie / tv series metadata.
* Improve on the appearance of the login and register forms
* Additional storybook components
* Pagination

## Contributing
Open to contributions

Installation instructions above.

Storybook support for testing components.

## Authors and acknowledgment
Margaret McCarthy - Higher Diploma in Computer Science 2021, SETU
Diarmuid O'Connor - Lecturer of ICT2 Skills

## Project status
Development has ceased at present as this was an assignment for ICT2 Skills.  

