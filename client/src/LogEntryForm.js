import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from './API';

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      console.log(created);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='entry-form'>
      {error ? <h3 className='error'>{error}</h3> : null}
      <label htmlFor='apiPassword'>API Password</label>
      <input
        type='password'
        name='apiPassword'
        id='apiPassword'
        required
        ref={register}
      ></input>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        name='title'
        id='title'
        required
        ref={register}
      ></input>
      <label htmlFor='comments'>Comments</label>
      <textarea
        name='comments'
        id='comments'
        rows='3'
        ref={register}
      ></textarea>
      <label htmlFor='description'>Description</label>
      <textarea
        name='description'
        id='description'
        rows='3'
        ref={register}
      ></textarea>
      <label htmlFor='image'>Image</label>
      <input type='text' name='image' id='image' ref={register}></input>
      <label htmlFor='visitDate'>Visit Date</label>
      <input
        type='date'
        name='visitDate'
        id='visitDate'
        required
        ref={register}
      ></input>
      <button disabled={loading}>
        {loading ? 'Loading...' : 'Create Entry'}
      </button>
    </form>
  );
};

export default LogEntryForm;
