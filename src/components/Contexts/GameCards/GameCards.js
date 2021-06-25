import React, {createContext, useState} from 'react';

export const categoriesContext = createContext();

function CategoryProvider({children}) {

  const [activeCategories, setCategory] = useState([]);

  return (
    <categoriesContext.Provider value={[activeCategories, setCategory]}>
      {children}
    </categoriesContext.Provider>
  );
}

export default CategoryProvider
