import React from "react"; //, { useState }
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";

export default function BootstrapPage() {
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
      <Card body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}
