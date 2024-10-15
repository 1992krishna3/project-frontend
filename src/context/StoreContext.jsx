
import { createContext,  useState } from "react";


export const StoreContext = createContext()

const StoreContextProvider = () => {

    
    const url ="http://localhost:3000" // backend URL
    const [token,setToken] = useState(null); 

    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider;


