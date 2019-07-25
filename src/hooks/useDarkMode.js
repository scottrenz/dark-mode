import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useDarkMode () {
    const [darkValue, setDarkValue] = useLocalStorage('isDark')
    useEffect(() => {
        let bodyTag = document.querySelector('body');
        {darkValue && (
            bodyTag.classList.add('dark-mode')
            )}
            {darkValue && (
                bodyTag.style = 'background-color: purple'
                )}
                {!darkValue && (
                    bodyTag.style = 'background-color: white'
                    )}
                {!darkValue && (
            bodyTag.classList.remove('dark-mode')
        )}
            }, [darkValue]);
            return [darkValue,setDarkValue]
  }
  export default useDarkMode;
