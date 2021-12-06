import React, { useState } from "react";
import { Col, Row, Input, Button, Form, Select, Checkbox } from "antd";
import theme from "theme";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuthContext from "hooks/useAuthContext";
import useContentFeedContext from "hooks/useContentFeedContext";

const { Option } = Select;

const cities = [
  "Popayán",
  "Medellin",
  "Cali",
  "Bogota",
  "Pasto",
  "Villavicencio",
];

const CitySelector = ({ children }) => {
  const [form] = Form.useForm();
  // const [state] = useAuthContext();
  const [contentFeedState, dispatch] = useContentFeedContext();
  const [hasSelectedCity, setHasSelectedCity] = useState(false);

  const onCityChange = (value) => {
    form.setFieldsValue({ city: value });
    dispatch({
      type: "SET_SERVICE_ZONE",
      payload: value,
    });
  };

  const formSubmitHandler = (values) => {
    setHasSelectedCity(true);
  };

  const onReset = () => {
    form.resetFields();
  };
  if (contentFeedState.serviceZone) {
    return children;
  }

  return (
    <Row
      style={{
        height: window.innerHeight,
      }}
    >
      <Col
        span={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            ¿En que ciudad te encuentras?
          </h1>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={formSubmitHandler}
          //   onFinishFailed={}
          autoComplete="off"
          style={{
            color: "white",
          }}
        >
          <Form.Item name="city" label="">
            <Select
              placeholder="Selecciona tu ciudad"
              onChange={onCityChange}
              allowClear
            >
              {cities.map((city) => (
                <Option value={city} key={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Continuar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default CitySelector;
