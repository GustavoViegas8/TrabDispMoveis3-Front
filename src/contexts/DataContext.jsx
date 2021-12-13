import { createContext } from "react"

export const DataContext = createContext([])

export const DataContextProvider = ({children, cardData, setCardData, user, setUser, getCardData}) => {
    return(
        <DataContext.Provider value={{cardData, setCardData, user, setUser, getCardData}}>
            {children}
        </DataContext.Provider>
    )
}