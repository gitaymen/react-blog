import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=`}>
              <img src={Edit} alt="" />
            </Link>
            <Link to={`/write?delete=`}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
          eaque!
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          impedit delectus non reprehenderit aperiam ratione, aspernatur tempore
          doloribus officia ducimus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro unde accusamus adipisci provident cupiditate
          placeat ex facere quisquam expedita totam.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
