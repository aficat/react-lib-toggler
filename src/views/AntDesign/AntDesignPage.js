import React from "react";
import 'antd/dist/antd.css';
import { Button, Typography } from 'antd';

const { Title } = Typography;

export default function AntDesignPage() {
  //   const [data, setdata] = useState(null);
  // useEffect(() => {
  // fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  // .then((res) => res.json())
  // .then((json) => {
  // setdata(json);
  // });
  // }, [data]);
  return (
    <div>
      <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
      <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    </div>
  );
}
