import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseBookTitle, chooseBookIsbn, chooseAuthorName, chooseBookLength, chooseBookType } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface BookFormProps {
    id?:string;
    data?:{}
}

interface BookState {
    book_title: string;
    isbn: string;
    author_name: string;
    book_length: string;
    book_type: string;
}

export const BookForm = (props:BookFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<BookState>(state => state.book_title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseBookTitle(data.book_title));
            dispatch(chooseBookIsbn(data.isbn));
            dispatch(chooseAuthorName(data.author_name));
            dispatch(chooseBookLength(data.book_length));
            dispatch(chooseBookType(data.book_type));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="book_title">Book Title</label>
                    <Input {...register('book_title')} name="book_title" placeholder='Book Title'/>
                </div>
                <div>
                    <label htmlFor="isbn">Book Isbn</label>
                    <Input {...register('isbn')} name="isbn" placeholder='Book Isbn'/>
                </div>
                <div>
                    <label htmlFor="author_name">Author Name</label>
                    <Input {...register('author_name')} name="author_name" placeholder='Author Name'/>
                </div>
                <div>
                    <label htmlFor="book_length">Book Length</label>
                    <Input {...register('book_length')} name="book_length" placeholder='Book Length'/>
                </div>
                <div>
                    <label htmlFor="book_type">Book Type</label>
                    <Input {...register('book_type')} name="book_type" placeholder='Book Type'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}