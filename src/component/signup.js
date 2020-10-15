import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import image from "../images/workingwomen2.png";
import Api from "../sevice/api";
import { Button, Modal, Form, Input, notification, Divider } from "antd";

const CollectionCreateForm = ({
  visible,
  counter,
  onCreate,
  onCancel,
  FormValues,
}) => {
  const [form] = Form.useForm();

  const next = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const GetPhoneNumForm = (
    <Form
      style={{ padding: "15px" }}
      form={form}
      layout="vertical"
      name="form_in_modal"
      // initialValues={{
      //   modifier: "public",
      // }}
    >
      <Form.Item
        name="Phone"
        label="Phone No."
        rules={[
          {
            required: true,
            message: "Please input your phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );

  const varifyPhoneForm = "varifyPhoneForm";
  const getEmailForm = "getEmailForm";
  const varifyEmailForm = "varifyEmailForm";
  const userInfoForm = "userInfoForm";
  const resendOtpForm = "resendOtpForm";
  const resendTokenForm = "resendTokenForm";
  const referralCodeForm = "referralCodeForm";
  const logInForm = "logInForm";
  // {counter === 9 && logOutForm}

  return (
    <Modal
      visible={visible}
      counter={counter}
      footer={null}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      style={{ top: 100 }}
      width={500}
      title={null}
      closable={false}
    >
      <img
        className="responsive"
        height={200}
        width={450}
        alt="image"
        src={image}
      />
      <Divider />

      {counter === 0 && GetPhoneNumForm}
      {counter === 1 && varifyPhoneForm}
      {counter === 2 && getEmailForm}
      {counter === 3 && varifyEmailForm}
      {counter === 4 && userInfoForm}
      {counter === 5 && resendOtpForm}
      {counter === 6 && resendTokenForm}
      {counter === 7 && referralCodeForm}
      {counter === 8 && logInForm}
      {/* {counter === 9 && logOutForm} */}

      <Divider />

      <Button onClick={onCancel} disabled={counter === 0 ? true : false}>
        Back
      </Button>
      <Button onClick={next} type={"primary"} style={{ float: "right" }}>
        Next
      </Button>
    </Modal>
  );
};

const ModelView = (props) => {
  const [values, setvalues] = useState({});
  const [counter, setCounter] = useState(0);
  const [referral, setReferral] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  const [AUTH_TOKEN, setAUTH_TOKEN] = useState("");
  const varifyPhoneAPI = (values) => {
    var params = {
      phoneNumber: values.Phone,
    };

    Api.getPhone(params)
      .then((response) => {
        console.log(response);
        console.log(response.data.success);

        if (response.data.success === true) {
          console.log(response.data.success);

          if (counter > 7) {
            setCounter(0);
            props.setCounter(0);
          } else {
            var increseCount = counter + 1;
            setCounter(increseCount);
          }

          notification["success"]({
            placement: "bottomRight",
            message: response.data.message,
          });
        } else {
          notification["error"]({
            placement: "bottomRight",
            duration: 0,

            message: response.data.message,
          });
        }
        console.log(params);
      })

      .catch((error) => {
        notification["error"]({
          placement: "bottomRight",
          duration: 0,
          message: "Invalid or incorrect parameters.",
        });
      });
  };
  const getEmailAPI = (values) => {};
  const varifyEmailAPI = (values) => {};
  const userInfoAPI = (values) => {};
  const resendOtpAPI = (values) => {};
  const resendTokenAPI = (values) => {};
  const referralCodeAPI = (values) => {};
  const logInAPI = (values) => {};

  const onCreate = (values) => {
    setvalues(values);
    if (counter === 0) {
      console.log("Received values of form: ", counter, values);
      varifyPhoneAPI(values);
    } else {
      if (counter > 7) {
        props.setCounter(8);
      } else {
        var increseCount = counter + 1;
        setCounter(increseCount);
      }
    }
  };

  return (
    <div>
      <CollectionCreateForm
        visible={true}
        counter={counter}
        onCreate={onCreate}
        FormValues={values}
        onCancel={() => {
          setCounter(counter > 0 ? counter - 1 : 0);
        }}
      />
    </div>
  );
};

export default ModelView;
