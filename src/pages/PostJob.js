import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { postJob } from "../redux/actions/jobActions";

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

function PostJob() {
  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch();
  function onFirstFormFinish(values) {
    setJobInfo(values);
    setActiveTab("1");
  }
  function onFinalFormFinish(values) {
    const finalObj = { ...jobInfo, ...values };
    dispatch(postJob(finalObj));
  }
  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="0" activeKey={activeTab}>
          <TabPane tab="Job Info" key="0">
            <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: true }]}
                    label="Title"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="department"
                    rules={[{ required: true }]}
                    label="Department"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="experience"
                    rules={[{ required: true }]}
                    label="Experience"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryFrom"
                    rules={[{ required: true }]}
                    label="Salary From"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryTo"
                    rules={[{ required: true }]}
                    label="Salary To"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="skillsRequired"
                    rules={[{ required: true }]}
                    label="Skills"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minimumQualification"
                    rules={[{ required: true }]}
                    label="Minimum Qualification"
                  >
                    <Select>
                      <option value="Degree">Degree</option>
                      <option value="Hsc">HSC</option>
                      <option value="Sslc">SSLC</option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="smallDescription"
                    rules={[{ required: true }]}
                    label="Requirements"
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="fullDescription"
                    rules={[{ required: true }]}
                    label="About the Project"
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Company Info" key="1">
            <Form layout="vertical" onFinish={onFinalFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="company"
                    label="Company Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="email"
                    label="Company Email"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="companyDescription"
                    label="Company Description"
                    rules={[{ required: true }]}
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>
              </Row>
              <Button
                onClick={() => {
                  setActiveTab("0");
                }}
              >
                Previous
              </Button>&nbsp;&nbsp;
              <Button htmlType="submit">Post Project</Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default PostJob;
