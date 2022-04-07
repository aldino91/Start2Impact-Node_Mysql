import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchUpdate, fetchDataCity } from "../../utils/fetchapi/AllFetchApi";

export default function UpdateForm({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [comment, setComment] = useState();
  const [temp, setTemp] = useState();
  const [image, setImage] = useState([]);

  const time = Date.now();

  useEffect(() => {
    fetchDataCity(id, setName, setCity, setComment, setTemp);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("comment", comment);
    formData.append("temp", temp);
    formData.append("time", time);
    formData.append("image", image);
    fetchUpdate(e, id, formData, router, setLoading);
  };

  return (
    <div className="w-full font-mono">
      <form className="w-full mx-auto my-20 lg:w-1/2" onSubmit={handleSubmit}>
        <div className="flex flex-col w-2/3 p-3 mx-auto space-y-4 border-2 border-orange-400 rounded-md shadow-md shadow-slate-400">
          <input
            defaultValue={name}
            placeholder={name}
            type="text"
            name="name"
            className="p-2 border-2 rounded-md border-slate-300"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="text"
            name="city"
            defaultValue={city}
            placeholder={city}
            className="p-2 border-2 rounded-md border-slate-300"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <textarea
            type="text"
            name="comment"
            defaultValue={comment}
            placeholder={comment}
            className="p-2 border-2 rounded-md border-slate-300"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />

          <input
            type="number"
            name="temp"
            defaultValue={temp}
            placeholder={temp}
            className="p-2 border-2 rounded-md border-slate-300"
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
