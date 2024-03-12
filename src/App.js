import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

// App that is ran, contains all of the other possible links
function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
