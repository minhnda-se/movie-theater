import React, { useState } from "react";
import "./trailermodal/TrailerModal.scss";

export default function TrailerModal(props) {
  const movies = props.movies;
  const [videoUrl, setVideoUrl] = useState(false);
  const handleTrailerClick = (url) => {
    if (url.length > 0) {
      const videoId = url.split("v=")[1];
      setVideoUrl(videoId);
    }
  };
  return (
    <>
      <div className="home_moive">
        {Object.keys(movies).map((key) => (
          <div key={key} className="card">
            <div className="card_img">
              <img src={movies[key].imagePortrait} alt={movies[key].name} />
              <div className="card_img_hover">
                <button>Mua ve</button>
                <button
                  onClick={() => {
                    handleTrailerClick(movies[key].trailer);
                  }}
                >
                  Trailer
                </button>
              </div>
            </div>
            <h4>{movies[key].name}</h4>
          </div>
        ))}
      </div>
      <div
        className={`modal_container ${
          videoUrl.length > 0 ? "active" : "inactive"
        }`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="close_modal_button" onClick={() => setVideoUrl("")}>
          X
        </button>
      </div>
    </>
  );
}
