import React from "react";

function Profile({ user }) {
    return (
        <div>
            <h1>hi from Profile!</h1>
        </div>
    );
}

export default Profile;



// dont need to fetch again because we updated state with createFeelings using setUser function which hands us most updated version of user from fetch
// import user prop
// map over last 30 user.feelings -- use slice: slice(user.feelings.length - 31, user.feelings.length - 1)
// create formatDate function to convert ruby created_at date to JS date and return date how we want formatted on front-end
// dynamically set background color from feeling.color attribute using inline-jsx styles
// add hover to show tile text *transform z? increase scale css? 
// add classNames for css styling