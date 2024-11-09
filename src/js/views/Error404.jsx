import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/404.css";

export const Error404 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="error-page d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-light display-1">404</h1>
      <h2 className="text-light mb-4">Oops! Page not found.</h2>
      <div
        className="tenor-gif-embed gif-container"
        data-postid="10251428"
        data-share-method="host"
        data-aspect-ratio="1.03734"
        data-width="100%"
      >
      </div>
    </div>
  );
};
