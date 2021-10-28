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
// map over last 30 user.feelings 
// add hover to show tile text *transform z? increase scale css? 