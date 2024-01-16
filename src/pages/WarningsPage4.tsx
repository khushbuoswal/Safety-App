// Import necessary modules and components
import { FunctionComponent, useState, useCallback, useEffect, useMemo } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Levels from "../components/Levels";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage4.module.css"; // Import styles specific to WarningsPage4
import { columns, rows } from "./data"; // Import data for columns and rows
import ProgressBar from "./FrequencyTable";

// Define the interface for each row in the table
interface Row {
  key: string;
  street: string;
  camera: string;
  time: string;

  // Add other properties as needed
}

// Define the prop types for WarningsPage4
type WarningsPage4Type = {
  onClose?: () => void;
};

// Define the functional component WarningsPage4
const WarningsPage4: FunctionComponent<WarningsPage4Type> = ({ onClose }) => {
  // State variables to manage pop-up visibility and input value
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLevelsPopupOpen, setLevelsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [iValue, setIValue] = useState('');
  const [incidentsByTimeRange, setIncidentsByTimeRange] = useState<number[]>(Array(12).fill(0));

   // Initial incidents data for demo purposes
  const initialIncidentsData = [
    { level: 2, startHour: 9, startMinute: 30 },
    { level: 3, startHour: 10, startMinute: 29 },
    { level: 3, startHour: 4, startMinute: 0 },
    { level: 3, startHour: 10, startMinute: 28 },
    { level: 3, startHour: 10, startMinute: 28 },
    { level: 3, startHour: 5, startMinute: 59 },
    { level: 3, startHour: 4, startMinute: 0 },
    { level: 3, startHour: 4, startMinute: 0 },
    { level: 1, startHour: 4, startMinute: 0 },
    // Add more data as needed
  ];

  // useEffect to calculate incidents based on the initial data after the initial render
  useEffect(() => {
    // Calculate incidents based on the initial data after the initial render
    const newIncidents = Array(12).fill(0); // Initialize new incidents array

    initialIncidentsData.forEach((data) => {
      const { level, startHour, startMinute } = data;
      const totalMinutes = startHour * 60 + startMinute;
      const hourIndex = Math.floor(totalMinutes / 120); // 2-hour time range

      // Only increment if the incident is of level 3
      if (level === 2) {
        newIncidents[hourIndex]++;
      }
    });

    setIncidentsByTimeRange(newIncidents); // Update the state once
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render
  
  // Calculate total incidents
  const totalIncidents = incidentsByTimeRange.reduce((total, incidents) => total + incidents, 0);

  // Define time ranges for display
  const timeRanges: string[] = [
    "0:00-01:59",
    "2:00-03:59",
    "4:00-05:59",
    "6:00-07:59",
    "8:00-09:59",
    "10:00-11:59",
    "12:00-13:59",
    "14:00-15:59",
    "16:00-17:59",
    "18:00-19:59",
    "20:00-21:59",
    "22:00-23:59",
  ];

  // Function to calculate the count of warnings for a specific level within the last 24 hours
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
  

  // Calculate Level 2 warnings count
  const level2Count = calculateWarningsCount("Level 2");

  // React Router hook for navigation
  const navigate = useNavigate();

  // Memoized filtered rows based on the search term
  const filteredRows = useMemo(() => {
    if (!iValue) return rows;

    const list = rows.filter((row) =>
      Object.values(row).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(iValue.toLowerCase())
      )
    );

    return list;
  }, [iValue, rows]);
  // Callback functions to handle pop-up visibility
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

  const openLevelsPopup = useCallback(() => {
    setLevelsPopupOpen(true);
  }, []);

  const closeLevelsPopup = useCallback(() => {
    setLevelsPopupOpen(false);
  }, []);

  // Intersection Observer to animate elements on scroll
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

  // Callback functions to handle logout pop-up
  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsWarningP4Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

    // Callback functions for navigation

  const onWarningsWarningP4Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP4Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP4Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <>
      <div className={styles.warningsPage4}>
        <div className={styles.topbarWarningp4}>
          <div className={styles.header} />
          <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          <img
            className={styles.notificationpopupWarningp4Icon}
            alt=""
            src="/vector41.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profilePopupWarningp4Icon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector17@2x.png"
            onClick={openInfoPagePopup}
          />
        </div>
        <div className={styles.level1HeaderWarningp4}>
          <div className={styles.header1} />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector61.svg"
            onClick={openLevelsPopup}
          />
          <b className={styles.level2}>Level 2</b>
        </div>
        <div className={styles.level1MonthlyWarningp4}>
        <div className={styles.level1MonthlyWarningp4Child1}> 
          <b className={styles.hourBreakdown}>15/11/2023 24 Hour Breakdown:</b>
          <div style={{ fontFamily: 'Inika', fontSize: '16.5px', marginLeft: "10px", marginTop:"60px" }} className="inika-font">
            {timeRanges.map((timeRange, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
                <span >{timeRange}:</span>
                <ProgressBar incidents={incidentsByTimeRange[index]} totalIncidents={totalIncidents} 
                level={2}/>
              </div>
            ))}
          </div>
          </div>
          
        </div>
        <div className={styles.totalwarningp4}>
          <div className={styles.level1MonthlyWarningp4Child} />
          <div className={styles.totalwarningp4Item} />
          <div className={styles.totalOf132Container}>
            <span>
              <span>{`Total of `}</span>
              <span className={styles.span}>
                <b className={styles.b}>{level2Count}</b>
              </span>
            </span>
            <span>
              <span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span>
                <span className={styles.level21}>level-2</span>
                <span>{` warnings: `}</span>
              </span>
            </span>
          </div>
          
        </div>
        <div className={styles.searchBar}>
          <div className={styles.container}>
            <div className={styles.Spacer}>
              <input
                className={styles.LastInput}
                placeholder="Search..."
                value={iValue}
                onChange={(e) => setIValue(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.scrollWarningp2} data-animate-on-scroll>
        <div className={styles.Table}>
          <div className={styles.TableHeader}>
            {columns.filter((column) => column.key !== 'level') // Exclude the "level" column from the header
      .map((column) => (

              <div key={column.key} className={styles.TableColumn}>
                {column.label}
              </div>
            ))}
          </div>
          <div className={styles.TableBody}>
            {filteredRows
              .filter((row) => row.level === 'Level 2') // Filter rows with Level 3
              .map((row) => (
                <div key={row.key} className={styles.TableRow}>
                  {columns.filter((column) => column.key !== 'level') // Exclude the "level" column from the cells
            .map((column) => (
                    <div key={column.key} className={styles.TableCell}>
                      {row[column.key as keyof Row]}
                    </div>
                  ))}
                </div>
              ))}
          </div>

        </div>
      
          </div>
        
        <div className={styles.allelementssidebarWarningp4}>
          <div className={styles.sidebarWarningp4} />
          <button className={styles.logoutWarningp4} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group5@2x.png" />
            <div className={styles.logoutWarningp4Child} />
          </button>
          <button
            className={styles.statisticsWarningp4}
            onClick={onStatisticsWarningP4Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/group6@2x.png" />
          </button>
          <div className={styles.allelementssidebarWarningp4Child} />
          <button
            className={styles.warningsWarningp41}
            onClick={onWarningsWarningP4Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img
              className={styles.vectorIcon2}
              alt=""
              src="/vector21@2x.png"
            />
          </button>
          <button
            className={styles.mapsWarningp4}
            onClick={onMapsWarningP4Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/vector22@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector23@2x.png" />
            <img className={styles.vectorIcon5} alt="" src="/vector24@2x.png" />
          </button>
          <button
            className={styles.homeWarningp4}
            onClick={onHomeWarningP4Click}
          >
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
      {isLevelsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLevelsPopup}
        >
          <Levels onClose={closeLevelsPopup} />
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

export default WarningsPage4;
