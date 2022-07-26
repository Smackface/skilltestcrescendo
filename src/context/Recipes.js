import React from 'react'

const RecipesContext = React.createContext({
    recipes: [],
    setRecipes: (recipes) => recipes
})

const RecipesConsumer = RecipesContext.Consumer

const RecipesProvider = (props) => {
    const [recipes, setRecipes] = React.useState([])

    return (
        <RecipesContext.Provider value={{recipes, setRecipes: (recipes) => setRecipes(recipes)}}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export {RecipesContext, RecipesProvider, RecipesConsumer}