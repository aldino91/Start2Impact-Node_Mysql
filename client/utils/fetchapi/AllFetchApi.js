import axios from "axios";
import { toast } from "react-toastify";

export const deleteReport = async (id, router, setLoading) => {
  try {
    const urlDelete = `${process.env.NEXT_PUBLIC_URL_DELETE_API + id}`;
    await setLoading(true);
    await axios.delete(urlDelete);
    toast.success("I dati sono stati cancellati con successo!");
    await setLoading(false);
    router.back();
  } catch (error) {
    toast.error("non é stato possibile cancellarlo");
    router.back();
    console.log(error);
  }
};

export const fetchIdGet = async (id, setData) => {
  try {
    const urlGet = `${process.env.NEXT_PUBLIC_URL_GET_ID_API + id}`;
    const resp = await axios.get(urlGet);
    return setData(resp.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchGetReport = async (id, setData) => {
  try {
    const urlGet = `${process.env.NEXT_PUBLIC_URL_GET_ID_API + id}`;
    const resp = await axios.get(urlGet);
    return setData(resp.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCityGet = async (setData) => {
  try {
    const urlGet = `${process.env.NEXT_PUBLIC_URL_GET_API}`;
    const resp = await axios.get(urlGet);
    setData(resp.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpdate = async (e, id, formData, router, setLoading) => {
  try {
    const urlUpdate = `${process.env.NEXT_PUBLIC_URL_UPDATE_API + id}`;
    await setLoading(true);
    await axios.put(urlUpdate, formData);
    await toast.success("I dati sono stati aggiornati");
    await setLoading(false);
    router.back();
    e.target.reset();
  } catch (error) {
    toast.error("C'é stato un problema nell'aggiornamento");
    router.back();
    console.log(error);
  }
};

export const fetchDataCity = async (
  id,
  setName,
  setCity,
  setComment,
  setTemp
) => {
  try {
    const urlGet = `${process.env.NEXT_PUBLIC_URL_GET_ID_API + id}`;
    const resp = await axios.get(urlGet);
    setName(resp.data[0].name);
    setCity(resp.data[0].city);
    setComment(resp.data[0].comment);
    setTemp(resp.data[0].temp);
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (e, formData, setLoading) => {
  try {
    await setLoading(true);
    const urlPost = `${process.env.NEXT_PUBLIC_URL_POST_API}`;
    await axios.post(urlPost, formData);
    toast.success("i dati sono stati salvati");
    await setLoading(false);
    e.target.reset();
  } catch (error) {
    toast.error("c'é un problema");
    console.log(error);
  }
};
