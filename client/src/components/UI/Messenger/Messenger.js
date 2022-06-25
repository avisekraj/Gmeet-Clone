import { useState } from "react";
import "./Messenger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "./../../../utils/helpers";

const Messenger = ({ setIsMessenger, sendMsg }) => {
  const [msg, setMsg] = useState("");

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };
  const [show, setShow] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMsg(msg);
      setMsg("");
    }
  };

  const handleSendMsg = () => {
    sendMsg(msg);
    setMsg("");
  };

  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting details</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setIsMessenger(false);
          }}
        />
      </div>

      <div className="messenger-header-tabs" onClick={() => setShow(!show)}>
        <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (8)</p>
        </div>
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
        <div className="chat-block">
          <div className="sender">
            <small>Abhi:</small>
          </div>
          <p className="msg">Hi</p>
          <p className="msg">I'm Abhi</p>
          <div className="sender1">
            <small>shek:</small>
          </div>
          <p className="msg1" style={{ marginTop: "7px" }}>
            Hi
          </p>
          <p className="msg1">I'm Bachchan</p>
          <div className="sender">
            <small>Abhi:</small>
          </div>
          <p className="msg">How are you</p>
          <div className="sender1">
            <small>Shek:</small>
          </div>
          <p className="msg1">Fine</p>
          <p className="msg1">And You</p>
          <div className="sender">
            <small>Abhi:</small>
          </div>
          <p className="msg">I'm also Fine</p>
          <p className="msg">Bye</p>
          <div className="sender1">
            <small>Shek:</small>
          </div>
          <p className="msg1">Bye</p>
        </div>
      </div>

      <div className="send-msg-section">
        <input
          placeholder="Send a message to everyone"
          value={msg}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
          onClick={handleSendMsg}
        />
        {show && (
          <div className="people-section">
            <div className="list">
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} /> Abhishek</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Deepak</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Haneet</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Param</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Shivam</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Anand</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Ritu</p>
              <p className="naam"><FontAwesomeIcon className="icon" icon={faUser} />Tanu</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messenger;
