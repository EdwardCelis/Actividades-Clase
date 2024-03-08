'use client'
import React, { useState, useEffect } from 'react';
import './App.css';

function app() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
  }, [message]);

  const handleClick = () => {
    setMessage("HOLA MUNDO");
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleClick}>Click Aqui!</button>
    </div>
  );
}

export default app;
