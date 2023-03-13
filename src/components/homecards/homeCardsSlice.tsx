import { createSlice, PayloadAction } from "@reduxjs/toolkit"

 interface cardObj {
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

  interface cardArr {
    cards: cardObj[];
  } 

  const homeCardsSlice = createSlice({
    name: 'homeCardSlice',
    initialState: { cards: [] } as cardArr,
    reducers: {
      setCards(state, action: PayloadAction<any> ) {
        state.cards = action.payload
      }
    }
  })

//export const allArticles = (state: cardObj) => state.homeCardSlice

export const { setCards } = homeCardsSlice.actions

export default homeCardsSlice.reducer