import { useEffect } from 'react';
import {db} from '../config/config';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCards } from '../components/homecards/homeCardsSlice';

interface ArticleObj {
  author: string;
  description: string;
  text: string;
  title: string;
}

const useFetch = () => {
  const dispatch = useDispatch()
  const collectionRef  = collection(db, "artigos");
    
  const fetchArticle = async () => {
    try{
      const articleDoc = await getDocs(collectionRef) 
      const article = articleDoc.docs.map((doc) => ({...doc.data()} as ArticleObj))
      dispatch(setCards(article))    
    } catch (error) {
        console.log('Data base fetch error' + error)
    }      
  };

  useEffect(() => {
    fetchArticle();
  }, [collectionRef]);
} 

export default useFetch



