import React from "react";
import "./CSS/NotifDropdown.css";
function NotifDropdown(props) {
    const {setOpen,notifications,setnotifCount}=props;
    console.log("notifiiiiii",notifications);
  // const notifications2 = [
  //     {
  //         reviewId: "650238615d1e20d6371cdf7c",
  //         newLikes: 0,
  //         newSaveCount: 3,
  //       },
  //       {
  //           reviewId: "650238615d1e20d6371cdf7c",
  //           newLikes: 6,
  //           newSaveCount: 2,
  //       },
  //   ];
    
  return (
    <div>
      <div className="notifCont">
        <div className="innernotifCont">
          {notifications.length>0 ? (notifications.map((notification, index) => (
            <React.Fragment key={index}>
              {notification.newLikes > 0 && (
                <div className="notifrow">
                  <p>{notification.newLikes} people agreed with your review</p>
                </div>
              )}
              {notification.newSaveCount > 0 && (
                <div className="notifrow">
                  <p>{notification.newSaveCount} people saved your review</p>
                </div>
              )}
          <button className="JoinButton-hero notifBtn" onClick={()=>{
            setOpen(false);
            setnotifCount(0);
          }}>See more</button>
            </React.Fragment>
          ))) : (<p>No new notification!</p>)}
        </div>
      </div>
    </div>
  );
}

export default NotifDropdown;
