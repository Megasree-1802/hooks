import { useState } from 'react'
// import FocusInput from "./components/FocusInput";
// import PreviousValue from "./components/PreviousValue";
// import Stopwatch from "./components/Stopwatch";
// import WindowSize from "./components/WindowSize";
// import PersistentUsername from "./components/PersistentUsername";
import UserProfile from "./components/UserProfile";


function App() {
  

  return (
        <div>
      <h1 className="text-center mt-4">
        React Hook Playground
      </h1>

      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}
      {/* <Stopwatch /> */}
      {/* <WindowSize/> */}
      {/* <PersistentUsername/> */}
          <UserProfile/>  
    </div>
  )
}

export default App
