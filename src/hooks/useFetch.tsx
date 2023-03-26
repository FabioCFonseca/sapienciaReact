import {db} from '../config/config';
import { collection, getDocs } from 'firebase/firestore';

interface ArticleObj {
  id: string,
  author: string;
  description: string;
  text: string;
  title: string;
}

const useFetch = async() => {
  const collectionRef  = collection(db, 'artigos');
    
  try{
    const fbData = await getDocs(collectionRef) 
    const data = fbData.docs.map((doc) => ({...doc.data()} as ArticleObj)) 
    return data  
  } catch (error) {
      console.log('Data base fetch error' + error)
    }      
} 

export default useFetch



