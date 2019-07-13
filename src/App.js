import React, { useEffect, useState } from 'react';

function App() {

  const [face, setFace] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
    .then(res=> res.json())
    .then((data)=> {
      setFace(data[0].face)
    })
  }, [])
 
  return (
    <div className="App">
      <p>Hello!</p>
      {face}
    </div>
  );
}

export default App;

