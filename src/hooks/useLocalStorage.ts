import { useState, useEffect } from 'react';
import {DefaultSettings} from "../config";

export const useLocalStorage = (
    key: string,
    defaultValue: DefaultSettings
): [
    DefaultSettings,
    (newValue: DefaultSettings) => void
] => {
  const [value, setValue] = useState<DefaultSettings>(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue || ''));
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: DefaultSettings) => {
    setValue(() => {
      const result =  newValue;

      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
