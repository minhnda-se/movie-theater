import React, { useEffect, useState } from "react";
import locationJson from "../../../mock/locations.json";
import cinemasJson from "../../../mock/cinemas.json";
import sessionsJson from "../../../mock/sessions.json";
import moviesJson from "../../../mock/movies.json";
import seatsJson from "../../../mock/seats.json";
import "../seat/Seats.scss";
const Seats = () => {
  const [location, setLocation] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [sesisons, setSessions] = useState([]);
  const [seats, setSeats] = useState([]);

  const maxColumn = seatsJson.data.maxColumn + 2;
  const maxRow = seatsJson.data.maxRow + 2;
  useEffect(() => {
    setSeats(seatsJson.data.rows);
    setLocation(locationJson.data.result);
  }, []);
  const handleLocationClick = (locationId) => {
    const result = cinemasJson.data.result.filter((cinemas) => {
      return locationId === cinemas.cityId;
    });
    setCinemas(result);
  };

  const handleCinemasClick = (cinemasId) => {
    const map = new Map();
    const result = sessionsJson.data.result
      .filter((sesisons) => {
        return cinemasId === sesisons.cinema.id;
      })
      .filter((sesisons) => {
        return (
          !map.has(sesisons.movie.id) &&
          map.set(sesisons.movie.id, sesisons.movie)
        );
      });
    const resultObject = Object.fromEntries(map);
    setSessions(result);
    console.log(resultObject);
  };

  return (
    <>
      <div className="container">
        {location.map((location) => (
          <button
            key={location.id}
            onClick={() => {
              handleLocationClick(location.id);
            }}
          >
            {location.name}
          </button>
        ))}
      </div>
      <div className="container">
        {cinemas.map((cinemas) => (
          <button
            key={cinemas.id}
            onClick={() => {
              handleCinemasClick(cinemas.id);
            }}
          >
            {cinemas.name}
          </button>
        ))}
      </div>

      <div className="container">
        {sesisons.map((sesisons) => (
          <button
            key={sesisons.id}
            onClick={() => {
              handleSesssionClick;
            }}
          >
            {sesisons.movie.name}
          </button>
        ))}
      </div>

      <div className="seats_container">
        <div className="box"></div>
        <div
          className="seats_grid_template"
          style={{
            gridTemplateColumns: `repeat(${maxColumn}, calc(99vw/${maxColumn}))`,
            gridTemplateRows: `repeat(${maxRow}, calc(10wh/${maxRow})`,
          }}
        >
          {seats.map((row) => (
            <React.Fragment key={row.name}>
              {console.log(row.name + row.index)}
              <h3
                style={{
                  gridColumn: 0,
                  gridRow: row.index + 1,
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                {row.name}
              </h3>
              {row.seats.map((seat) => (
                <button
                  key={"row.name" + seat.id}
                  style={{ gridColumn: seat.column + 2, gridRow: seat.row + 1 }}
                  className="seat"
                >
                  {seat.id}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Seats;
