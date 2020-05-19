import React, { useState } from 'react';

import { Form } from './styles'

const Search = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('text: ', text)
    setText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="Search Users..." value={text} onChange={e => setText(e.target.value)}/>
      <button type="submit">Search</button>
    </Form>
  );
}

export default Search;