import React from 'react';

const LogEntryForm = () => {
  return (
    <form className='entry-form'>
      <label for='title'>Title</label>
      <input type='text' name='title' id='title' required></input>
      <label for='comments'>Comments</label>
      <textarea name='comments' id='comments' rows='3'></textarea>
      <label for='description'>Description</label>
      <textarea name='description' id='description' rows='3'></textarea>
      <label for='image'>Image</label>
      <input type='text' name='image' id='image'></input>
      <label for='visitDate'>Visit Date</label>
      <input type='date' name='visitDate' id='visitDate'></input>
      <button>Create Entry</button>
    </form>
  );
};

export default LogEntryForm;
