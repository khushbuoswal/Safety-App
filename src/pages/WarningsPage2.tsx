// Import necessary components and hooks from React and other files
import { FunctionComponent, useState, useCallback, useEffect, useMemo } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import Levels from "../components/Levels";
import Logout from "../components/Logout";
import InfoPage from "../components/InfoPage";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage2.module.css";
import { columns, rows } from "./data";
import ProgressBar from "./FrequencyTable";

// Define the structure of a row
interface Row {
  key: string;
  street: string;
  camera: string;
  time: string;
  // Add other properties as needed
}

// Define the prop types for WarningsPage2
type WarningsPage2Type = {
  onClose?: () => void;
};

// Define the WarningsPage2 functional component
const WarningsPage2: FunctionComponent<WarningsPage2Type> = ({ onClose }) => {
  // State variables for managing popups
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isLevelsPopupOpen, setLevelsPopupOpen] = useState(false);
  const [isLevelsPopup1Open, setLevelsPopup1Open] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);

  // State variable for storing incidents by time range
  const [incidentsByTimeRange, setIncidentsByTimeRange] = useState<number[]>(Array(12).fill(0));
   
  // Initial incidents data for testing
  const initialIncidentsData = [
    { level: 2, startHour: 9, startMinute: 30 },
    { level: 3, startHour: 10, startMinute: 29 },
    { level: 3, startHour: 4, startMinute: 0 },
    { level: 3, startHour: 10, startMinute: 28 },
    { level: 3, startHour: 10, startMinute: 28 },
    { level: 3, startHour: 5, startMinute: 59 },
    { level: 3, startHour: 4, startMinute: 0 },
    { level: 3, startHour: 4, startMinute: 0 },
    // Add more data as needed
  ];
 
  // Effect hook to calculate incidents based on initial data after the initial render
  useEffect(() => {
    // Calculate incidents based on the initial data after the initial render
    const newIncidents = Array(12).fill(0); // Initialize new incidents array

    initialIncidentsData.forEach((data) => {
      const { level, startHour, startMinute } = data;
      const totalMinutes = startHour * 60 + startMinute;
      const hourIndex = Math.floor(totalMinutes / 120); // 2-hour time range

      // Only increment if the incident is of level 3
      if (level === 3) {
        newIncidents[hourIndex]++;
      }
    });

    setIncidentsByTimeRange(newIncidents); // Update the state once
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

   // Calculate total incidents based on time range
  const totalIncidents = incidentsByTimeRange.reduce((total, incidents) => total + incidents, 0);
  
  // Time ranges for displaying the incidents
  const timeRanges: string[] = [
    "00:00-1:59",
    "02:00-3:59",
    "04:00-5:59",
    "06:00-7:59",
    "08:00-9:59",
    "10:00-11:59",
    "12:00-13:59",
    "14:00-15:59",
    "16:00-17:59",
    "18:00-19:59",
    "20:00-21:59",
    "22:00-23:59",
  ];

   // State variable for the search input value
  const [inputValue, setInputValue] = useState('');

  // Function to calculate warnings count based on level
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
  
  // Calculate the count of level 3 warnings
  const level3Count = calculateWarningsCount("Level 3");


  // Memoized frequency data based on time
  const timeFrequency = useMemo(() => {
    const frequencyMap: Record<string, number> = {};
  
    rows.forEach((row) => {
      const time = row.time;
  
      const hour = parseInt(time.split(":")[0], 10);
      const displayHour = (hour + 3) % 24; // Ensure the hour is within 24 hours
  
      // Determine the end hour
      const endHour = (displayHour + 2) % 24;
  
      // Create a 3-hour time range
      const timeRange = `${displayHour}:00 - ${endHour}:59`;
  
      frequencyMap[timeRange] = (frequencyMap[timeRange] || 0) + 1;
    });
  
    return frequencyMap;
  }, []);
  
  
  
  // React Router hook for navigation
  const navigate = useNavigate();
  // Memoized filtered rows based on search input
  const filteredRows = useMemo(() => {
    if (!inputValue) return rows;

    const list = rows.filter((row) =>
      Object.values(row).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(inputValue.toLowerCase())
      )
    );

    return list;
  }, [inputValue, rows]);
  
  // Callback functions for opening and closing popups
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

  const openLevelsPopup = useCallback(() => {
    setLevelsPopupOpen(true);
  }, []);

  const closeLevelsPopup = useCallback(() => {
    setLevelsPopupOpen(false);
  }, []);

  const openLevelsPopup1 = useCallback(() => {
    setLevelsPopup1Open(true);
  }, []);

  const closeLevelsPopup1 = useCallback(() => {
    setLevelsPopup1Open(false);
  }, []);

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

  const onStatisticsWarningP2Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsWarningP2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP2Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  // JSX structure for rendering the component
  return (
    <>
<div className={styles.warningsPage2}>
  <div className={styles.level3MonthlyWarningp2}>
    <div className={styles.level3MonthlyWarningp2Child1}>
      <b className={styles.hourBreakdown}>15/11/2023 24 Hour Breakdown:</b>
      <div style={{ fontFamily: 'Inika', fontSize: '16.5px', marginLeft: "10px", marginBottom: '-30px' }} className="inika-font">
        <div>
          {timeRanges.map((timeRange, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
              <span >{timeRange}:</span>
              <ProgressBar incidents={incidentsByTimeRange[index]} totalIncidents={totalIncidents} 
              level={3}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>



        
 
      
    
        <div className={styles.topbarWaringp2}>
          <div className={styles.header} />
          <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          <img
            className={styles.noticifcationpopupWarningp2Icon}
            alt=""
            src="/vector41.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profilepopupWarningp2Icon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
        </div>
    
        <div className={styles.level3HeaderWarningp2}>
          <div className={styles.header1} />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector51.svg"
            onClick={openLevelsPopup}
          />
          
          <b
            className={styles.level3}
            onClick={openLevelsPopup1}
          >{`Level 3 `}</b>
        </div>
        <div className={styles.totalwarningp2}>
        
          <div className={styles.level3MonthlyWarningp2Child} />
          <div className={styles.totalwarningp2Item} />
          <div className={styles.totalOf132Container}>
            <span>
              <span>{`Total of `}</span>
              <span className={styles.span}>
                <b className={styles.b}>{level3Count}</b>
              </span>
            </span>
            <span>
              <span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span>
                <span className={styles.level31}>level-3</span>
                <span>{` warnings: `}</span>
              </span>
            </span>
          
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.container}>
            <div className={styles.Spacer}>
              <input
                className={styles.sInput}
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
              .filter((row) => row.level === 'Level 3') // Filter rows with Level 3
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
     
        <div className={styles.allelementssidebarWarningp2}>
          <div className={styles.sidebarWarningp2} />
          <button className={styles.logoutWarningp2} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group5@2x.png" />
            <div className={styles.logoutWarningp2Child} />
          </button>
          <button
            className={styles.statisticsWarningp2}
            onClick={onStatisticsWarningP2Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/group6@2x.png" />
          </button>
          <div className={styles.allelementssidebarWarningp2Child} />
          <button
            className={styles.warningsWarningp21}
            onClick={onWarningsWarningP2Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img
              className={styles.vectorIcon1}
              alt=""
              src="/vector21@2x.png"
            />
          </button>
          <button
            className={styles.mapsWarningp2}
            onClick={onMapsWarningP2Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/vector22@2x.png" />
            <img className={styles.vectorIcon3} alt="" src="/vector23@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector24@2x.png" />
          </button>
          <button
            className={styles.homeWarningp2}
            onClick={onHomeWarningP2Click}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon5} alt="" src="/vector25@2x.png" />
          </button>
        </div>
      
        <img
          className={styles.vectorIcon6}
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
      {isLevelsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLevelsPopup}
        >
          <Levels onClose={closeLevelsPopup} />
        </PortalPopup>
      )}
      {isLevelsPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLevelsPopup1}
        >
          <Levels onClose={closeLevelsPopup1} />
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

// Export the component
export default WarningsPage2;
