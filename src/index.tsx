import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

const Slider: React.FC<{
  auto?: boolean,
  width?: string, 
  height?: string,
  showButtons?: boolean,
  delay?: number, 
  activeButtonColor?: string, 
  children?: React.ReactElement[]
  }>  = ({ auto = true,  width = '100%',height= '100px', delay = 2000, children = [], showButtons = true, activeButtonColor = "green" }): React.ReactElement => {
  const [moveTo, setMoveTo] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (auto){

      const timer = setTimeout(() => {
        if (moveTo < children.length - 1) {
          setMoveTo(moveTo + 1);
        }else{
          setMoveTo(0);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [moveTo, auto, delay, children.length]);

  const root = {
    position:'relative',
    overflow: "hidden",
    width: width,
    height: height
  }  as React.CSSProperties;

  const slideContainer = {
    height: "100%",
    display: "flex",
    width: `${100 * children.length}%`,
    transform: `translateX(${-moveTo * ref?.current?.clientWidth}px)`,
    transition: "1s ease-in-out",
  } as React.CSSProperties;

  const thumbsContainer = {
    display: "flex",
    flexWrap: "wrap",

    alignItems: "center",
    position: "relative",
  } as React.CSSProperties;

  const controlsContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    position: "absolute",
    left: 0,
    bottom: 0,
    flexWrap:'wrap',
  } as React.CSSProperties;

  const controlButton = {
    width: "16px",
    height: "6px",
    margin: "0.2rem",
    color: "white",
    fontSize: "5px",
    textAlign: "center",
  } as React.CSSProperties;
const controllButtonParent = {
  height:'100%',
  display:'flex',
  alignItems:'center',
  cursor: "pointer",
  } as React.CSSProperties

  return (
    <div ref={ref} style={root}>
      <div
      onClick={()=>{
        if (moveTo<1){
          setMoveTo(children.length-1)
        }else{
          setMoveTo(moveTo - 1)
        }
        }}
      style={{
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
        width:'50px',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        color:'white',
        fontSize:'24px',
      }}>&#10094;</div>
      <div 
     onClick={()=>{
      if (moveTo>children.length){
        setMoveTo(0)
        }else{
          setMoveTo(moveTo + 1)
        }
      }}
      style={{
        fontSize:'24px',
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
        width:'50px',
        height:'100%',
        position:'absolute',
        top:0,
        right:0,
        color:'white'}}>&#10095;</div>
    
      <div style={slideContainer}>{children}</div>
      <div style={thumbsContainer}>
       {showButtons && <div style={controlsContainer}>
          {children.map((_, index) => {
            return (
              <div key={index} 
              style={controllButtonParent}
                onClick={() => {
                  setMoveTo(index);
                }}
                >
              <div
                style={{
                  ...controlButton,
                  backgroundColor: moveTo === index ? activeButtonColor : "lightgrey",
                }}
                ></div>
                </div>
            );
          })}
        </div>}
      </div>  
    </div>
  );
}

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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

  export default Slider;

