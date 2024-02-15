import React from 'react'
import ExpensesItem from './Components/ExpensesItem'

const App = () => {
  return (
    <div>
         <ExpensesItem 
          title={"ala"}
          price={2500}
          date={new Date(2020,3,10)}
         />
    </div>
  
   
  )
}

export default App


