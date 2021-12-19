import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdvice = () => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => {
          setAdvice(res.data.slip.advice);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAdvice();
  }, []);

  return (
    <div id="intro" className="bg-image shadow-2-strong">
      <div>
        <div className="container  align-items-center justify-content-center text-center h-100">
          <div className="text-white">
            <h1 className="pt-5">{advice}</h1>

            <button type="button" className="btn btn-dark btn-rounded">
              Check New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
