import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		input: '',
	},
	reducers: {
		changeInput: (state, action) => {
			state.input = action.payload
		},
	},
})

export default searchSlice.reducer
export const { changeInput } = searchSlice.actions
