import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        book_title: 'Book Title',
        isbn: 'Isbn',
        author_name: 'Author Name',
        book_length: 'Book Length',
        book_type: 'Book Type',
    },
    reducers: {
        chooseBookTitle: (state, action) => { state.book_title = action.payload},
        chooseBookIsbn: (state, action) => { state.isbn = action.payload},
        chooseAuthorName: (state, action) => { state.author_name = action.payload},
        chooseBookLength: (state, action) => { state.book_length = action.payload},
        chooseBookType: (state, action) => { state.book_type = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBookTitle, chooseBookIsbn, chooseAuthorName, chooseBookLength, chooseBookType } = rootSlice.actions;