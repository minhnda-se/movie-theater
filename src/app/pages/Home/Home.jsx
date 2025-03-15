import React, { useEffect, useState } from "react";
import "./Home.scss";
import { fetchMovies } from "./services/fetchMoive";
import { fetchComingMoives } from "./services/fetchComingMovie";
import { fetchLocations } from "./services/fetchLocations";
import TrailerModal from "./partials/TrailerModal";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [comingMoives, setComingMovies] = useState([]);
  const [isInShow, setIsInShow] = useState(true);
  const [isModalActive, setIsModalActive] = useState(true);
  const [location, setLocation] = useState({});
  const [selectLocation, setSelectlocation] = useState("");
  useEffect(() => {
    const fetchLocation = async () => {
      const locations = await fetchLocations();
      setLocation(locations);
    };
    fetchLocation();
  }, []);

  // Fetch movies when a location is selected
  useEffect(() => {
    const fetchMovieData = async () => {
      if (selectLocation.length > 0) {
        const moviesData = await fetchMovies(selectLocation);
        const comingMoviesData = await fetchComingMoives(selectLocation);
        setMovies(moviesData);
        setComingMovies(comingMoviesData);
      }
    };
    fetchMovieData();
  }, [selectLocation]);

  const handleInShowClick = () => {
    setIsInShow(!isInShow);
  };
  const handleSelectLocation = (id) => {
    setIsModalActive(false);
    setSelectlocation(id);
  };

  return (
    <>
      <div className={`home_modal ${isModalActive ? "active" : "inactive"}`}>
        <div className="home_modal_container">
          {Object.keys(location).map((key) => (
            <button
              key={key}
              onClick={() => {
                handleSelectLocation(key);
              }}
            >
              {location[key].name}
            </button>
          ))}
        </div>
      </div>
      <div className="home">
        <div className="home_banner"></div>
        <div className="area">
          <div className="home_title">
            <h2>PHIM</h2>
            <button
              className={isInShow ? "btn_active" : ""}
              onClick={handleInShowClick}
            >
              Dang chieu
            </button>
            <button
              className={isInShow ? "" : "btn_active"}
              onClick={handleInShowClick}
            >
              Sap chieu
            </button>
          </div>
          {isInShow ? (
            <TrailerModal movies={movies} />
          ) : (
            <div>Coming soon...</div>
          )}
        </div>
        <button className="btn_viewmore">Xem them &#62;</button>
      </div>
    </>
  );
}
