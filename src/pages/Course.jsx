import React, { useState } from "react";
import { useParams } from "react-router-dom";

const videos = {
  react: [
    { id: "Ke90Tje7VS0", title: "React Basics" },
    { id: "w7ejDZ8SWv8", title: "React Crash Course" },
    { id: "bMknfKXIFA8", title: "React Hooks Tutorial" },
  ],
  python: [
    { id: "rfscVS0vtbw", title: "Python Full Course" },
    { id: "kqtD5dpn9C8", title: "Python for Beginners" },
  ],
  cad: [
    { id: "01bEb7R-F4s", title: "CAD Basics" },
    { id: "7sJYQK3lK3s", title: "Advanced CAD Tutorial" },
  ],
  solidworks: [
    { id: "x1z7HbE7C8U", title: "SolidWorks Assembly Tutorial" },
    { id: "abcd1234xyz", title: "SolidWorks Advanced Features" },
  ],
  AutoCAD: [
    { id: "x1z7HbE7C8U", title: "SolidWorks Assembly Tutorial" },
    { id: "abcd1234xyz", title: "SolidWorks Advanced Features" },
  ],
  Revit: [
    { id: "x1z7HbE7C8U", title: "SolidWorks Assembly Tutorial" },
    { id: "abcd1234xyz", title: "SolidWorks Advanced Features" },
  ],
};

const Course = () => {
  const { id } = useParams();
  const courseVideos = videos[id] || [];
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="player-page">
      <h2>{id.toUpperCase()} Tutorials</h2>

      {/* Video Player (only shows when one is clicked) */}
      {selectedVideo && (
        <div className="video-player">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="Tutorial Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Grid of Thumbnails */}
      <div className="video-grid">
        {courseVideos.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => setSelectedVideo(video.id)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="video-thumbnail"
            />
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
