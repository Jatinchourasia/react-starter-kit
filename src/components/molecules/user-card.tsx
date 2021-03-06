import styled from "@emotion/styled-base";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import style from "../../styles/usercard.module.scss";
import { deleteUser } from "../../services/api-services/user.api.service.js";

interface IProps {
  name: string;
  id: string;
}

const UserCard: React.FC<IProps> = ({ name, id }) => {
  return (
    <div className={style.container}>
      <div className="">{name}</div>
      <div className={style.button}>
        <Link to={`/users/${id}`}>
          <Button type="primary">View</Button>
        </Link>

        <Button type="primary" danger>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
