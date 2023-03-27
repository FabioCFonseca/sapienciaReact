import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getArticles } from './Articles.actions'
import { RootState } from '../store';
import { useAppSelector } from "../hooks/useTypedSelector";
import { useNavigate } from 'react-router-dom'

const ArticlesCards = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const articles = useAppSelector((state: RootState) => state.articles.articles)
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

    return (
      <div className='grid grid-cols-1 pt-5 px-4 md:grid-cols-3 md:gap-3 md:max-w-[1240px] md:mx-auto'>
        {articles!.map(((mapItem: any) => (
          <div key={mapItem.title + mapItem.author}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center border border-indigo-600 font-serif">
            {/* <img src={imageSrc} alt="" className="w-full h-48 object-cover" /> */}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{mapItem.title}</h2>
              <p className="text-gray-700">{mapItem.description}</p>
              <button onClick={() => {
                navigate(`/articles/${mapItem.id}`)}}>Ler Artigo</button>
            </div>
          </div>
        </div>
        )))
  }
      </div>
    )
}

export default ArticlesCards
