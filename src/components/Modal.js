import React, { useState } from "react";
import axios from "axios";

export default function Modal({ fetchUser, posts }) {
  const [show, setShow] = useState(true);
  const [domain, setDomain] = useState("");
  const [subDomain, setSubDomain] = useState([{ name: null }]);
  const [usedStorage, setUsedStorage] = useState();
  const [montlyVisitor, setMontlyVisitor] = useState();
  const [shows, setShows] = useState(true);

  const handleCancel = () => {
    setShows(!shows);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...subDomain];
    list[index][name] = value;
    setSubDomain(list);
  };
  const addForm = () => {
    setSubDomain([...subDomain, { name: null }]);
  };
  
  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
     if(!domain || !usedStorage || !montlyVisitor){
       return ;
     }
    axios
      .post("http://localhost:5000/mainlists", {
        domain: domain,
        usedStorage: usedStorage,
        subdomain: subDomain,
        montlyVisitor: montlyVisitor,
      })
      .then((resp) => {
        console.log(resp.data, "rspons");
      })
      .catch((error) => {
        console.log(error.data);
      });
    setShow(!show);
    fetchUser([
      ...posts,
      {
        domain: domain,
        usedStorage: usedStorage,
        subdomain: subDomain,
        montlyVisitor: montlyVisitor,
      },
    ]);
  };
  return (
    <div id="myModal" className={shows && show ? "modal" : "none"}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setShow(false)}>
            &times;
          </span>
          <h3>Add Domain Details</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-conatiner">
              <div>
                <div className="form-control createStream-form-control">
                  <label htmlFor="domain" className="display-block font-weight">
                    Domain name*
                  </label>
                  <input
                    type="text"
                    name="domain"
                    className="input-field"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  />
                </div>
                <div className="form-control createStream-form-control">
                  <label
                    htmlFor="subdomain"
                    className="display-block font-weight margin-bottom-10"
                  >
                    Subdomain
                  </label>
                  {subDomain.map((item, i) => {
                    return (
                      <div>
                        <input
                          type="text"
                          name="name"
                          className="input-field display-block margin-bottom-10"
                          value={item.name}
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                    );
                  })}
                  <div className="add-subdomain">
                    <button
                      type="button"
                      onClick={addForm}
                      className="button"
                      style={{ border: "1px solid #DEE5FF" }}
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="form-control createStream-form-control">
                  <label
                    htmlFor="storage"
                    className="display-block font-weight"
                  >
                    Storage*
                  </label>
                  <input
                    type="text"
                    name="storage"
                    className="input-field"
                    value={usedStorage}
                    onChange={(e) => setUsedStorage(e.target.value)}
                  />
                </div>
                <div className="form-control createStream-form-control">
                  <label
                    htmlFor="montlyVisitor"
                    className="display-block font-weight"
                  >
                    Monthly Visitor*
                  </label>
                  <input
                    type="text"
                    name="montlyVisitor"
                    className="input-field"
                    value={montlyVisitor}
                    onChange={(e) => setMontlyVisitor(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="button close-button"
              onClick={handleCancel}
            >
              close
            </button>
            <button type="submit" className="button submit-button">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
