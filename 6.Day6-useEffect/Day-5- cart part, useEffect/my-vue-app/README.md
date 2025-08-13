//rules to follow when using hooks

1. whenever you want react to know that there are changes you use hooks (useState).
2. Allways use hooks inside the components.
3. you cannot use hooks for conditional statement.

life cycle of components
There are three phases to a component lifecycle

1. Mounting (creation)
2. Updating (update)
3. Unmounting (remove/destroy)

useEffect ---> this is another hook

1. it is used to handle side effects.

[]---> no dependency , react uses useEffect only in mounting phase
[count]---> here we have count dependency, so whenever the count value changes the useEffect is called
\*\* when you do not use [] or [count], the useEffect will be called for every change.
