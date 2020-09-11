import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxDisplay from './components/BoxDisplay';

const App = props => {

  const [box, setBox] = useState([
    { color: "red", dimension: 200},
    { color: "blue", dimension: 200},
    { color: "purple", dimension: 200},
  ])

  const handleAddBox = (newBox) => {
    setBox(oldBox => [...oldBox, newBox]);
  }

  return (
    <div className="container">
      <div className="row">
        <BoxForm handleAddBox={handleAddBox} />
      </div>
      <div className="row d-flex justify-content-between flex-wrap">
        {
          box.map((b, i) => {
            return <BoxDisplay
              color={b.color}
              dimension={parseInt(b.dimension)}
              key={i}
              idx={i}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;
