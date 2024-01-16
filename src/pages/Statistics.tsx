import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Roads from "../components/Roads";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./Statistics.module.css";
import{data, datam} from "./data"


type StatisticsType = {
  onClose?: () => void;
};


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

const Statistics: FunctionComponent<StatisticsType> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isRoadsPopupOpen, setRoadsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState<Date | null>(new Date());
  
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] = useState<Date | null>(new Date());

  const [frameDateTimePicker2Value, setFrameDateTimePicker2Value] = useState<Date | null>(new Date());

  
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

  const openRoadsPopup = useCallback(() => {
    setRoadsPopupOpen(true);
  }, []);

  const closeRoadsPopup = useCallback(() => {
    setRoadsPopupOpen(false);
  }, []);

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

  const onStatisticsReportIncidentsClick = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsStatisticsClick = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsStatisticsClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeReportIncidentsClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
   
  };
  const formatDate1 = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
   
  };
  const formatDate2 = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
   
  };
  const handleDateChange = (newValue: Date | null) => {
    // Perform actions with the new date value
    console.log(newValue);

    // Update the state
    setFrameDateTimePickerValue(newValue);
    
  };
  const handleDateChange1 = (newValue: Date | null) => {
    // Perform actions with the new date value
    console.log(newValue);

    // Update the state
    setFrameDateTimePicker1Value(newValue);
    
  };
  const handleDateChange2 = (newValue: Date | null) => {
    // Perform actions with the new date value
    console.log(newValue);

    // Update the state
    setFrameDateTimePicker2Value(newValue);
    
  };

  
const defaultFilteredData = data.filter((item) => item.street === 'Thomas St');

// Filter data based on the selected date
const filteredData = frameDateTimePickerValue 
? data.filter((item) => {
    const selectedDate = formatDate(frameDateTimePickerValue);
    const itemDate = item.date; // Keep the date as a string from your data
    return itemDate === selectedDate && item.street === 'Thomas St';
  })
  : defaultFilteredData;
const filteredData1 = frameDateTimePicker1Value 
? datam.filter((item) => {
    const selectedDate = formatDate1(frameDateTimePicker1Value);
    const itemDate = item.date; // Keep the date as a string from your data
    return itemDate === selectedDate && item.street === 'Thomas St';
  })
: datam;
const filteredData2 = frameDateTimePicker2Value 
? datam.filter((item) => {
    const selectedDate = formatDate2(frameDateTimePicker2Value);
    const itemDate = item.date; // Keep the date as a string from your data
    return itemDate === selectedDate && item.street === 'Thomas St';
  })
