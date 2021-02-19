import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
export const DataContext = createContext()


export const DataProvider = ({children}) => {
    const initialState = { 
        notify: {}, auth: {}, cart: [], modal: [], orders: [], users: [], categories: []
    }

    const [state, dispatch] = useReducer(reducers, initialState)
    const { cart, auth } = state

    useEffect(() => {
        const fetchCategories = async ()=>{
            let categories = [];
            const response = await fetch('https://fakestoreapi.com/products/categories');
            
            if(response.status !== 404){
                categories = await  response.json();
                dispatch({ 
                    type: "ADD_CATEGORIES",
                    payload: categories
                })
            }
        }
        fetchCategories();
        
    },[])

    useEffect(() => {
        const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'))

        if(__next__cart01__devat) dispatch({ type: 'ADD_CART', payload: __next__cart01__devat })
    }, [])

    useEffect(() => {
        localStorage.setItem('__next__cart01__devat', JSON.stringify(cart))
    }, [cart])

    

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}