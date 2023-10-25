import React, { useState, useEffect } from "react";
import "../CSS/AddTourForm.css";
import axios from "axios";
import {useForm} from "react-hook-form"
function AddTourForm({ updateTourData }) {
  // const [tour, setTour] = useState({
  //   destination: "",
  //   title: "",
  //   groupSize: "",
  //   price: "",
  //   description: "",
  //   duration: "",
  //   departure: "",
  //   seats: "",
  //   fromMonth: "",
  //   toMonth: "",
  //   departureTime: "",
  //   returnTime: "",
  //   backdeopImage: "",
  //   Galley: "",
  //   priceIncluded: "",
  //   priceNotIncluded: "",
  // });
  // const formData = new FormData();
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setTour({ ...tour, [name]: value });
  // };

  const onSubmit = async (tour) => {
    const formData=new(FormData)

    formData.append("destination", tour.destination);
    formData.append("Title", tour.title);
    formData.append("Description", tour.description);
    formData.append("Duration", tour.duration);
    formData.append("GroupSize", tour.groupSize);
    formData.append("Price", tour.price);
    formData.append("Discount", tour.discount);
    formData.append("backdropImage", tour.image[0]);
    formData.append("Gallery", tour.gallery[0]);

    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data) {
        console.log("Tour created", res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
const{register,handleSubmit,formState:{errors}}=useForm();
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            {...register("destination", { required: true })}
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            {...register("title", { required: true })}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            {...register("description", { required: true })}
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            {...register("duration", { required: true })}
          />
        </label>
        <label>
          GroupSize:
          <input
            type="number"
            name="groupSize"
            {...register("groupSize", { required: true })}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            {...register("price", { required: true })}
          />
        </label>
        <label>
          Discount:
          <input
            type="number"
            name="discount"
            {...register("discoutn", { required: true })}
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            {...register("image", { required: true })}
          />
        </label>

        <label>
          Gallery:
          <input
            type="file"
            name="gallery"
            accept="image/*"
            multiple
            {...register("gallery", { required: true })}
          />
        </label>

        <div className="tour-buttond">
          <button type="submit" >
            Add Tour
          </button>
          <button type="button" onClick={() => window.history.back()}>
            Cancel Tour
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTourForm;
