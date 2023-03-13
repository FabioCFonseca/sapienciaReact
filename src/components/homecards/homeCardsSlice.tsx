import { createSlice, PayloadAction } from "@reduxjs/toolkit"

 interface data {
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

  interface dataArr {
    cards: data[];
  } 

  const homeCardsSlice = createSlice({
    name: 'homeCardSlice',
    initialState: { cards: [] } as dataArr,
    reducers: {
      setCards(state, action: PayloadAction<data[]> ) {
        state.cards = action.payload
      }
    }
  })

export const allArticles = (state: any) => state.homeCardSlice

export const { setCards } = homeCardsSlice.actions

export default homeCardsSlice.reducer