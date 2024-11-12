import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import './App.css'
import auth from './component/firebase.init';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleBtnWithGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user)
      setUser(result.user)

  }).catch((error) => {
    console.log('error',error)
    setUser(null)
  });
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => console.log('ERROR', error))
}



  const handleSignOut = () => {
    signOut(auth)
        .then(() => {
            console.log('sign out done');
            setUser(null);
        })
        .catch(error => console.log(error))
      }


  return (
    <div>
    {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
    <button onClick={handleSignOut}>Sign Out</button> */}
    {
        user ?
            <button onClick={handleSignOut}>Sign Out</button>
            :
            <>
                <button onClick={handleBtnWithGoogle}>Login with Google</button>
                <button onClick={handleGithubSignIn}>Login with Github</button>
            </>
    }


    {
        user && <div>
            <h4>{user.displayName}</h4>
            <p>Email: {user.email}</p>
            <img src={user.photoURL.replace(/^"|"$/g, '') } alt="" />
        </div>
    }
</div>
  )
}

export default App
