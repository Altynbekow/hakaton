// import { useState, useEffect } from 'react';
// import axios from 'axios';
//
// function App() {
//   const [books, setBooks] = useState([]);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://6636002d415f4e1a5e25f5e0.mockapi.io/books');
//         setBooks(response.data);
//
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);
//
//   return (
//     <div>
//       <h1>Список книг</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>
//             <strong>{book.name}</strong> - {book.author}
//             <br/>
//             <p>{book.price}</p>
//             <img src={book.avatar} alt=""/>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//
// export default App;
