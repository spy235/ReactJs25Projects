import { useState } from "react";

export default function RandomColor() {

    const [selectedColor,setSelectedColor] = useState(null);
    const [hexOrRgb,setHexOrRgb] = useState(null);

    function genrateRandomColor(){
      if(hexOrRgb==="HEX"){
        let characterSet = "0123456789ABCDEF";
        let hexColorOutput = "";
      
        for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
          hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength)
          );
        }
        hexColorOutput = "#"+hexColorOutput
        setSelectedColor(hexColorOutput)
        console.log(selectedColor)

      }
      else if(hexOrRgb==="RGB"){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setSelectedColor(`rgb(${r},${g},${b})`);
      }
    }

    function randomColorUtility(length) {
      return Math.floor(Math.random() * length);
    }


  return (
    <div
    className="thisisth"
      style={{
        width: "100vw",
        height: "100vh",
        background:`${selectedColor}`,
      }}
    >
      <button onClick={()=>setHexOrRgb("HEX")} >Create HEX Color</button>
      <button onClick={()=>setHexOrRgb("RGB")} >Create RGB Color</button>
      <button
      onClick={genrateRandomColor}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3> {hexOrRgb==='HEX'? "HEX COLOR":"RGB COLOR"}{hexOrRgb===null && "select a color"}</h3>
        <h1>{`${selectedColor}`}</h1>
      </div>
    </div>
  );
}