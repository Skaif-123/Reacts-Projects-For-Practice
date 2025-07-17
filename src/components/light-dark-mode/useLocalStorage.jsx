import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let temp;
    try {
      temp = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (e) {
      console.log(e);
      temp = defaultValue;
    }

    return temp;
  });


  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(defaultValue))
  }, [key, value]);

  return [value, setValue];
}
