import { createSlice, PayloadAction } from "@reduxjs/toolkit"

  interface articleObj {
     id: string,
     author: string;
     description: string;
     text: string;
     title: string;
  }

  interface articleArray {
    cards: articleObj[]
  }

  const initialState: articleArray = {
      cards: []
  }

  

  const homeCardsSlice = createSlice({
    name: 'homeCardSlice',
    initialState,
    reducers: {  
      setCards(state, action: PayloadAction<articleObj[]> ) {
        state.cards = action.payload
      }
    }
  })

export const { setCards } = homeCardsSlice.actions

export default homeCardsSlice.reducer