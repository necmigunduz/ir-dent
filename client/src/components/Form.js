import React from 'react';
import { useForm } from 'react-hook-form';
import { bookCategories } from './categoryFilter';
import { createBook } from '../_actions/books';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormBook(props) {
    const { filter, changeFilter } = props;
    const { register, handleSubmit,reset } = useForm();
    const select = bookCategories.map((bookCategory) => 
        <option key={bookCategory}>{bookCategory}</option>
    );
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        changeFilter(e.target.value)
    };

    const onSubmit = (data) => {
        console.log(data);
        dispatch(createBook(data));
        reset();
    }
    return (
        <>
            <h1 className='mt-2 fw-bold'>Book Addition Form</h1>
            <Form  className='w-75 mx-auto border p-5 bg-light' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Enter book name: </Form.Label>
                    <Form.Control
                        type='text'
                        name='name'
                        placeholder='Book Name'
                        {...register('name', {required: true})}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter book publisher: </Form.Label>
                    <Form.Control
                        type='text'
                        name='publisher'
                        placeholder='Book Publisher'
                        {...register('publisher', {required: true})}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select book category: </Form.Label>
                    <Form.Select 
                        className='select' 
                        name='category'
                        onChange={(e) => handleFilterChange(e)} 
                        value={filter}
                        {...register('category', {required: true})}
                    >
                        {select}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter price: </Form.Label>
                    <Form.Control
                        type='number'
                        name='price'
                        placeholder='Book Price'
                        {...register('price', {required: true})}
                    />
                </Form.Group>
                <Button className='mt-2 w-100' type='submit'>Add Book</Button>
                <span><small>All entries are required to record a new book!</small></span>
            </Form>
        </>
    )
}

export default FormBook;