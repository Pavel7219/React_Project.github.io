const initialState = {
    todos: [
        {
            id: 0, text: "buy food",
            adress:'Piskunivskiy str 32',
            position: {
            latitude: 49.9932,
            longitude: 36.2179
            }
        },
        {
            id: 1, text: "buy toys",
            adress:'Pushkinska str 41',
            position: {
            latitude: 50.0036,
            longitude: 36.2559
            }
        },
        {
            id: 2,
            text: "buy household chemicals",
            adress:'Turinska str 18',
            position: {
            latitude: 49.9950,
            longitude: 36.2800
            }
        },
        {
            id: 3,
            text: "buy fruit",
            adress:'Gagarina str 32',
            position: {
            latitude: 49.9800,
            longitude: 36.2303
            }
        }
    ]
}
export default function buys (state=initialState,action) {
    switch(action.type){
        case 'DELETE_TODO':
            let newState = state.todos.filter(todo=>todo.id !== action.payload)
            console.log('55',newState)
            return Object.assign({},state,{todos:newState})
    }
    return state
}