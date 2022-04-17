import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

const Doctorcard = ({ doctor }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar />}
        title={
          <Typography variant="h6">
            {doctor.title} {doctor.name}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="caption">Sector: {doctor.sector}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">Location: {doctor.location}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">Email: {doctor.email}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">
          Office Hours: {doctor.officehours}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Contact Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Doctorcard;
