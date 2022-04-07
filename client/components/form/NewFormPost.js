import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { fetchPost } from "../../utils/fetchapi/AllFetchApi";

export default function NewFormPost() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState([]);
  const [temp, setTemp] = useState("");
  const [loading, setLoading] = useState(false);
  const time = Date.now();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("comment", comment);
    formData.append("temp", temp);
    formData.append("time", time);
    formData.append("image", image);

    fetchPost(e, formData, setLoading);
  };

  return (
    <div className="w-full font-mono">
      <form className="w-full mx-auto my-20 lg:w-1/2" onSubmit={handleSubmit}>
        <div className="flex flex-col w-2/3 p-3 mx-auto space-y-4 rounded-md shadow-md shadow-slate-400">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 border-2 rounded-md border-slate-300"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            className="p-2 border-2 rounded-md border-slate-300"
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <textarea
            type="text"
            name="comment"
            placeholder="Your Comment"
            className="p-2 border-2 rounded-md border-slate-300"
            required
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />

          <input
            type="number"
            name="temp"
            placeholder="Temperature"
            className="p-2 border-2 rounded-md border-slate-300"
            required
            onChange={(e) => {
              setTemp(e.target.value);
            }}
          />
          <input
            type="file"
            name="image"
            className="p-2 border-2 rounded-md border-slate-300"
            required
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          <button
            type="submit"
            className="p-2 text-white bg-green-500 rounded-md"
          >
            {!loading ? (
              "Send"
            ) : (
              <ClipLoader color="#ffffff" loading={loading} size={20} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
