import React, { useState } from "react";
import Slider from "simple-react-slider-v1";

function App() {
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("30vw");
  const [controlsNumber, setControlsNumber] = useState(5);
  const [auto, setAuto] = useState(true);

  const buttonStyle = {
    backgroundColor: "transparent",
    padding: ".5rem",
    marginRight: ".5rem",
    width: "100px",
    borderRadius: "4px",
    borderColor: "blue",
    borderWidth: "1px",
    "&:hover": {
      backgroundColor: "red",
    },
  };
  return (
    <>
      <div
        style={{
          height: "30vw",
          display: "flex",
          justifyContent: "center",
          padding: "0",
          margin: "2rem",
        }}
      >
        <Slider auto={auto} width={width} height={height}>
          {Array(controlsNumber)
            .fill(controlsNumber)
            .map((_, index) => {
              return (
                <div
                  style={{
                    width: "100%",
                    backgroundColor: index % 2 === 0 ? "red" : "blue",
                  }}
                ></div>
              );
            })}
        </Slider>
      </div>
      <div
        style={{
          margin: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <button style={buttonStyle} onClick={() => setWidth("100%")}>
            width 100%{" "}
          </button>
          <button style={buttonStyle} onClick={() => setWidth("50vw")}>
            width 50vw{" "}
          </button>
          <button style={buttonStyle} onClick={() => setWidth("200px")}>
            width 200px{" "}
          </button>
          <button style={buttonStyle} onClick={() => setWidth("500px")}>
            width 500px{" "}
          </button>
        </div>
        <hr />
        <div>
          <button style={buttonStyle} onClick={() => setHeight("100px")}>
            height 100px{" "}
          </button>
          <button style={buttonStyle} onClick={() => setHeight("40vh")}>
            height 40vh{" "}
          </button>
          <button style={buttonStyle} onClick={() => setHeight("30vw")}>
            height 30vw{" "}
          </button>
        </div>
        <hr />
        <div>
          <button style={buttonStyle} onClick={() => setControlsNumber(10)}>
            10 items{" "}
          </button>
          <button style={buttonStyle} onClick={() => setControlsNumber(20)}>
            20 items{" "}
          </button>
          <button style={buttonStyle} onClick={() => setControlsNumber(40)}>
            40 items{" "}
          </button>
        </div>
        <hr />

        <label>
          <input
            style={{ width: "1rem", height: "1rem" }}
            checked={auto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.checked) {
                setAuto(true);
              } else {
                setAuto(false);
              }
            }}
            type="checkbox"
          />
          <em
            style={{
              fontSize: "24px",
              marginLeft: "1rem",
              color: auto ? "green" : "",
            }}
          >
            Set auto scroll
          </em>
        </label>
      </div>
    </>
  );
}
export default App;
