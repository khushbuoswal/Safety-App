import { FunctionComponent, useState, useCallback } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage2Level3.module.css";

const MapPage2Level3: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(true);
  }, []);

  const closeNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(false);
  }, []);

  const openProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(true);
  }, []);

  const closeProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(false);
  }, []);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  const onLevel1TextClick = useCallback(() => {
    navigate("/map-page-level-1");
  }, [navigate]);

  const onLevel2TextClick = useCallback(() => {
    navigate("/map-page-level-2");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsMapP2L3Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsMapP2L3Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2L3Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeMapP2L3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <>
      <div className={styles.mapPage2Level3}>
        <div className={styles.topbarMapp2Level3}>
          <div className={styles.topbarMapp2Level3Child} />
          <img
            className={styles.screenshot202311271652466}
            alt=""
            src="/logo2@2x.png"
          />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector41.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.groupIcon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector17@2x.png"
            onClick={openInfoPagePopup}
          />
        </div>
        <img
          className={styles.imagemapMapp2Level3}
          alt=""
          src="/mapimage-mapp2-level-2@2x.png"
        />
        <div className={styles.headerbarMapp2Level3}>
          <div className={styles.headerbarMapp2Level3Child} />
          <b className={styles.streetSafetyLevel}>Street Safety Level Map</b>
        </div>
        <div className={styles.leveloptionsMapp2Level3}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.level1} onClick={onLevel1TextClick}>
              Level 1
            </div>
            <div className={styles.groupInner} />
            <div className={styles.level3}>Level 3</div>
            <div className={styles.level2} onClick={onLevel2TextClick}>
              Level 2
            </div>
          </div>
        </div>
        <div className={styles.allelementssidebarMapp2L3}>
          <div className={styles.sidebarMapp2L3} />
          <button className={styles.logoutMapp2L3} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon1} alt="" src="/group5@2x.png" />
            <div className={styles.logoutMapp2L3Child} />
          </button>
          <button
            className={styles.statisticsMapp2L3}
            onClick={onStatisticsMapP2L3Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/group6@2x.png" />
          </button>
          <button
            className={styles.warningsMapp2L3}
            onClick={onWarningsMapP2L3Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.statistics}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/vector33@2x.png" />
          </button>
          <div className={styles.allelementssidebarMapp2L3Child} />
          <button className={styles.mapsMapp2L3} onClick={onMapsMapP2L3Click}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/vector37@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector38@2x.png" />
            <img className={styles.vectorIcon5} alt="" src="/vector36@2x.png" />
          </button>
          <button className={styles.homeMapp2L3} onClick={onHomeMapP2L3Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/vector25@2x.png" />
          </button>
        </div>
      </div>
      {isNotificationPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <NotificationPopUp onClose={closeNotificationPopUp} />
        </PortalPopup>
      )}
      {isProfilePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeProfilePopUp}
        >
          <ProfilePopUp onClose={closeProfilePopUp} />
        </PortalPopup>
      )}
      {isInfoPagePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInfoPagePopup}
        >
          <InfoPage onClose={closeInfoPagePopup} />
        </PortalPopup>
      )}
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

export default MapPage2Level3;
