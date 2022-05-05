import React from "react"; //, { useState }
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";

export const MaterialUIComponents = () => {
  //   const [data, setdata] = useState(null);
  // useEffect(() => {
  // fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  // .then((res) => res.json())
  // .then((json) => {
  // setdata(json);
  // });
  // }, [data]);
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      {/* {data.map((item) => (
    <div key={item.id}>{item.title}</div>
    ))} */}
    </>
  );
};
