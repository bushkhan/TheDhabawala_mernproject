import { useState } from "react";
// import './App.css';
import { FaDollarSign } from "react-icons/fa";

const colors = {
    white: "#ffffff",
    orange:"#ff5200",
    
};



function Dollar() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const dollar = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
  
      <div style={styles.dollars}>
        {dollar.map((_, index) => {
          return (
            <FaDollarSign
              key={index}
              size={20}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.white}
              style={{
                marginRight: 1,
                cursor: "pointer",
                
              }}
            />
          )
        })}
      </div>
            
   
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  dollars: {
    display: "flex",
    flexDirection: "row",
    marginLeft:20,
    marginTop:10,
  },
  

};




export default Dollar;