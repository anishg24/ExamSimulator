import React, {useState} from 'react';
import './App.css';
import View from "./View"

function App() {
  const [view, setView] = useState("info")
  return (
      <View view={view} setView={setView}/>
  );
}

export default App;
