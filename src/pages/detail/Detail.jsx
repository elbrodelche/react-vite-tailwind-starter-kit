import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  return (
    <div className="h-screen w-full flex justify-center items-center text-3xl">
      Details ID: {id}
    </div>
  );
};

export default Detail;
