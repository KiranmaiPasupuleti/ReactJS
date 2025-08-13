// import React, { useEffect, useState } from "react";

// const Count = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState([]);

//   console.log("above useEffect");
// const fetching = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         setData(data);
//         console.log("inside useEffect");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   useEffect(() => {
//
//     fetching();
//   }, [count]);
//   console.log("below useEffect");
//   return (
//     <>
//       <div>{count}</div>
//       <Button setCount={setCount} count={count} />
//       {data.map((item) => {
//         return <p>{item.title}</p>;
//       })}
//     </>
//   );
// };

// function Button({ count, setCount }) {
//   return <button onClick={() => setCount(count + 1)}>Inc</button>;
// }

// export default Count;

import React, { useEffect } from "react";

const Count = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    () => {
      clearInterval(id); //clear the interval when the component is unmount (removed or destroy)
    }; //cleanup function
  }, []);

  return <div>Count</div>;
};

export default Count;
