import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useTypedSelector';
import { getArticles } from '../articles/Articles.actions';

const Articles = () => {
  const { idurl } = useParams<string>();
  const dispatch = useDispatch();
  const articles = useAppSelector((state: RootState) => state.articles.articles)
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  const article = articles!.find((item) => item.id === idurl);

  return (
    <div className="flex flex-row items-center px-4 pt-3 md:max-w-[1240px] md:mx-auto font-serif">
      {article ? (
        <div key={article.id}>
          <div className="flex justify-center py-3 text-2xl">
            <h1>{article.title}</h1>
          </div>
          <div className="py-3">
            <p>{article.author}</p>
          </div>
          <div className="pb-20">
            <p className="text">{article.text}</p>
          </div>
        </div>
      ):
        (
          <h2 className="flex text-center py-3 text-2xl">Artigo não encontrado</h2>
        )
      }
    </div>
  );
};


export default Articles
