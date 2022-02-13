import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCharacter, fetchCharacterById, fetchComicsById } from './marvelAPI';

const initialState = {
    comics: [],
    character: [],
    currentCharacter: null,
    status: 'idle',
};

export const getCharacterAsync = createAsyncThunk(
    'marvel/fetchMarvel',
    async (offset) => {
        const response = await fetchCharacter(offset);
        // The value we return becomes the `fulfilled` action payloadğ
        return response.results;
    }
);

export const getComicsByIdAsync = createAsyncThunk(
    'marvel/fetchComics',
    async (char_id) => {
        const response = await fetchComicsById(char_id);
        // The value we return becomes the `fulfilled` action payloadğ
        return response.results;
    }
);
export const getCharacterByIdAsync = createAsyncThunk(
    'marvel/fetchCharacterById',
    async (char_id) => {
        const response = await fetchCharacterById(char_id);
        // The value we return becomes the `fulfilled` action payloadğ
        return response.results[0];
    }
);

export const marvelSlice = createSlice({
    name: 'marvel',
    initialState,

    reducers: {
        character: (state, action) => {

            let oldcharacters = state.character
            let newCharacters = oldcharacters.concat(action.payload)
            state.character = newCharacters

        },
        comics: (state, action) => {

            state.comics = action.payload
        },

        currentCharacter: (state, action) => {
            state.currentCharacter = action.payload
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(getCharacterAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCharacterAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                let oldcharacters = state.character
                let newCharacters = oldcharacters.concat(action.payload)
                state.character = newCharacters
            })
            .addCase(getComicsByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getComicsByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.comics = action.payload
            })
            .addCase(getCharacterByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCharacterByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.currentCharacter = action.payload
            });
    },
});

export const { character, comics } = marvelSlice.actions;

export const selectCharacter = () => (state) => state.marvel.character;
export const selectComics = () => (state) => state.marvel.comics;
export const selectCurrentCharacter = () => (state) => state.marvel.currentCharacter;
export const selectLoading = () => (state) => state.marvel.status;



export default marvelSlice.reducer;
