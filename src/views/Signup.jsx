import { Col, Row, Input, Button, Form, Select, Checkbox } from "antd";
import React from "react";
import theme from "theme";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuthContext from "hooks/useAuthContext";

const { Option } = Select;

const cities = [
  "Popayán",
  "Medellin",
  "Cali",
  "Bogota",
  "Pasto",
  "Villavicencio",
];

const Signup = () => {
  const [form] = Form.useForm();
  const [state] = useAuthContext();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
      default:
        break;
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
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
        // width: window.innerWidth,
      }}
    >
      <Col
        span={24}
        style={{
          position: "relative",
          height: "25px",
          padding: "0",
          margin: "0",
        }}
      >
        <div
          onClick={() => console.log("clicked")}
          style={{
            margin: "15px 0 0 15px",
            width: "fit-content",
          }}
        >
          <Link to="/">
            <BsArrowLeftSquare
              style={{
                position: "absolute",
                color: "white",
                fontSize: "2.5rem",
              }}
            />
          </Link>
        </div>
      </Col>
      <Col
        span={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "30px",
          marginBottom: "2.5rem",
        }}
      >
        <div>
          <h1
            style={{
              color: theme.colors.primary,
              margin: "0",
            }}
          >
            Nueva Cuenta
          </h1>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          //   onFinish={}
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
            style={{
              margin: "0",
            }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={{
              margin: "0",
            }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="city" label="Ciudad" rules={[{ required: true }]}>
            <Select
              placeholder="Choose your city"
              onChange={onGenderChange}
              allowClear
            >
              {cities.map((city) => (
                <Option value={city} key={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            // wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox
              style={{
                color: theme.colors.primary,
              }}
            >
              Soy gestor cultural
            </Checkbox>
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

export default Signup;
