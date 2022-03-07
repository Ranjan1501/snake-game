import React, { useContext, useState } from "react";
import "antd/dist/antd.css";
import { Input, Space, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FormContext } from "antd/lib/form/context";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function Login() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { handleToken } = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div
      className="loginContainer"
      style={{ width: "100%", margin: "auto", textAlign: "center" }}
    >
      <h2 style={{ color: "#0E185F" }}>
        {" "}
        Play as Guest User With few Details{" "}
      </h2>
      <div>
        <br />
        <div className="login" style={{ width: "100%", margin: "auto" }}>
          <Input
            name="username"
            onChange={handleChange}
            style={{ width: "250px", height: "30px" }}
            size="small"
            placeholder="Enter Your Name"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Space direction="vertical">
            <Input
              type="number"
              name="Mobile No"
              max="10"
              style={{ width: "250px", height: "30px" }}
              placeholder="Enter Mobile Number "
              onChange={handleChange}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>

          <br />
          <br />
          <Button
            type="primary"
            onClick={() => {
              handleToken(Date.now());
              //   navigate("/users");
              navigate(-1);
            }}
          >
            Login{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
