import { FunctionComponent, useState, useCallback } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import Logout from "../components/Logout";
import InfoPage from "../components/InfoPage";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage2Level1.module.css";

const MapPage2Level1: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isLogoutPopup1Open, setLogoutPopup1Open] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
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

  const onLevel3TextClick = useCallback(() => {
    navigate("/map-page-level-3");
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

  const onReportIncidentsMapP2L1Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsMapP2L1Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2L1Click = useCallback(() => {
    // Please sync "Map Page 1" to the project
  }, []);

  const onHomeMapP2L1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openLogoutPopup1 = useCallback(() => {
    setLogoutPopup1Open(true);
  }, []);

  const closeLogoutPopup1 = useCallback(() => {
    setLogoutPopup1Open(false);
  }, []);

  const onStatisticsMapP2L1Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsMapP2L11Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2L11Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeMapP2L11Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.mapPage2Level1}>
        <div className={styles.topbarMapp2l1}>
          <div className={styles.topbarMapp2l1Child} />
          <img
            className={styles.logoMapp2l1Icon}
            alt=""
            src="/logo-mapp2l1@2x.png"
          />
          <img
            className={styles.notificationMapp2l1Icon}
            alt=""
            src="/vector91.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profileMapp2l1Icon}
            alt=""
            src="/group11.svg"
            onClick={openProfilePopUp}
          />
        </div>
        <img
          className={styles.mapimageMapp2l1Icon}
          alt=""
          src="/mapimage-mapp2l1@2x.png"
        />
        <div className={styles.headerbarMapp2l1}>
          <div className={styles.headerbarMapp2l1Child} />
          <b className={styles.streetSafetyLevel}>Street Safety Level Map</b>
        </div>
        <div className={styles.leveloptionsMapp2l1}>
          <div className={styles.leveloptionsMapp2l1Child} />
          <div className={styles.level1}>Level 1</div>
          <div className={styles.leveloptionsMapp2l1Item} />
          <div className={styles.leveloptionsMapp2l1Inner} />
          <div className={styles.level3} onClick={onLevel3TextClick}>
            Level 3
          </div>
          <div className={styles.level2} onClick={onLevel2TextClick}>
            Level 2
          </div>
        </div>
        <div className={styles.allelementssidebarMapp2L1}>
          <div className={styles.sidebarMapp2L1} />
          <button className={styles.logoutMapp2L1} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group5@2x.png" />
            <div className={styles.logoutMapp2L1Child} />
          </button>
          <button
            className={styles.reportincidentsMapp2L1}
            onClick={onReportIncidentsMapP2L1Click}
          >
            <button className={styles.reportIncidentsWrapper}>
              <div className={styles.reportIncidents}>
                <p className={styles.report}>Report</p>
                <p className={styles.report}>Incidents</p>
              </div>
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector40@2x.png" />
          </button>
          <div className={styles.futureapplicationsMapp2L1}>
            <button className={styles.futureApplicationsWrapper}>
              <div className={styles.futureApplications}>
                <p className={styles.report}>Future</p>
                <p className={styles.report}>Applications</p>
              </div>
            </button>
            <img className={styles.vectorIcon1} alt="" src="/vector42@2x.png" />
          </div>
          <button
            className={styles.warningsMapp2L1}
            onClick={onWarningsMapP2L1Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.reportIncidents}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/vector33@2x.png" />
          </button>
          <div className={styles.allelementssidebarMapp2L1Child} />
          <button className={styles.mapsMapp2L1} onClick={onMapsMapP2L1Click}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/vector43@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector38@2x.png" />
            <img className={styles.vectorIcon5} alt="" src="/vector44@2x.png" />
          </button>
          <button className={styles.homeMapp2L1} onClick={onHomeMapP2L1Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/vector28@2x.png" />
          </button>
        </div>
        <div className={styles.allelementssidebarMapp2L11}>
          <div className={styles.sidebarMapp2L1} />
          <button className={styles.logoutMapp2L1} onClick={openLogoutPopup1}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group5@2x.png" />
            <div className={styles.logoutMapp2L1Child} />
          </button>
          <button
            className={styles.statisticsMapp2L1}
            onClick={onStatisticsMapP2L1Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.reportIncidents}>Statistics</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/group6@2x.png" />
          </button>
          <button
            className={styles.warningsMapp2L1}
            onClick={onWarningsMapP2L11Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.reportIncidents}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/vector33@2x.png" />
          </button>
          <div className={styles.allelementssidebarMapp2L1Child} />
          <button className={styles.mapsMapp2L1} onClick={onMapsMapP2L11Click}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/vector34@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector35@2x.png" />
            <img className={styles.vectorIcon5} alt="" src="/vector36@2x.png" />
          </button>
          <button className={styles.homeMapp2L1} onClick={onHomeMapP2L11Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/vector25@2x.png" />
          </button>
        </div>
        <img
          className={styles.vectorIcon12}
          alt=""
          src="/vector17@2x.png"
          onClick={openInfoPagePopup}
        />
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
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <Logout onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
      {isLogoutPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup1}
        >
          <Logout onClose={closeLogoutPopup1} />
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
    </>
  );
};

export default MapPage2Level1;
