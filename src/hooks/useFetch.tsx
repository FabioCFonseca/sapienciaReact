import { useState, useEffect } from 'react';
import {db} from '../config/config';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCards } from '../components/homecards/homeCardsSlice';


const useFetch = () => {
    const dispatch = useDispatch()

    //const [data, setData] = useState<any>([]);
    const infoCollection = collection(db, "artigos");

    useEffect(() => {
        const getInfo = async () => {
            const data = await getDocs(infoCollection) 
            const data2 = data.docs.map((doc) => ({...doc.data()}))

            //Dispatches the state throught the 'setCards' reducer  
            dispatch(setCards(data2)) 
            
            //setData(data.docs.map((doc) => ({...doc.data()}))) 
            console.log(data2) 
        };
        
        getInfo(); 
      }, []);

  
} 

export default useFetch


//interface articleObj {
//     author: string;
//     creationDate: {
//       seconds: number;
//       nanoseconds: number;
//     };
//     description: string;
//     id: string;
//     text: string;
//     title: string;
//   }


