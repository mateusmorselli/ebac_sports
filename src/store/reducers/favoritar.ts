import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      // Verifica se o produto já está na lista de favoritos
      const itemIndex = state.itens.findIndex((p) => p.id === favorito.id)

      if (itemIndex !== -1) {
        // Remove o produto dos favoritos
        state.itens.splice(itemIndex, 1)
      } else {
        // Adiciona o produto aos favoritos
        state.itens.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
