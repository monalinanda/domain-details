import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function DomainDetails({ posts }) {
  return (
    <div className="card">
      {posts &&
        posts.map((item, index) => {
          return (
            <div className="card-continer" key={index}>
              <div className="card-header">
                <div className="domain-name">
                  <p>{item.domain}</p>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <span>Professional plan</span>
                  </p>
                </div>
                <div>
                  <div className="progressbar-container">
                    <div
                      className="progressbar"
                      style={{ width: `${item.usedStorage}px` }}
                    ></div>
                  </div>
                  <p>
                    {item.usedStorage} of{" "}
                    {item.storage ? item.storage : "100gb"}{" "}
                  </p>
                </div>
                <div>
                  <div className="progressbar-container">
                    <div className="progressbar" style={{ width: "40%" }}></div>
                  </div>
                  <p>
                    {" "}
                    {item.montlyVisitor} of{" "}
                    {item.monthlyVisitorCapacity
                      ? item.monthlyVisitorCapacity
                      : "10000"}{" "}
                  </p>
                </div>
                <div>
                  <div className="circle">
                    <p>
                      {item.availableDomains ? item.availableDomains : "1"} /{" "}
                      {item.usedDomains ? item.usedDomains : "10"}
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className={
                      item.status === "Active" ? "active-status" : "inactive"
                    }
                  >
                    {item.status ? item.status : "Inactive"}
                  </div>
                </div>
              </div>
              <div
                className={
                  item && item.subdomain && item.subdomain.length > 0
                    ? "sub-domain-container"
                    : "none"
                }
              >
                {item &&
                  item.subdomain &&
                  item.subdomain.map((subdomain, index) => {
                    return (
                      <div className="sub-domain-details" key={index}>
                        <div className="column column-name">
                          {" "}
                          <p>{subdomain.name}</p>
                        </div>
                        <div style={{display:"flex"}}>
                          <span>
                            {subdomain.usedStorage
                              ? subdomain.usedStorage
                              : "---"}
                          </span>
                          <span
                            className={
                              subdomain.domainTag === "Staging"
                                ? "storage-staging"
                                : "storage-addOn"
                            }
                          ></span>
                        </div>
                        <div style={{display:"flex"}}>
                          <span>
                            {subdomain.montlyVisitor
                              ? subdomain.montlyVisitor
                              : "---"}
                          </span>
                          <span
                            className={
                              subdomain.domainTag === "Staging"
                                ? "storage-staging"
                                : "storage-addOn"
                            }
                          ></span>
                        </div>
                        <div>
                          {" "}
                          <div
                            className={
                              subdomain.domainTag === "Staging"
                                ? "staging"
                                : "addOn"
                            }
                          >
                            {subdomain.domainTag
                              ? subdomain.domainTag
                              : "Staging"}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <div
                            className={
                              subdomain.status === "Active"
                                ? "active-status"
                                : "inactive"
                            }
                          >
                            {subdomain.status ? subdomain.status : "Inactive"}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
