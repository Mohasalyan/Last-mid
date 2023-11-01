import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { info_blog } from "./../info_blog";
import "./infoBlog.css";
import ScrollVisibility from "../../ScrollVisibility/ScrollVisibility";

const Info_blog = () => {
  const { blogId } = useParams();
  const [randomBlogs, setRandomBlogs] = useState([]);

  const blogInfo = info_blog.find((item) => item.name_id === parseInt(blogId));

  if (blogInfo) {
    const descriptionWithLineBreaks = blogInfo.description
      .split(".")
      .join(".<br><br>");

    useEffect(() => {
      const shuffledArray = info_blog.sort(() => 0.5 - Math.random());
      const selectedBlogs = shuffledArray.slice(0, 2);
      setRandomBlogs(selectedBlogs);
    }, []);

    const updateRandomBlogs = () => {
      const shuffledArray = info_blog.sort(() => 0.5 - Math.random());
      const selectedBlogs = shuffledArray.slice(0, 2);
      setRandomBlogs(selectedBlogs);
    };

    return (
      <>
        <div className="blogInfo">
          <div className="blogInfo_img">
            <img src={blogInfo.image} alt={blogInfo.title} />
          </div>
          <section>
            <div className="blogInfo_date_title">
              <p className="date_p">{blogInfo.date}</p>

              <h1 className="title_h1">{blogInfo.title}</h1>

              <p
                className="blogInfo_description"
                dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }}
              />
            </div>
          </section>
        </div>

        <section className="you_may_also_like">
          <p className="like_p">You may also like</p>

          {randomBlogs.map((item, index) => (
            <ScrollVisibility key={index}>
              <NavLink
                className={`blogs_items ${
                  index % 2 === 1 ? "row-reverse" : ""
                }`}
                to={`/blog/${item.name_id}`}
                onClick={updateRandomBlogs}
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
        </section>
      </>
    );
  } else {
    return <Navigate to="404" />;
  }
};

export default Info_blog;
