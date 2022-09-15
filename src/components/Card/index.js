import React from "react";

function Card() {
  return (
    <>
      <section
        className="container-2xl border-solid rounded-3xl my-12 mx-12 h-96 bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
      >
        <div className="flex flex-col justify-center text-center items-center h-full">
          <h2 className="text-white text-2xl font-medium ">All you can eat</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-3">
            CELERATES
          </h1>
        </div>
      </section>
    </>
  );
}

export default Card;
