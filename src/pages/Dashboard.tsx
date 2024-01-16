import { FunctionComponent, useState, useCallback } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import Logout from "../components/Logout";
import InfoPage from "../components/InfoPage";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const navigate = useNavigate();

  const onViewmapsContainerClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

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

  const onViewstatisticsContainerClick = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onView1Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onView2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMemoryarrowRightIcon2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsDashboardClick = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsDashboardClick = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsDasboardClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeDashboardClick = useCallback(() => {
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
      <div className={styles.dashboard}>
        <div className={styles.mapsBigbuttonDashboard}>
          <div className={styles.mapsBigbuttonDashboardChild} />
          <b className={styles.maps}>Maps</b>
          <img
            className={styles.mapsBigbuttonDashboardItem}
            alt=""
            src="/rectangle-59@2x.png"
          />
          <div className={styles.viewmaps} onClick={onViewmapsContainerClick}>
            <img
              className={styles.viewmapsChild}
              alt=""
              src="/rectangle-122.svg"
            />
            <button className={styles.view}>View</button>
            <img
              className={styles.memoryarrowRightIcon}
              alt=""
              src="/memoryarrowright.svg"
            />
          </div>
        </div>
        <div className={styles.warningsBigbuttonDashboard}>
          <div className={styles.warningsBigbuttonDashboardChild} />
          <button className={styles.warningsBigbuttonDashboardItem} />
          <b className={styles.warnings}>Warnings</b>
          <div className={styles.warningsBigbuttonDashboardInner} />
          <div className={styles.latest02122023SatContainer}>
            <p className={styles.latest}>Latest:</p>
            <p className={styles.latest}>02/12/2023 Sat 9:30 am Queen St -</p>
            <p className={styles.latest}>
              <span>{`CCTV 12                               `}</span>
              <span className={styles.level3}>Level 3</span>
            </p>
          </div>
        </div>
        <div className={styles.topBarDashboard}>
          <div className={styles.topBarDashboardChild} />
          <img
            className={styles.logoDashboardIcon}
            alt=""
            src="/logo-dashboard@2x.png"
          />
          <img
            className={styles.notificationDashboardIcon}
            alt=""
            src="/vector41.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profileDashboardIcon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
        </div>
        <div className={styles.reportincidentsBigbuttonDash}>
          <div className={styles.reportincidentsBigbuttonDashChild} />
          <b className={styles.statistics}>Statistics</b>
          <div
            className={styles.viewstatistics}
            onClick={onViewstatisticsContainerClick}
          >
            <div className={styles.viewstatisticsChild} />
            <button className={styles.view1} onClick={onView1Click}>
              View
            </button>
            <img
              className={styles.memoryarrowRightIcon1}
              alt=""
              src="/memoryarrowright11.svg"
            />
          </div>
        </div>
        <div className={styles.viewwarnings}>
          <img
            className={styles.viewwarningsChild}
            alt=""
            src="/rectangle-12211.svg"
            onClick={onRectangle7Click}
          />
          <button className={styles.view2} onClick={onView2Click}>
            View
          </button>
          <img
            className={styles.memoryarrowRightIcon2}
            alt=""
            src="/memoryarrowright.svg"
            onClick={onMemoryarrowRightIcon2Click}
          />
        </div>
        <div className={styles.allelementssidebarDashboard}>
          <div className={styles.sidebarDashboard} />
          <button className={styles.logoutDashboard} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group3@2x.png" />
            <div className={styles.logoutDashboardChild} />
          </button>
          <button
            className={styles.statisticsDashboard}
            onClick={onStatisticsDashboardClick}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics1}>Statistics</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="group4@2x.png" />
          </button>
          <button
            className={styles.warningsDashboard}
            onClick={onWarningsDashboardClick}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.statistics1}>Warnings</div>
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector8@2x.png" />
          </button>
          <button className={styles.mapsDasboard} onClick={onMapsDasboardClick}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps1}>Maps</div>
            </button>
            <img className={styles.vectorIcon1} alt="" src="/vector9@2x.png" />
            <img className={styles.vectorIcon2} alt="" src="/vector10@2x.png" />
            <img className={styles.vectorIcon3} alt="" src="/vector11@2x.png" />
          </button>
          <button
            className={styles.homeDashboard}
            onClick={onHomeDashboardClick}
          >
            <div className={styles.topBarDashboardChild} />
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon4} alt="" src="/vector12@2x.png" />
          </button>
        </div>
        <img className={styles.vectorIcon5} alt="" src="/vector13@2x.png" />
        <img className={styles.vectorIcon6} alt="" src="/vector14@2x.png" />
        <img className={styles.vectorIcon7} alt="" src="/vector15@2x.png" />
        <img className={styles.vectorIcon8} alt="" src="/vector16@2x.png" />
        <img
          className={styles.vectorIcon9}
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

export default Dashboard;
