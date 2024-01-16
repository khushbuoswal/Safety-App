import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Levels.module.css";

type LevelsType = {
  onClose?: () => void;
};

const Levels: FunctionComponent<LevelsType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onLevel2LevelsClick = useCallback(() => {
    navigate("/warnings-page-4");
  }, [navigate]);

  return (
    <div className={styles.levels}>
      <b className={styles.levels1}>Levels</b>
      <Button
        className={styles.level1Levels}
        sx={{ width: 208 }}
        color="warning"
        variant="contained"
        href="/warnings-page-3"
      >
        Level 1
      </Button>
      <Button
        className={styles.level2Levels}
        sx={{ width: 208 }}
        color="info"
        variant="contained"
        href="/warnings-page-4"
        onClick={onLevel2LevelsClick}
      >
        Level 2
      </Button>
      <Button
        className={styles.level3Levels}
        sx={{ width: 208 }}
        color="secondary"
        variant="contained"
        href="/warnings-page-2"
      >
        Level 3
      </Button>
      <img
        className={styles.closebuttonLevelsIcon}
        alt=""
        src="/vector3.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default Levels;
