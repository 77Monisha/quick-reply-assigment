import React from "react";
import deleteBtn from "../assets/delete.svg";
import warningBtn from "../assets/iicon.svg";
import warningYellow from "../assets/yellowicon.svg";
import crossBtn from "../assets/cross.svg";
import warningRed from "../assets/warning.svg";
import tickBtn from "../assets/tick.svg";

const Toast = ({
  type,
  editText = "Message here",
  divider = true,
  icon = "notification",
  actionButton = true,
  closeAction = true,
}) => {
  const iconMap = {
    notification: warningBtn,
    warning: warningYellow,
    delete: deleteBtn,
    error: warningRed,
    tick: tickBtn,
  };

  const typeMap = {
    default: null,
    notification: (
      <span className="toast-icon">
        <img
          src={iconMap[icon]}
          style={{
            height: "24px",
            width: "24px",
            display: "grid",
            placeItems: "center",
          }}
        />
      </span>
    ),
  };
  const iconType = typeMap[type];

  const showDivider = divider ? (
    <span
      className="divider-icon"
      style={{ height: "24px", width: "1px", backgroundColor: "#424242" }}
    ></span>
  ) : null;

  const showButton = actionButton ? (
    <button
      style={{
        backgroundColor: "#47B647",
        height: "32px",
        width: "52px",
        border: "none",
        color: "white",
        borderRadius: "8px",
      }}
    >
      Button
    </button>
  ) : null;

  const crossAction = closeAction ? (
    <span className="cross-action" style={{ height: "24px", width: "24px" }}>
      <img src={crossBtn} style={{ height: "24px", width: "24px" }} />
    </span>
  ) : null;

  return (
    <div
      style={{
        height: "48px",
        width: "343px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#282829",
        borderRadius: "8px",
        color: "white",
        paddingLeft: "6px",
      }}
    >
      {iconType && (
        <div className="toast-icon" style={{ color: "white" }}>
          {iconType}
        </div>
      )}
      <div
        style={{
          width: "207px",
          height: "24px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginRight: "2px",
        }}
      >
        <p
          style={{
            fontWeight: "400",
            fontSize: "15px",
            fontFamily: "sans-serif",
          }}
        >
          {editText}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          gap: "8px",
          margin: "8px",
        }}
      >
        {showDivider}
        {showButton}
        {crossAction}
      </div>
    </div>
  );
};

export default Toast;
