import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">The Doctor For You</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
