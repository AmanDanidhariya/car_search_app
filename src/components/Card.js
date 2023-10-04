import React from "react";
import data from "../assets/carData";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Card = () => {
  //read state from store
  const carData = useSelector((state) => state.car.carData);
  const searchQuery = useSelector((state) => state.car.searchQuery);

  const filteredCars = carData.filter((car) =>
    car.carName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="flex justify-center flex-wrap">
        {searchQuery.length > 0 ? (
          <>
            {filteredCars.map((car, i) => {
              return (
                <div
                  key={i}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 h-[300px] bg-white rounded-lg p-2"
                >
                  <figure>
                    <img
                      src={car.imgUrl}
                      alt={car.carName}
                      className=" bg-[whiteSmoke] rounded cover"
                    />
                  </figure>
                  <div className="car_details">
                    <div className="flex justify-between">
                      <p className="text-xl font-semibold	">{car.carName}</p>
                      <p className=" border border-dashed border-sky-700 rounded-full m-2 px-2">
                        {car.model}
                      </p>
                    </div>
                    <div className="flex justify-around pb-4 border-b border-gray-300">
                      <p className="flex leading-2 items-center text-sm">
                        <span className="text-blue-500 mr-1">
                          <BsSpeedometer2 />
                        </span>
                        {car.speed}/1-litre
                      </p>
                      <p className="flex leading-2 items-center text-sm">
                        <span className="text-blue-500 mr-1">
                          <PiSteeringWheelDuotone />
                        </span>
                        {car.automatic}
                      </p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-medium">
                        <span className="text-xl font-semibold">
                          ${car.price}
                        </span>{" "}
                        / month
                      </p>
                      <div className="flex items-center">
                        <span className="text-blue-500 mx-2 bg-emerald-200 p-1 rounded-lg">
                          <AiOutlineHeart />
                        </span>
                        <button className="text-white bg-blue-500 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 hover:text-blue-500">
                          Rent now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {carData.map((car, i) => {
              return (
                <div
                  key={i}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 h-[300px] bg-white rounded-lg p-2"
                >
                  <figure>
                    <img
                      src={car.imgUrl}
                      alt={car.carName}
                      className=" bg-[whiteSmoke] rounded cover"
                    />
                  </figure>
                  <div className="car_details">
                    <div className="flex justify-between">
                      <p className="text-xl font-semibold	">{car.carName}</p>
                      <p className=" border border-dashed border-sky-700 rounded-full m-2 px-2">
                        {car.model}
                      </p>
                    </div>
                    <div className="flex justify-around pb-4 border-b border-gray-300">
                      <p className="flex leading-2 items-center text-sm">
                        <span className="text-blue-500 mr-1">
                          <BsSpeedometer2 />
                        </span>
                        {car.speed}/1-litre
                      </p>
                      <p className="flex leading-2 items-center text-sm">
                        <span className="text-blue-500 mr-1">
                          <PiSteeringWheelDuotone />
                        </span>
                        {car.automatic}
                      </p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="text-medium">
                        <span className="text-xl font-semibold">
                          ${car.price}
                        </span>{" "}
                        / month
                      </p>
                      <div className="flex items-center">
                        <span className="text-blue-500 mx-2 bg-emerald-200 p-1 rounded-lg">
                          <AiOutlineHeart />
                        </span>
                        <button className="text-white bg-blue-500 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 hover:text-blue-500">
                          Rent now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Card;
