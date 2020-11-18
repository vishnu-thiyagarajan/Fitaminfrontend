import redux from 'redux';
const createStore = redux.createStore 

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

function login(){
    return {
        type : LOGIN_USER,
        user : { name: 'vishnu', email: 'vishnu@sits.com' }

    }
}

function logout(){
    return {
        type : LOGOUT_USER,
        user : null
    }
}

const initialState = { user: null, isAuthenticated:false }

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: state.user
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: state.user
            }
        default: return state
    }
}

const store = createStore(reducer)
console.log('InitialState', store.getState())
const unsubscribe = store.subscribe(()=>console.log('UpdateState', store.getState()))
store.dispatch(login())
unsubscribe()