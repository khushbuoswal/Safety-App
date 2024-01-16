import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.forgotPassword}>
      <button className={styles.topbarForgotPassword}>
        <div className={styles.header} />
        <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
      </button>
      <TextField
        className={styles.inputEmail}
        color="primary"
        label="Email"
        placeholder="Email"
        sx={{ width: 525.8 }}
        variant="outlined"
      />
      <button className={styles.sendLinkButton}>
        <button className={styles.sendLinkButtonInner}>
          <div className={styles.frameChild} />
        </button>
        <div className={styles.sendLink}>Send link</div>
      </button>
      <div className={styles.layout}>
        <b className={styles.forgotPassword1}>Forgot Password</b>
        <img
          className={styles.lineSeperaterIcon}
          alt=""
          src="/line-seperater@2x.png"
        />
      </div>
      <button className={styles.vectorWrapper} onClick={onGroupButtonClick}>
        <img className={styles.vectorIcon} alt="" src="/vector45@2x.png" />
      </button>
    </div>
  );
};

export default ForgotPassword;
