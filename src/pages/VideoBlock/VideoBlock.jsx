import React from "react";
import "./styles/VideoBlog.scss";
import { video } from "../../assets/videoDb.json";

const VideoBlock = () => {
  return (
    <div className="videoBlog">
      <div className="blok_tittle">
        <h3>Видео-Обзоры</h3>
      </div>

      <div className="videoBlog_container">
        {video.map((video) => {
          return (
            <div key={video.id} className="videoBlog_container_item">
              <iframe
                src={video.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
              />
              <div className="videoBlog_container_item_name">
                <p>{video.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoBlock;
