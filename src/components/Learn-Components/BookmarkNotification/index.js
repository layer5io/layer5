import React from "react";
import NotificationWrapper from "./bookmark-notification.style";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";

const NotificationComponent = ({ showNotification, closeNotification }) => {
  return showNotification && (
    <NotificationWrapper>
      <div className="notification-container">
        <p>We track your progress so you don't need to worry about the 'mesh' of remembering where you left.</p>
        <MdCancel className="notification-cross-icon" onClick={closeNotification}/>
      </div>
    </NotificationWrapper>
  );
};

export default NotificationComponent;
