import React from 'react';
import { useForm } from 'react-hook-form';
import { bookCategories } from './categoryFilter';

function Form(props) {
    const { filter, changeFilter } = props;
    const { register, handleSubmit } = useForm();
    const select = bookCategories.map((bookCategory) => 
        <option key={bookCategory}>{bookCategory}</option>
    );

    const handleFilterChange = (e) => {
        changeFilter(e.target.value)
    };

    const onSubmit = data => console.log(data) 
    return (
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='Book Name'
                        {...register('name', {required: true})}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='publisher'
                        placeholder='Book Publisher'
                        {...register('publisher', {required: true})}
                    />
                </div>
                <div>
                    <select 
                        className='select' 
                        name='category'
                        onChange={(e) => handleFilterChange(e)} 
                        value={filter}
                        {...register('category', {required: true})}
                    >
                        {select}
                    </select>
                </div>
                <div>
                    <input
                        type='number'
                        name='price'
                        placeholder='Book Price'
                        {...register('price', {required: true})}
                    />
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </>
    )
}

export default Form;