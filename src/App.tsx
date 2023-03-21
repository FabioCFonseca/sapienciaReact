import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import useFetch from './hooks/useFetch'

function App() {
  useFetch()
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles/:idurl' element={<Articles />}/>
        {/* <Route path='*' element={<ErrorPage />}/> */}
      </Routes>  
    </>
  );
}

export default App;


