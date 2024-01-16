// Import necessary dependencies and components from React and other files
import { FunctionComponent, useState, useCallback, useEffect, useMemo } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Levels from "../components/Levels";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage3.module.css";
import { columns, rows } from "./data";
import ProgressBar from "./FrequencyTable";


// Define the structure of each row in the data
interface Row {
  key: string;
  street: string;
  camera: string;
  time: string;
  // Add other properties as needed
}

// Define the prop types for the WarningsPage3 component
type WarningsPage3Type = {
  onClose?: () => void;
};

// Define the WarningsPage3 functional component
const WarningsPage3: FunctionComponent<WarningsPage3Type> = ({ onClose }) => {
  // State variables for controlling various pop-ups and storing incidents data
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLevelsPopupOpen, setLevelsPopupOpen] = useState(false);
  const [isLevelsPopup1Open, setLevelsPopup1Open] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [incidentsByTimeRange, setIncidentsByTimeRange] = useState<number[]>(Array(12).fill(0));
  // Initial data for incidents
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

  // Effect to calculate incidents based on initial data after the initial render
  useEffect(() => {
    // Calculate incidents based on the initial data after the initial render
    const newIncidents = Array(12).fill(0); // Initialize new incidents array

    initialIncidentsData.forEach((data) => {
      const { level, startHour, startMinute } = data;
      const totalMinutes = startHour * 60 + startMinute;
      const hourIndex = Math.floor(totalMinutes / 120); // 2-hour time range

      // Only increment if the incident is of level 3
      if (level === 1) {
        newIncidents[hourIndex]++;
      }
    });

    setIncidentsByTimeRange(newIncidents); // Update the state once
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  // Calculate the total number of incidents
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

  const [inputValue, setInputValue] = useState('');
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


  const level1Count = calculateWarningsCount("Level 1");
  // State variable for search input
  const [searchTerm, setSearchTerm] = useState("");

  // React router navigation hook
  const navigate = useNavigate();

  // Filtered rows based on search input
  const filteredRows = useMemo(() => {
    if (!searchTerm) return rows;

    const list = rows.filter((row) =>
      Object.values(row).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    return list;
  }, [searchTerm, rows]);

  
  // Callbacks for opening and closing various pop-ups
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

  const openLevelsPopup1 = useCallback(() => {
    setLevelsPopup1Open(true);
  }, []);

  const closeLevelsPopup1 = useCallback(() => {
    setLevelsPopup1Open(false);
  }, []);

  // Effect for handling scroll animations
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

  const onStatisticsWarningP3Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsWarningP3Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP3Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <>
   
      <div className={styles.warningsPage3}>
        
      <div className={styles.level1MonthlyWarningp4}>
      <div className={styles.level1MonthlyWarningp4Child1}>
      <b className={styles.hourBreakdown}>15/11/2023 24 Hour Breakdown:</b>
      <div style={{ fontFamily: 'Inika', fontSize: '16.5px', marginLeft: "10px", marginTop:"60px" }} className="inika-font">
            {timeRanges.map((timeRange, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
                <span >{timeRange}:</span>
                <ProgressBar incidents={incidentsByTimeRange[index]} totalIncidents={totalIncidents} 
                level={1}/>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className={styles.topbarWarningP3}>
          <div className={styles.header} />
          <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          <img
            className={styles.notificationpopupWarningp3Icon}
            alt=""
            src="/vector41.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profilePopupWarningp3Icon}
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
        <div className={styles.level1HeaderWarningp3}>
          <div className={styles.header1} />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector61.svg"
            onClick={openLevelsPopup}
          />
          <b
            className={styles.level1}
            onClick={openLevelsPopup1}
          >{`Level 1 `}</b>
        </div>
        <div className={styles.totalWarningBox} />
        <div className={styles.totalwarningp3}>
          <div className={styles.totalwarningp3Child} />
          <div className={styles.totalOf132Container}>
            <span>
              <span>{`Total of `}</span>
              <span className={styles.span}>
              
                <b className={styles.b}>{level1Count} </b>
              </span>
            </span>
            <span>
              <span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span>
                <span className={styles.level11}>level-1</span>
                <span>{` warnings: `}</span>
              </span>
            </span>
          </div>
        </div>
        <div className={styles.allelementssidebarWarningp3}>
          <div className={styles.sidebarWarningp3} />
          <button className={styles.logoutWarningp3} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group5@2x.png" />
            <div className={styles.logoutWarningp3Child} />
          </button>
          <button
            className={styles.statisticsWarningp3}
            onClick={onStatisticsWarningP3Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/group6@2x.png" />
          </button>
          <div className={styles.allelementssidebarWarningp3Child} />
          <button
            className={styles.warningsWarningp31}
            onClick={onWarningsWarningP3Click}
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
            className={styles.mapsWarningp3}
            onClick={onMapsWarningP3Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/vector22@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector27@2x.png" />
            <img className={styles.vectorIcon5} alt="" src="/vector24@2x.png" />
          </button>
          <button
            className={styles.homeWarningp3}
            onClick={onHomeWarningP3Click}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/vector28@2x.png" />
          </button>
        </div>
        
     
        <div className={styles.searchBar}>
        <div className={styles.container}>
          <div className={styles.Spacer}>
            <input
            className={styles.searchInput}  // Add a suitable className for styling
            placeholder="Search....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        </div>
        </div>
        <div className={styles.scrollWarningp2} data-animate-on-scroll>
        <div className={styles.TableWrapper}>
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
              .filter((row) => row.level === 'Level 1') // Filter rows with Level 3
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
    </>
  );
};

export default WarningsPage3;
