// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from './firebaseConfig';



// export default function Home() {
//   const handleGoogle = async (e) => {
//     const provider = await new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   }

//   return (
//     <div className="pt-36 w-full flex">
//       <button onClick={handleGoogle} className='mx-auto border-4'>
//         Login with Google</button>
//     </div>
//   )
// }

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
