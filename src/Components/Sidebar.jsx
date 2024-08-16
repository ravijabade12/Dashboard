import React from "react";
import "./Sidebar.css"; // You can add styles here

const Sidebar = ({
  widgetName,
  widgetText,
  setWidgetName,
  setWidgetText,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2>Add Widget</h2>

        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          required
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          required
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button type="submit" onClick={onConfirm}>
          Confirm
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Sidebar;
