import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({}){
  const { user, username } = useContext(UserContext)
  console.log('uer' + user)

  //1. user signed out: signinbutton
  //2 user signed in without username: usernameForm
  //3 user signed in and has username signoutbutton
  return (
    <main>
      {user ?
        <SignOutButton/>
        : 
        <SignInButton/>
    }
      
    </main>
  )
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

function SignOutButton(){
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm(){
  return null
}