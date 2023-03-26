import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import { RootState } from './store';
import { useAppSelector } from "./hooks/useTypedSelector";
import { getArticles } from "./articles/Articles.actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const articles = useAppSelector((state: RootState) => state.articles)
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  console.log(articles)

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


