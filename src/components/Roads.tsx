import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Roads.module.css";

type RoadsType = {
  onClose?: () => void;
};

const Roads: FunctionComponent<RoadsType> = ({ onClose }) => {
  return (
    <div className={styles.roads}>
      <b className={styles.roads1}>Roads</b>
      <Button
        className={styles.level1Levels}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./QueenSt"
      >
        Queen St
      </Button>
      <Button
        className={styles.level1Levels1}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./Broadway"
      >
        Broadway
      </Button>
      <Button
        className={styles.level1Levels2}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./MountainSt"
      >
        Mountain St
      </Button>
      <Button
        className={styles.level1Levels3}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./JonesSt"
      >
        Jones St
      </Button>
      <Button
        className={styles.level1Levels4}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./UltimoRd"
      >
        Ultimo Rd
      </Button>
      <Button
        className={styles.level1Levels5}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./HarrisSt"
      >
        Harris St
      </Button>
      <Button
        className={styles.level1Levels6}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./TheGoodsLn"
      >
        The Goods Ln
      </Button>
      <Button
        className={styles.level1Levels7}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./AbercrombieSt" 
      >
        Abercrombie St
      </Button>
      <Button
        className={styles.level2Levels}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
        href="./QuaySt"
      >
        Quay St
      </Button>
      <Button
        className={styles.level3Levels}
        color="success"
        variant="contained"
        href="./report-incidents"
        sx={{ width: 208, height: 49 }}
      >
        Thomas St
      </Button>
      <img
        className={styles.closebuttonLevelsIcon}
        alt=""
        src="/vector18.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default Roads;
