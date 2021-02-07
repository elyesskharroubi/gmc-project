import React from "react";
import { useSelector } from "react-redux";

import "./Alerts.css";

const Alert = () => {
  const alertsState = useSelector((state) => state.alert);

  return (
    alertsState !== null &&
    alertsState.length > 0 &&
    alertsState.map((alert) => (
      <div key={alert.id} className={`alert show alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))
  );
};

export default Alert;
