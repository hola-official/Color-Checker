import Input from "./Input";
import Squre from "./Squre";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setDarkText] = useState('');
  return (
    <div className="App">
     < Squre
     colorValue={colorValue}
     hexValue={hexValue}
     isDarkText={isDarkText}
     />
     <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setDarkText={setDarkText}/>
    </div>
  );
}

export default App;
