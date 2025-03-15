import React from "react";
import locationJson from "../../../../mock/locations.json";
import cinemasJson from "../../../../mock/cinemas.json";

export const fetchLocations = () => {
  const data = {};
  const locationData = {};
  const cinemasData = {};
  const locationResult = locationJson.data.result.map((location) => {
    return (locationData[location.id] = {
      name: location.name,
    });
  });

  const result = cinemasJson.data.result.map((cinemas) => {
    if (!data[cinemas.cityId]) {
      data[cinemas.cityId] = {
        name: locationData[cinemas.cityId].name,
        cinemas: {},
      };
    }
    data[cinemas.cityId].cinemas[cinemas.id] = {
      name: cinemas.name,
      address: cinemas.address,
      imagePortrait: cinemas.imagePortrait,
    };
  });
  return data;
};
