import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteCar, updateCar, delCar } from "../../redux/actions/carsActions";
import { removeFromCart, addToCart } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    backgroundColor: "#343a40",
    color: "#ffffff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.car.modelName}
        </Typography>
        <Typography className={classes.title} gutterBottom>
          Company: {props.car.company}
        </Typography>
        <Typography className={classes.pos}>
          Price: {props.car.price}
        </Typography>
        <Typography variant="body2" component="p">
          {props.car.description}
        </Typography>
      </CardContent>
      <CardActions>
        {props.userRole === "admin" ? (
          <Grid container spacing={4} justify={"center"}>
            <Grid item>
              <Link to={"/edit-car/" + props.car.id}>
                <Button variant="contained" color="primary" size="small">
                  Edit
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                onClick={() => props.handleDelete(props.car.id)}
                variant="contained"
                color="secondary"
                size="small"
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        ) : props.userRole === "customer" ? (
          <Button
            onClick={() => handleUpdateUserInfo(props, true)}
            variant="contained"
            color="primary"
            size="small"
          >
            Add to Cart
          </Button>
        ) : (
          <Button
            onClick={() => handleUpdateUserInfo(props, false)}
            variant="contained"
            color="secondary"
            size="small"
          >
            Remove from Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const handleUpdateUserInfo = (props, addingToCart) => {
  if (addingToCart) {
    const {
      user,
      car,
      handleAddToCart,
      handleDelCar,
      handleUpdateCarInfo,
    } = props;
    const updatedCar = { ...car, user_id: user.id };
    const updatedUser = { ...user, ownedCars: [...user.ownedCars, updatedCar] };
    handleAddToCart(updatedUser);
    handleDelCar(car);
    handleUpdateCarInfo(updatedCar);
  } else {
    const {
      user,
      car,
      handleRemoveFromCart,
      handleDelCar,
      handleUpdateCarInfo,
    } = props;
    const updatedUser = {
      ...user,
      ownedCars: user.ownedCars.filter((item) => item.id !== car.id),
    };
    handleRemoveFromCart(updatedUser);
    handleDelCar(car);
    handleUpdateCarInfo({ ...car, user_id: 0 });
  }
};

const mapStateToProps = (state) => ({
  user: state.authUserInfo.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleDelete: (id) => dispatch(deleteCar(id)),
  handleDelCar: (car) => dispatch(delCar(car)),
  handleAddToCart: (updatedUser) => dispatch(addToCart(updatedUser)),
  handleRemoveFromCart: (updatedUser) => dispatch(removeFromCart(updatedUser)),
  handleUpdateCarInfo: (updatedCar) => dispatch(updateCar(updatedCar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCard);
