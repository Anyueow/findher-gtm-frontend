import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the CSRF token
const CsrfTokenContext = createContext();

// Create a custom hook to access the CSRF token
export const useCsrfToken = () => useContext(CsrfTokenContext);

// Create a provider component
export const CsrfTokenProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState('');

  // Function to fetch CSRF token and store it
  const getCsrfToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/get-csrf-token', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } else {
        console.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch the CSRF token when the component mounts
  useEffect(() => {
    
   getCsrfToken()
  }, []);

  return (
    <CsrfTokenContext.Provider value={csrfToken}>
      {children}
    </CsrfTokenContext.Provider>
  );
};
