useState--->hook

current state
function to update the state

react store this state internally.

---

setCount ---> it is kind of async

setState-->update function---> they get updated as batches.

when multiple state updates happen in a single event handler, react will batch them together and apply them in a single render cycle.

const handleIncrease=()=>{
setCount(count+100)
setCount(count+100)
setCount(count+100)
}

when you click on handleIncrease the function is called , which inturn calls setCount four times.
However due to react's batching behavior these four updates are combined and applied in a single render cycle.

this is happening because the amount(count) used in all four setCount calls is the same(the current state value before any updates). React batches these updates and calculates the new state value based on the initial value.

//------------------
count=0
const handleIncrease = () => {
setCount((prev) => prev + 100); //0+100==>100
setCount((prev) => prev + 100); // 100+100==>200
setCount((prev) => prev + 100); //200 +100 ==>300
setCount((prev) => prev + 100); //300 +100 ==>400
};
to ensure each update is based on the most recent state value, you can use the functional form (writing a function inside setCount) of the state update, which takes the previous state value as a parameter and returns the updated state value

---

parent to child---> props

child to parent---->

        parent ---> function declaration in parent, you will create a state here and store the value when you  call the function

    count1   count2  ---> call the function inside the child
