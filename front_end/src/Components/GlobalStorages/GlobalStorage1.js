import {createContext, useEffect, useState} from "react";

let initialState = {
    UserData: {}
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, setstate] = useState(initialState);
    const getData = () => {

    }
    console.log("GlobalStorage1 Running.........")
    useEffect(() => getData(), [])
    return (
        <GlobalContext.Provider value={{ UserData: state.UserData }}>
            {children}
        </GlobalContext.Provider>
    )
}