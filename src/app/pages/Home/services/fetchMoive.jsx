import { useEffect, version } from "react";
import sessionsJson from "../../../../mock/sessions.json";

export const fetchMovies = (location) => {
  const moives = {};

  const dataResult = sessionsJson.data.result.filter((session) => {
    return session.cinema.cityId === location;
  });
  const result = dataResult.map((session) => {
    if (!moives[session.movie.id]) {
      moives[session.movie.id] = {
        name: session.movie.name,
        age: session.movie.age,
        imagePortrait: session.movie.imagePortrait,
        imageLandscape: session.movie.imageLandscape,
        trailer: session.movie.trailer,
        rate: session.movie.rate,
        cinema: {},
      };
    }
    moives[session.movie.id].cinema[session.cinema.id] = {
      code: session.cinema.code,
      name: session.cinema.name,
      imagePortrait: session.cinema.imagePortrait,
      sessions: {},
    };
    moives[session.movie.id].cinema[session.cinema.id].sessions[session.id] = {
      showDate: session.showDate,
      showTime: session.showTime,
      screenName: session.screenName,
      caption: session.caption,
      version: session.version,
      movieFormat: session.movieFormat,
    };
  });
  console.log(moives);
  return moives;
};
