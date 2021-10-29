import React from "react";

function Profile({ user }) {


    // let tempUser = {"feeler":{"id":3,"name":"Jak"},"feelings":[{"id":2,"feeler_id":3,"color":"E377AF","text":"My grilled cheese made me happy","created_at":"2021-10-27T19:20:49.198Z"},{"id":5,"feeler_id":3,"color":"E377AF","text":"My grilled cheese made me happy","created_at":"2021-10-27T19:26:33.899Z"},{"id":8,"feeler_id":3,"color":"E377AF","text":"My grilled cheese made me happy","created_at":"2021-10-27T20:03:30.471Z"},{"id":11,"feeler_id":3,"color":"E377AF","text":"My grilled cheese made me happy","created_at":"2021-10-27T20:05:08.615Z"},{"id":15,"feeler_id":3,"color":"6A57F3","text":"I feel funny","created_at":"2021-10-27T20:39:23.972Z"},{"id":16,"feeler_id":3,"color":"6A57F3","text":"I feel funny","created_at":"2021-10-27T20:39:37.323Z"},{"id":17,"feeler_id":3,"color":"9B4CEF","text":"I can do anything if I write code correctly pls","created_at":"2021-10-27T21:12:03.440Z"},{"id":18,"feeler_id":3,"color":"E64786","text":"I feel ok","created_at":"2021-10-28T04:52:10.438Z"},{"id":19,"feeler_id":3,"color":"FFCC47","text":"I feel eh","created_at":"2021-10-28T04:56:56.484Z"},{"id":20,"feeler_id":3,"color":"E64786","text":"I feel good","created_at":"2021-10-28T04:58:00.050Z"},{"id":21,"feeler_id":3,"color":"","text":"I love my coffee and cats","created_at":"2021-10-28T13:44:56.382Z"},{"id":22,"feeler_id":3,"color":"E377AF","text":"I feel great!","created_at":"2021-10-28T13:55:57.689Z"}]} 


    const formatDate = (date) => {
        let jsDate = new Date(date)
        return (
            `${jsDate.getDay()}/${jsDate.getFullYear()}`
        )
    }

    return (
        <div className="floating-box-container">
            {user.feelings.slice(-30).map((feeling) =>
                <div className="hover-box-wrapper">
                    <div style={{ backgroundColor: `#${feeling.color}` }} className="feeling-box frosty-box frosty-box-background">
                        <p className="feeling-date">{formatDate(feeling.created_at)}</p>
                        <p className="feeling-text">{feeling.text}</p>
                    </div>
                    <div style={{ backgroundColor: "transparent" }} className="feeling-box frosty-box frosty-box-front">
                        <p className="feeling-date">{formatDate(feeling.created_at)}</p>
                        <p className="feeling-text">{feeling.text}</p>
                    </div>
                </div>
            )}
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