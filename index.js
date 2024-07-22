import { createStore } from "redux";   
//step1: create a store
const store=createStore(reducer);    //step3: set the reducer

function actionDeposit(value){
    return {type:"Deposit",payload:value}
}
function actionWithdraw(value){
    return {type:"Deposit",payload:value}
}
function actionCheckBalance(){
    return {type:"CheckBalance"}
}
//step2: create a reducer
function reducer(state={amount:1000,name:'saideep'},action){
    if (action.type==="Deposit"){
        return {amount:state.amount+action.payload,name:state.name}
    }
    else if (action.type==="Withdraw"){
        return {amount:state.amount-action.payload,name:state.name}
    }
    return state
}

// console.log(store.getState()) //step4: getting the value of store

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(actionCheckBalance())
store.dispatch(actionDeposit(200))
store.dispatch(actionWithdraw(300))


// console.log(store.getState())