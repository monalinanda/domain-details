import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faServer,
  faChartPie,
  faTicketAlt,
  faUsers,
  faLockOpen,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side-bar-content">
      <img
        className="logo"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="image"
      />
      <p style={{ color: "#fff" }}>john Doe</p>
      <p style={{ color: "#fff" }}>jhon19@gmail.com</p>

      <div className="nav-link">
        <li className="link">
          <span className="link-icon">
            <FontAwesomeIcon icon={faFolder} className="icon" />
            Dashboard
          </span>
        </li>
        <li>
          {" "}
          <NavLink to="/" className="link active-link">
            <span className="link-icon">
              <FontAwesomeIcon icon={faServer} className="icon" />
              Site Details
            </span>
          </NavLink>
        </li>
        <li className="link">
          <span className="link-icon">
            <FontAwesomeIcon icon={faChartPie} className="icon" />
            Migrations
          </span>
        </li>
        <li className="link">
          <span className="link-icon">
            <FontAwesomeIcon icon={faCog} className="icon" />
            Backups
          </span>
        </li>
        <li className="link">
          <span className="link-icon">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            Collaborators
          </span>
        </li>
        <li className="link">
          <span className="link-icon">
            <FontAwesomeIcon icon={faTicketAlt} className="icon" />
            Support Tickets
          </span>
        </li>
        <li className="link">
          <span className="link-icon">
            <FontAwesomeIcon icon={faLockOpen} className="icon" />
            Open New Tickets
          </span>
        </li>
      </div>
    </div>
  );
}
