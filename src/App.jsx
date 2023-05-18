// import "./App.css";

// const App = () => {
//   const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,];
//   return (
//     <main>
//       {scores.map((scores) => (
//         <h1> Score is: {scores}</h1>
//       ))}
//     </main>
//   );
// };

// export default App;

//  Filter Method   //

const App = () => {
  const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  //[30,40,50,60,70,80,90,100] This question//
  //[<h1>30</h1> <h1>40</h1> <h1>50</h1> <h1>60</h1> <h1>70</h1> <h1>80</h1> <h1>90</h1> <h1>100</h1>]
  return (
    <main>
      {scores
        .filter((scores) => scores >= 30)
        .map((scores) => (
          <h1>score is:{scores}</h1>
        ))}
    </main>
  );
};
export default App;
