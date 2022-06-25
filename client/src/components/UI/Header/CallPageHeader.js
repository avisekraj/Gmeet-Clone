// import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCommentAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageHeader.scss";

const CallPageHeader = ({setIsMessenger,isMessenger,messageAlert,setMessageAlert}) => {
  

  return (
    <div className="frame-header">
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon" icon={faUserFriends}
        onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }} />
      </div>
      <div
        className="header-items icon-block"
        onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }}
      >
        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        {!isMessenger && messageAlert.alert && (
          <span className="alert-circle-icon"></span>
        )}
      </div>
      <div className="header-items date-block">04:17 AM</div>
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
      </div>
    </div>
  );
};

export default CallPageHeader;
