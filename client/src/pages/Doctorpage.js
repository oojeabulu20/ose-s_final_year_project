import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Doctorcard from "../components/Doctorcard";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  loader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Doctorpage = () => {
  const classes = useStyles();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState([false]);
  let cancel;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `/doctors`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setDoctors(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {loading ? (
          <div className={classes.loader}>
            <CircularProgress size="3rem" thickness={4} />
          </div>
        ) : (
          doctors.map((doctor) => (
            <Grid item key={doctor._id} xs={12} sm={6} md={4} lg={3}>
              <Doctorcard doctor={doctor} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Doctorpage;
