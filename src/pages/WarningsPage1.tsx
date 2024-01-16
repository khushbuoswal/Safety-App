import { FunctionComponent, useState, useCallback, useEffect } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage1.module.css";
import{columns,rows} from "./data";

// Define the structure of each row in the warnings data
interface Row{
  key:String;
  street:string;
  camera:string;
  time:string;
}

// Define the props type for the WarningsPage1 component
type WarningsPage1Type = {
  onClose?: () => void;
};


// Function to determine color based on warning level
const getColorForLevel = (level: string): string => {
  switch (level) {
    case "Level 3":
      return "#A71616";
    case "Level 2":
      return "#CEA000";
    case "Level 1":
      return "#578D00";
    default:
      return "black"; // You can set a default color or handle other cases
  }
};


const WarningsPage1: FunctionComponent<WarningsPage1Type> = ({ onClose }) => {
   // State variables for managing pop-up visibility
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);

  // Function to calculate the number of warnings in the last 24 hours for a given level
  const calculateWarningsCount = (level: string) => {
    const now = new Date();
    const last24Hours = new Date(now);
    last24Hours.setHours(now.getHours() - 24);
  
    const warningsInLast24Hours = rows.filter((row) => {
      const rowTimeParts = row.time.split(":");
      const rowTimestamp = new Date();
      rowTimestamp.setHours(parseInt(rowTimeParts[0], 10));
      rowTimestamp.setMinutes(parseInt(rowTimeParts[1], 10));
  
      return rowTimestamp >= last24Hours && rowTimestamp <= now && row.level === level;
    });
  
    return warningsInLast24Hours.length;
  };
  
  // Calculate counts for each warning level
  const level3Count = calculateWarningsCount("Level 3");
  const level2Count = calculateWarningsCount("Level 2");
  const level1Count = calculateWarningsCount("Level 1");
  

    // React Router hook for navigation
  const navigate = useNavigate();

  // Callback functions for opening and closing pop-ups
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

  const onVectorIcon1Click = useCallback(() => {
    navigate("/warnings-page-2");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/warnings-page-3");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/warnings-page-4");
  }, [navigate]);

  // Effect hook for handling scroll animations
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsWarningP1Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsWarningP1Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP1Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  // JSX structure for rendering the component
  return (
    <>
      <div className={styles.warningsPage1}>
        <div className={styles.topBarWarningp1}>
          <div className={styles.hearder} />
          <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
          <img
            className={styles.notificationpopupWarningp1Icon}
            alt=""
            src="/vector41.svg"
            onClick={openNotificationPopUp}
          />
          <div className={styles.profilepopWarningp1}>
            <button className={styles.group} onClick={openProfilePopUp}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector29@2x.png"
              />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector30@2x.png"
              />
            </button>
          </div>
          <img
            className={styles.vectorIcon2}
            alt=""
            src="/vector17@2x.png"
            onClick={openInfoPagePopup}
          />
        </div>
        <div className={styles.level3}>
          <div className={styles.level3Child} />
          <div className={styles.level3Item} />
          <img
            className={styles.vectorIcon3}
            alt=""
            src="/vector71.svg"
            onClick={onVectorIcon1Click}
          />
          <b className={styles.level31}>{`Level 3 `}</b>
          <div className={styles.totalOf2}>
            Total of {level3Count} warnings in the past 24 hrs !!!
          </div>
        </div>
        <div className={styles.level1}>
          <div className={styles.level1Child} />
          <div className={styles.level1Item} />
          <img
            className={styles.vectorIcon4}
            alt=""
            src="/vector71.svg"
            onClick={onVectorIcon2Click}
          />
          <b className={styles.level11}>Level 1</b>
          <div className={styles.totalOf8}>
          Total of {level1Count} warnings in the past 24 hrs !
          </div>
        </div>
        <div className={styles.level2}>
          <div className={styles.level2Child} />
          <div className={styles.level2Item} />
          <img
            className={styles.vectorIcon5}
            alt=""
            src="/vector81.svg"
            onClick={onVectorIcon3Click}
          />
          <b className={styles.level11}>Level 2</b>
          <div className={styles.totalOf4}>
          Total of {level2Count} warnings in the past 24 hrs !
          </div>
        </div>
        <div className={styles.latestwarningp1}>
  <div className={styles.latestwarningp1Child} />
        <b className={styles.latest}>Latest</b>
      </div>
      <div className={styles.scroll} data-animate-on-scroll>
        <div className={styles.LineWrapper}>
          <div className={styles.Line}>
            {columns.map((column) => (
              <div key={column.key} className={styles.LineItem}>
                <span className={styles.Label}>{column.label}:</span>
              </div>
            ))}
          </div>
          {rows.map((row) => (
            <div key={row.key} className={styles.Line}>
              {columns.map((column) => (
                <div key={column.key} className={styles.LineItem}>
                  {column.key === 'level' ? (
                    <span className={styles.Value} style={{ color: getColorForLevel(row.level) }}>
                      {row[column.key as keyof Row]}
                    </span>
                  ) : (
                    <span className={styles.Value}>{row[column.key as keyof Row]}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
        <div className={styles.allelementssidebarWarningp1}>
          <div className={styles.sidebarWarningp1} />
          <button className={styles.logoutWarningp1} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group5@2x.png" />
            <div className={styles.logoutWarningp1Child} />
          </button>
          <button
            className={styles.statisticsWarningp1}
            onClick={onStatisticsWarningP1Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/group6@2x.png" />
          </button>
          <div className={styles.allelementssidebarWarningp1Child} />
          <button
            className={styles.warningsWarningp1}
            onClick={onWarningsWarningP1Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img
              className={styles.vectorIcon6}
              alt=""
              src="/vector21@2x.png"
            />
          </button>
          <button
            className={styles.mapsWarningp1}
            onClick={onMapsWarningP1Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon7} alt="" src="/vector22@2x.png" />
            <img className={styles.vectorIcon8} alt="" src="/vector23@2x.png" />
            <img className={styles.vectorIcon9} alt="" src="/vector24@2x.png" />
          </button>
          <button
            className={styles.homeWarningp1}
            onClick={onHomeWarningP1Click}
          >
            <div className={styles.home}>Home</div>
            <img
              className={styles.vectorIcon10}
              alt=""
              src="/vector28@2x.png"
            />
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

// Export the component

export default WarningsPage1;
