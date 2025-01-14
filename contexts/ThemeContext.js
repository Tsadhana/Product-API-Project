import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
const [isDark , setIsDark] =useState(JSON.parse(localStorage.getItem('isDarkMode')))

return (
    <ThemeContext.Provider value={[isDark,setIsDark]}>
        {
            children // <Header /> and <Outlet /> is the childern
        }

      {/*   <h1>Hiii</h1> */}
    </ThemeContext.Provider>
)
}