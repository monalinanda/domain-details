import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearchDollar,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import DomainDetails from "./DomainDetails";
import Modal from "./Modal";

export default function HomeSection() {
  const [posts, setPosts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortDown, setSortDown] = useState(true);
  const [search, setSearch] = useState("");
  const[filteredData,setFilterData]=useState(null);
  //fetch data
  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    let url = "http://localhost:5000/mainlists";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }
//search
  useEffect(() => {
   setFilterData( posts &&
    posts.filter((item) => {
      return item.domain.toLowerCase().includes(search.toLowerCase());
    }))
  }, [search,posts])
  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const toggleSortStorag = () => {
    sortStorage();
  };
  const sortStorage = () => {
    const copy = [...posts];
    if (sortDown) {
      copy.sort((a, b) => a.usedStorage - b.usedStorage);
    } else {
      copy.sort((a, b) => b.usedStorage - a.usedStorage);
    }
    setSortDown(!sortDown);
    setPosts(copy);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="home-container">
      <header>
        <h2>Site Details</h2>
        <div className="add-button" onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus} style={{marginRight:"10px"}}/>
          Add New Site
        </div>
      </header>
      <div className="records">
        <div className="show-records">
          <label htmlFor="quantity">Show: </label>
          <input
            type="number"
            className="quantity"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
            value={posts && posts.length}
          />
        </div>
        <div className="search-records">
          <label htmlFor="quantity">
            <FontAwesomeIcon icon={faSearchDollar} />
          </label>
          <input
            type="text"
            placeholder="Search.."
            onChange={handleChange}
            className="search"
          />
        </div>
      </div>
      <div className="table-header">
        <p>Domain Plan Name</p>
        <div
          onClick={toggleSortStorag}
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <span>Storage</span>
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ marginLeft: "2px", fontSize: "16px" }}
          />
        </div>
        <p>Monthly Vistor</p>
        <p>Domains</p>
        <p>Status</p>
      </div>
      <DomainDetails posts={filteredData} />
      {showModal ? (
        <Modal posts={filteredData} fetchUser={(data) => setPosts(data)} />
      ) : null}
    </div>
  );
}
