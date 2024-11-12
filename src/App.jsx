import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css'
import auth from './component/Firebase';

function App() {
  const provider = new GoogleAuthProvider();

  const handleBtnWithGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user)
  }).catch((error) => {
    console.log('error',error)
  });

  }

  return (
    <>
      <button onClick={handleBtnWithGoogle}>Login with google</button>
      {

      }
    </>
  )
}

export default App
