import { useState } from "react";

// This checkes for a key in local storage. If one is found; the associated value is returned. If not; a new key-value pair is created
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      // if the 'key' being passed in is already associated with a value currently in the local storage
      return JSON.parse(window.localStorage.getItem(key)); // return us the value
    } // getItem and setItem are built in methods that come from... somewhere ??

    window.localStorage.setItem(key, JSON.stringify(initialValue)); //
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

