// import "./styles.css";
// import useFetch from "./useFetch";
// // import the custom hook to use in this document

// export default function App() {
  
//   const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
//   // Use the custom hook here
//   const { data, loading, error, getJoke } = useFetch(url);
//   // Display loading text here
  
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Something went wrong...</p>;
//   }

//   // Display something went wrong here
  
//   return (
//     <div className="App">
//       <h1>Joke Generator</h1>
//       {/* Do not modify the below code */}
//       <h2>{data.joke}</h2>
//       <button onClick = {getJoke}className="btn" >New Joke</button>
//     </div>
//   );
// }
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error, getJoke } = useFetch(
    "https://api.chucknorris.io/jokes/random?category=dev"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{data.value}</h2>
      <button onClick={getJoke} className="btn">
        New Joke
      </button>
    </div>
  );
}