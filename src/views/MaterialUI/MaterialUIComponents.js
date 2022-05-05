import React from "react"; //, { useState }
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
    Avatar,
    Card,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Grow,
    Link,
    TextField,
    Typography 
} from "@mui/material";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";


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
    <div>
      <CssBaseline />
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
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
      </div>
  );
};
