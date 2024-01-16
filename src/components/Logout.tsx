import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

type LogoutType = {
  onClose?: () => void;
};

const Logout: FunctionComponent<LogoutType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onYesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logout}>
      <button className={styles.closebuttonLogout} onClick={onClose}>
        <img
          className={styles.vectorIcon}
          alt=""
          src="vector2.svg"
          onClick={onClose}
        />
      </button>
      <Button
        className={styles.yes}
        sx={{ width: 77 }}
        color="error"
        variant="outlined"
        onClick={onYesClick}
      >
        Yes
      </Button>
      <div className={styles.areYouSure}>Are you sure?</div>
    </div>
  );
};

export default Logout;
