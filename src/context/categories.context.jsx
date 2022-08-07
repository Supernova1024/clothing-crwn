import { createContext, useState, useEffect } from "react";

// From the db - firestore
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// temporary data to test
// import PRODUCTS from '../shopdata.json';
import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoiresProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // Create docs on firestore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        async function getCategoriesMap() { 
            const categoryMap = await getCategoriesAndDocuments();

            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    });

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
}