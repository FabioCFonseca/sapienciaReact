import { useState, useEffect } from 'react';
import {db} from '../config/config';
import { collection, getDocs } from 'firebase/firestore';

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
    const [data, setData] = useState<articleObj[]>([]);
    const infoCollection = collection(db, "artigos");

    useEffect(() => {
        const getInfo = async () => {
            const data = await getDocs(infoCollection) 
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id } as articleObj)))  
        };
        
        getInfo(); 
      }, []);

      console.log(data)

  return {data}
}

export default useFetch

