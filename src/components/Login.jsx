import { Col, Row, Input, Button, Form } from "antd";
import React from "react";
import theme from "theme";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { LANDING_SECTIONS } from "views/Landing";

const Login = ({ changeSection }) => {
  const navigate = useNavigate();

  const formSubmit = () => {
    console.log("here");
    navigate("/home");
  };
  return (
    <Row
      style={{
        background:
          "linear-gradient(180deg, rgba(255,159,28,1) 10%, rgba(255,0,228,1) 100%)",
        height: window.innerHeight,
        overflow: "hidden",
        position: "fixed",
        overscrollBehavior: "contain",
      }}
    >
      <Col
        span={24}
        style={{
          position: "relative",
          height: "50px",
          padding: "0",
          margin: "0",
        }}
      >
        <div
          onClick={() => changeSection(LANDING_SECTIONS.MAIN)}
          style={{
            margin: "15px 0 0 15px",
            width: "fit-content",
          }}
        >
          <BsArrowLeftSquare
            style={{
              position: "absolute",
              color: "white",
              fontSize: "2.5rem",
            }}
          />
        </div>
      </Col>
      <Col
        span={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "30px",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1
            style={{
              color: theme.colors.primary,
            }}
          >
            App Name
          </h1>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={formSubmit}
          //   onFinishFailed={}
          autoComplete="off"
          style={{
            color: "white",
          }}
        >
          <Form.Item
            label="Nombre de usuario"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
