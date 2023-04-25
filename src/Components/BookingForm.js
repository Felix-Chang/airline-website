import React, { useEffect, useState } from "react";
import "../Styles/BookingForm.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      direction: "aller-simple",
      departure: "",
      arrival: "",
      a: "",
      de: "",
    },
  });
  const oneDay = 3600 * 1000 * 24;
  const [departure, setDeparture] = useState(Date.now());
  const [arrival, setArrvial] = useState(Date.now() + oneDay);

  const [price, setPrice] = useState("0,00$");

  console.log(watch("direction"));
  const onSubmit = (data) => {
    setPrice("-3892,239 $");
  };

  const handleDeparture = (date) => {
    setValue("departure", date);
  };
  const handleArrival = (date) => {
    setValue("arrival", date);
  };
  return (
    <div>
      <div className="form-title">Trouver un vol</div>
      <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="direction">
          <div className="">
            <label>Sens Unique</label>
            <input
              type="radio"
              name="direction"
              {...register("direction")}
              value={"aller-simple"}
            />
          </div>
          <div className="">
            <label>Aller Retour</label>

            <input
              type="radio"
              name="direction"
              {...register("direction")}
              value={"aller-retour"}
            />
          </div>
        </div>
        <div className="date">
          <label>Départ</label>
          <DatePicker
            selected={departure}
            name="departure"
            onChange={(date) => handleDeparture(date)}
          />
          <label>Arrivée</label>
          <DatePicker
            selected={arrival}
            name="arrival"
            onChange={(date) => handleArrival(date)}
          />
        </div>
        <div className="destination">
          <div className="first-direction">
            <label>De</label>
            <input
              type="text"
              name="de"
              {...register("de", {
                required: true,
              })}
            />
            {errors.de && errors.de.type === "required" && (
              <p className="errorMsg">Aucun point d’origine </p>
            )}
          </div>
          <div className="second-direction">
            <label>À</label>

            <input
              type="text"
              name="a"
              {...register("a", {
                required: true,
              })}
            />
            {errors.a && errors.a.type === "required" && (
              <p className="errorMsg">Aucune destination </p>
            )}
          </div>
        </div>
        <div className="prix">
          <div>
            <button className="submit-btn" type="submit">
              Chercher des vol
            </button>
          </div>
          <div>
            <strong>Prix:</strong> {price}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
