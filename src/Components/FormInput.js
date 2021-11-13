import React, {useState} from 'react';
import { InfoCircleOutlined, UserOutlined,PlayCircleOutlined } from "@ant-design/icons";
import { Input, Tooltip, Checkbox, Button } from "antd";
import { Spin } from "antd";
import { DatePicker, TimePicker, Select, Space,Divider } from "antd";
const { TextArea } = Input;
const { Option } = Select;
function PickerWithType({ type, onChange }) {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}
function FormInput() {
    const [type, setType] = useState("time");
    return (
      <div>
        <div className="InputClass">
          <Input size="large" placeholder="Your Todo.." prefix={<Spin />} />
          <TextArea rows={4} placeholder="Any Description.." />
          <Checkbox>High Priority</Checkbox>
          <Space>
            <Select value={type} onChange={setType}>
              <Option value="time">Time</Option>
            </Select>
            <PickerWithType
              type={type}
              onChange={(value) => console.log(value)}
            />
          </Space>

          <Button type="dashed" danger>
            Add Todo
          </Button>
        </div>

        <Divider orientation="right" style={{ borderColor: "red" }} dashed>
          <h2>
              Your Todos
          </h2>
        </Divider>
      </div>
    );
}

export default FormInput
