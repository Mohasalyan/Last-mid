import "./blogs.css";
import React, { useState } from "react";
import { info_blog } from "./info_blog";
import ScrollVisibility from "../ScrollVisibility/ScrollVisibility";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, info_blog.length);

  const displayedItems = info_blog.slice(startIndex, endIndex);

  const showMoreButtonVisible = endIndex < info_blog.length;

  const handleShowMore = () => {
    setItemsPerPage(itemsPerPage + 3);
  };

  return (
    <section style={{ margin: "10rem auto" }}>
      <div className="blogs_items_all">
        {displayedItems.map((item, index) => (
          <ScrollVisibility key={index}>
            <NavLink
              className={`blogs_items ${
                showMoreButtonVisible === index ? "selected" : ""
              } ${index % 2 === 1 ? "row-reverse" : ""}`}
              to={`/blog/${item.name_id}`}
            >
              <div className="first-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.brief_description}</p>
                <span className="author-date">
                  <span className="date">{item.date}</span>
                </span>
              </div>
            </NavLink>
          </ScrollVisibility>
        ))}

        {showMoreButtonVisible && (
          <button className="button" onClick={handleShowMore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>

            <div className="button_more">More</div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Blogs;
