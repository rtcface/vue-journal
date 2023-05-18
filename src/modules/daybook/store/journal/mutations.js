// export const myAction = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
}

export const setEntry = ( state, entry ) => {
    console.log(state.entries,"----------",entry)
    const {id} = entry

  state.entries.map((x) => {
        if(id === x.id){
            x.text=entry.text
            x.date=entry.date
            x.piture=entry.piture
        }
    },)

    state.isLoading = false
}
export const addEntry = ( state, entry ) => {
    // state.entries.unshift(entry)
    state.entries = [entry, ...state.entries]
    state.isLoading = false
}

export const deleteEntry = (state, id) => {
    // state.entries.map( (ent,i) => {
    //     if(id === ent.id){
    //         state.entries.splice(i, 1)
    //     }
    // }, )
    state.entries = state.entries.filter( entry => entry.id !== id )
}