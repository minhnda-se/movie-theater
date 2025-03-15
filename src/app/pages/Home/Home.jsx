import React, { useEffect, useState } from "react";
import "./Home.scss";
import { fetchMovies } from "./services/fetchMoive";
import { fetchComingMoives } from "./services/fetchComingMovie";
import { fetchLocations } from "./services/fetchLocations";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [comingMoives, setComingMovies] = useState([]);
  const [isInShow, setIsInShow] = useState(true);
  const [isModalActive, setIsModalActive] = useState(true);
  const [location, setLocation] = useState({});
  const [selectLocation, setSelectlocation] = useState("");
  useEffect(() => {
    const fetchLocation = fetchLocations();
    setLocation(fetchLocation);
  }, []);
  useEffect(() => {
    if (selectLocation.length > 0) {
      const fetchMoive = fetchMovies(selectLocation);
      console.log(fetchMoive);
      const fetchComingMovie = fetchComingMoives(selectLocation);
      setMovies(fetchMoive);
    }
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

          <div className="home_moive">
            {Object.keys(movies).map((key) => (
              <div key={key} className="card">
                <div className="card_img">
                  <img src={movies[key].imagePortrait} alt={movies[key].name} />
                  <div className="card_img_hover">
                    <button>Mua ve</button>
                    <button>Trailer</button>
                  </div>
                </div>
                <h4>{movies[key].name}</h4>
              </div>
            ))}
          </div>
        </div>
        <button className="btn_viewmore">Xem them &#62;</button>
      </div>
    </>
  );
}
