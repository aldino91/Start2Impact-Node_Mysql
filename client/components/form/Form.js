import React from "react";
import UpdateForm from "./UpdateForm.js";
import NewFormPost from "./NewFormPost.js";

export default function Form({ data }) {
  return data ? <UpdateForm data={data} /> : <NewFormPost />;
}
