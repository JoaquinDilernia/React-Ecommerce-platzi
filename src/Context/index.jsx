import { createContext, useState } from "react";

import React from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
return (
    <ShoppingCartContext.Provider value={{count, setCount}}>
        {children}
    </ShoppingCartContext.Provider>
);
};
