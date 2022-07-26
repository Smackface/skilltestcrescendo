import React from 'react'

const SpecialsContext = React.createContext({
    specials: [],
    setSpecials: (specials) => specials
})

const SpecialsConsumer = SpecialsContext.Consumer

const SpecialsProvider = (props) => {
    const [specials, setSpecials] = React.useState([])

    return (
        <SpecialsContext.Provider value={{specials, setSpecials: (specials) => setSpecials(specials)}}>
            {props.children}
        </SpecialsContext.Provider>
    )
}

export {SpecialsContext, SpecialsProvider, SpecialsConsumer}