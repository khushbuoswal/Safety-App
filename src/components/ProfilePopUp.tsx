import { FunctionComponent, useState, useCallback } from "react";
import Logout from "./Logout";
import PortalPopup from "./PortalPopup";
import styles from "./ProfilePopUp.module.css";

type ProfilePopUpType = {
  onClose?: () => void;
};

const ProfilePopUp: FunctionComponent<ProfilePopUpType> = ({ onClose }) => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.profilePopUp}>
        <div className={styles.profilePopUpChild} />
        <b className={styles.profile}>Profile</b>
        <b className={styles.nameName}>Name Name</b>
        <div className={styles.profilePopUpItem} />
        <button className={styles.logOut} onClick={openLogoutPopup}>
          Log Out
        </button>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        <img
          className={styles.closebuttonProfilepopupIcon}
          alt=""
          src="/vector3.svg"
          onClick={onClose}
        />
      </div>
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <Logout onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfilePopUp;
