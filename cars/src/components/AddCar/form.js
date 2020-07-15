import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { editCar } from "../../redux/actions/carsActions";

const Form = (props) => {
  const [car] = props.cars.filter((item) => item.id == props.id);
  const { editModel, editCompany, editPrice, editDescription, editMode } =
    props.id != null
      ? {
          editModel: car.modelName,
          editCompany: car.company,
          editPrice: car.price,
          editDescription: car.description,
          editMode: true,
        }
      : {
          editModel: "",
          editCompany: "",
          editPrice: "",
          editDescription: "",
          editMode: false,
        };

  const [modelName, setModelName] = useState(editModel);
  const [company, setCompany] = useState(editCompany);
  const [price, setPrice] = useState(editPrice);
  const [description, setDescription] = useState(editDescription);
  const [pageView, setPageView] = useState("form");
  console.log(editMode);
  const elementToBeRender =
    pageView === "form" ? (
      <form className={"p-5 mb-2"}>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            id="model"
            type="text"
            defaultValue={modelName}
            className="form-control"
            onChange={(event) => setModelName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            defaultValue={props.id != null ? car.company : ""}
            className="form-control"
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            defaultValue={props.id != null ? car.price : ""}
            className="form-control"
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            defaultValue={props.id != null ? car.description : ""}
            className="form-control"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <a
            onClick={() => {
              editMode
                ? props.onEdit({
                    id: props.id,
                    modelName,
                    company,
                    price,
                    description,
                  })
                : props.onAddCar({ modelName, company, price, description });

              setPageView("redirect");
            }}
            className="form-control bg-secondary text-light text-center"
          >
            Submit
          </a>
        </div>
      </form>
    ) : pageView === "redirect" ? (
      <Redirect to={"/"} />
    ) : (
      <div></div>
    );

  return elementToBeRender;
};

const mapStateToProps = (state) => ({
  cars: state.cars,
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (car) => dispatch(editCar(car)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
