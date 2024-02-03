import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {searchSpots} from "@/services/spots.service";

type DataResult = {
    "hydra:member": any[]
    "hydra:totalItems": number
} | null

type SearchContextType = {
    data: DataResult,
    refresh: () => void
}

const SearchContext = createContext<SearchContextType>({
    data: {
        "hydra:member": [],
        "hydra:totalItems": 0
    },
    refresh: () => {}
})

export const useSearchContext = () => {
    const context = useContext(SearchContext)
    if (context === undefined) {
        throw new Error('useSearchContext must be used within a SearchProvider')
    }
    return context
}

export const SearchProvider = ({children}: {children: ReactNode}) => {
    const [data , setData] = useState<DataResult | null>(null)

    const refresh = () => {
        searchSpots().then((data) => {
            setData(data)
        })
    }

    useEffect(() => {
        refresh()
    },[])

    const values = {
        data,
        refresh
    }

    return (
        <SearchContext.Provider value={values}>
            {children}
        </SearchContext.Provider>
    )
}
