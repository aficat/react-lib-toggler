import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Avatar,
  Card,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Grow,
  Link,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ListOfMUIComponents() {
  return (
    <Typography variant="h2" component="h2">
      List of MUI Components
    </Typography>
  );
}

function MUITemplates() {
  return (
    <Container maxWidth="sm">
      <form>
        <Grow in>
          <Card>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              style={{ width: "100%" }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grow>
      </form>
    </Container>
  );
}

export default function MaterialUIPage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h1" component="h2">
          Material UI Library
        </Typography>
        <p>Version Number: v5.6.4</p>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Components" {...a11yProps(0)} />
            <Tab label="Template" {...a11yProps(1)} />
            <Tab label="Common Assets" {...a11yProps(2)} />
            <Tab label="Enhancements" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ListOfMUIComponents />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MUITemplates />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Common Assets
        </TabPanel>
        <TabPanel value={value} index={3}>
          Enhancements
        </TabPanel>
      </Container>
    </div>
  );
}
