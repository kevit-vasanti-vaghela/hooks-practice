import React, { useState, useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  },[number])

  // useMemo - essentially it is the id for caching the value so you don't have to recompute it every single time
// -------------------------------------------------------------------
  // usecase-1:  - wrap flow function to not compute result unneccesary
  // usecase-2:  - for referential equality i.e, array or object reference is exactly the same as we had previous time until something inside change, we would like to change the reference not the updating it every single time the component render.
  const  themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
      width: '400px',
      height: '50px',
      fontSize: '2rem',
      textAlign: 'center',
      padding: '10px',
      marginTop: '5px'
    }
  },[dark])

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
      <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </>
  );
}

function slowFunction(num) {
  console.log('Calling Slow Function')
  for(let i = 0; i <= 10000000000; i++ ){
    return num * 2;
  }
}

export default App;
