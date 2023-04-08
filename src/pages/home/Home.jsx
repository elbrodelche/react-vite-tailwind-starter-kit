import React, { useContext } from "react";
import { MainContext } from "../../store/context/MainContext.jsx";
import fetchHeroImage from "../../store/api/fetchHeroImage.jsx";
import { useQuery } from "@tanstack/react-query";
import BlockUi from "@availity/block-ui";


const Home = (props) => {
  const context = useContext(MainContext);
  const response = useQuery(["heroImageRepo", 1], fetchHeroImage);


  return (
    <>
      <BlockUi blocking={response.isLoading}>
        <div className="rounded-lg border bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <div className="p-4">
            <div className="grid grid-cols-2 items-center gap-2">
              <div className="mb-8">
                <div className="h-screen w-full flex justify-center items-center text-3xl">
                  Home : {context.helloMessage}
                </div>
              </div>
              <div className="mb-8">
                <img
                  src={response.data?.message}
                  className="h-auto max-w-full rounded-full"
                  alt="" />
              </div>
            </div>
          </div>
        </div>
      </BlockUi>

    </>
  );
};

export default Home;