: datam;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.statistics}>
          <div className={styles.topBarReportincidents}>
            <div className={styles.hearder} />
            <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
            <img
              className={styles.notificationpopupReportincideIcon}
              alt=""
              src="/vector41.svg"
              onClick={openNotificationPopUp}
            />
            <div className={styles.profilepopReportincidents}>
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
          <div className={styles.headerReportincidents}>
            <div className={styles.headerReportincidentsChild} />
            <b className={styles.street}>{`Street: `}</b>
            <b className={styles.thomasSt}>Thomas St</b>
            <img
              className={styles.vectorIcon3}
              alt=""
              src="/vector101.svg"
              onClick={openRoadsPopup}
            />
          </div>
          <div className={styles.reportBoxReportincidence} />
          <div className={styles.staristicsreportReportinciden}>
            <div className={styles.staristicsreportReportincidenChild} />
            <b className={styles.statisticsReport}>Statistics Report:</b>
          </div>
          <div className={styles.scrollReportincidents} data-animate-on-scroll>
          <div className={styles.dataContainer}>
    {filteredData.length === 0 ? (
      <p>No data found for the selected date</p>
    ) : (
      <div className={styles.gridContainer}>
        <div className={styles.header1}>
          <p>Level</p>
          <p>Street</p>
          <p>Camera</p>
          <p>Date</p>
          <p>Day</p>
          <p>Time</p>
          <p>Factors</p>
        </div>
        {filteredData.map((row, index) => (
          <div key={index} className={styles.row}>
            <p style={{ color: getColorForLevel(row.level) }}>{row.level}</p>
            <p>{row.street}</p>
            <p>{row.camera}</p>
            <p>{row.date}</p>
            <p>{row.day}</p>
            <p>{row.time}</p>
            <p>{row.factors}</p>
          </div>
        ))}
      </div>
    )}
  </div>
          </div>
          <div className={styles.allelementssidebarReportInci}>
            <div className={styles.sidebarReportIncidents} />
            <button
              className={styles.logoutReportIncidents}
              onClick={openLogoutPopup}
            >
              <div className={styles.logOut}>Log Out</div>
              <img className={styles.groupIcon} alt="" src="/group12@2x.png" />
              <div className={styles.logoutReportIncidentsChild} />
            </button>
            <div className={styles.allelementssidebarReportInciChild} />
            <button
              className={styles.statisticsReportIncidents}
              onClick={onStatisticsReportIncidentsClick}
            >
              <button className={styles.statisticsWrapper}>
                <div className={styles.statistics1}>Statistics</div>
              </button>
              <img
                className={styles.imageStatisticsIcon}
                alt=""
                src="/image-statistics@2x.png"
              />
            </button>
            <button
              className={styles.warningsStatistics}
              onClick={onWarningsStatisticsClick}
            >
              <button className={styles.warningsWrapper}>
                <div className={styles.warnings}>Warnings</div>
              </button>
              <img
                className={styles.vectorIcon4}
                alt=""
                src="/vector47@2x.png"
              />
            </button>
            <button
              className={styles.mapsStatistics}
              onClick={onMapsStatisticsClick}
            >
              <button className={styles.mapsWrapper}>
                <div className={styles.maps}>Maps</div>
              </button>
              <img
                className={styles.vectorIcon5}
                alt=""
                src="/vector48@2x.png"
              />
              <img
                className={styles.vectorIcon6}
                alt=""
                src="/vector49@2x.png"
              />
              <img
                className={styles.vectorIcon7}
                alt=""
                src="/vector50@2x.png"
              />
            </button>
            <button
              className={styles.homeReportIncidents}
              onClick={onHomeReportIncidentsClick}
            >
              <div className={styles.home}>Home</div>
              <img
                className={styles.homeImageStatisticsIcon}
                alt=""
                src="/home-image-statistics@2x.png"
              />
            </button>
          </div>
          <div className={styles.calendarStatistics}>
            <div className={styles.wrapper}>
            <DatePicker
              value={frameDateTimePickerValue}
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
              }}
            />
            </div>
          </div>
          <div className={styles.ratingPast}>
  <div className={styles.ratingsReportincidents}>
    <div className={styles.ratingsReportincidentsChild} />
    <b className={styles.current}>Current</b>

    <div className={styles.calendarStatistics1}>
      <DatePicker
        value={frameDateTimePicker1Value}
        onChange={(newValue) => {
          // Ensure that newValue is a Date object
          if (newValue instanceof Date) {
            setFrameDateTimePicker1Value(newValue);
          }
        }}
        slotProps={{
          textField: {
            variant: "standard",
            size: "medium",
            color: "primary",
          },
        }}
      />
    </div>

    {filteredData1.length === 0 ? (
      <div className={styles.l}>
        <p>No data found for the selected date</p>
      </div>
    ) : (
      <>
        {filteredData1.map((row) => (
          
          <div key={row.date} className={styles.current1}>
            <h1>Frequencies</h1>
            <p>{row.People}</p>
            <p>{row.Subtances}</p>
            <p>{row.Violence}</p>
            <p>{row.Weapons}</p>
            <p>{row.Lighting}</p>
            <p>{row.Maintaince}</p>
          </div>
          
        ))}

        {/* Place the span here */}
        <h2>Factors</h2>

        <div className={styles.pedestrians}>People:</div>
        <div className={styles.substances}>Substances:</div>
        <div className={styles.weapons}>Weapons:</div>
        <div className={styles.lighting}>Lighting:</div>
        <div className={styles.violence}>Violence:</div>
        <div className={styles.maintenance}>Maintenance:</div>
      </>
    )}
  </div>
</div>

          <div className={styles.ratingPast1}>
              <div className={styles.ratingsReportincidentsItem} />
              
            <div className={styles.calendarStatistics2}>
            <b className={styles.currentT}>History</b>
              <div className={styles.wrapper}>
                <DatePicker
                  value={frameDateTimePicker2Value}
                  onChange={(newValue: any) => {
                    setFrameDateTimePicker2Value(newValue);
                  }}
                  slotProps={{
                    textField: {
                      variant: "standard",
                      size: "medium",
                      color: "primary",
                    },
                  }}
                  
                />
              </div>
              {filteredData2.length === 0 ? (
              <div className={styles.e}>
                <p>No data found for the selected date</p>
              </div>
            ) : (
                <>
                  {filteredData2.map((row) => (
                    <div key={row.date} className={styles.current3}>
                      <h4>Frequencies</h4>
                      <p>{row.People}</p>
                      <p>{row.Subtances}</p>
                      <p>{row.Violence}</p>
                      <p>{row.Weapons}</p>
                      <p>{row.Lighting}</p>
                      <p>{row.Maintaince}</p>
                    </div>
                  ))}
               
                <h3>Fators</h3>
                <div className={styles.pedestrians2}>People:</div>
                <div className={styles.substances2}>Substances:</div>
                <div className={styles.weapons2}>Weapons:</div>
                <div className={styles.lighting2}>Lighting:</div>
                <div className={styles.violence2}>Violence:</div>
                <div className={styles.maintenance2}>Maintenance:</div>
                </>
               
              )}
            </div>
          </div>
          <b className={styles.compareDates}>Compare dates:</b>
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
        {isRoadsPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeRoadsPopup}
          >
            <Roads onClose={closeRoadsPopup} />
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
    </LocalizationProvider>
  );
};

export default Statistics;
