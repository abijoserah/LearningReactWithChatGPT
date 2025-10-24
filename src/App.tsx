//Level 1 — Basics of Props
//Exercise 1 — Greeting Card
//Create a component <Greeting /> that takes props:
//	•	name (string)
//	•	age (number)
//and displays:
//Hello, my name is {name} and I am {age} years old!
//Then render it twice in <App /> with different props.
//(Goal: understand how to pass and read props)

import Greeting from "./Greeting";

function App() {
  const greet = [
    {
      name: "Serah",
      age: 23
    },
    {
      name: "Virgile",
      age: 29
    }]

  return (
    <>
      <Greeting greet={greet[0]} />
      <Greeting greet={greet[1]} />
    </>
  )
}

export default App