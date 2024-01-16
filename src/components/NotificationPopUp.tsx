import { FunctionComponent } from "react";
import styles from "./NotificationPopUp.module.css";

type NotificationPopUpType = {
  onClose?: () => void;
};

const NotificationPopUp: FunctionComponent<NotificationPopUpType> = ({
  onClose,
}) => {
  return (
    <div className={styles.notificationPopUp}>
      <div className={styles.notificationPopUpChild} />
      <div className={styles.newUnviewedWarningsContainer}>
        <ul className={styles.newUnviewedWarningsSince19}>
          <li>
            <span className={styles.span}>3</span>
            <span> new unviewed Warnings since 19:50 !!</span>
          </li>
        </ul>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <div className={styles.notificationheaderNotificatio}>
        <b className={styles.notifications}>Notifications</b>
        <div className={styles.notificationheaderNotificatioChild} />
        <b className={styles.b}>3</b>
        <button
          className={styles.closebuttonNotificationpopup}
          onClick={onClose}
        >
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector3.svg"
            onClick={onClose}
          />
        </button>
      </div>
    </div>
  );
};

export default NotificationPopUp;
