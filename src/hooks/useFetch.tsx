import { useState, useEffect } from 'react';
import {db} from '../config/config';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCards } from '../components/homecards/homeCardsSlice';

interface articleObj {
    author: string;
    creationDate: {
      seconds: number;
      nanoseconds: number;
    };
    description: string;
    id: string;
    text: string;
    title: string;
  }

const useFetch = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState<articleObj[]>([]);
    const infoCollection = collection(db, "artigos");

    useEffect(() => {
        const getInfo = async () => {
            const data = await getDocs(infoCollection) 
            dispatch(setCards(data.docs.map((doc) => ({...doc.data()} as articleObj)))) 
            
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id } as articleObj))) 
             
        };
        
        getInfo(); 
      }, []);

      
      

  return {data}
}

export default useFetch

