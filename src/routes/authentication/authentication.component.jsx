// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentsFromAuth,
// } from "../../utils/firebase/firebase.utils";
// import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {
    // If signInWithRedirect, it remounts and gets the signed user auth
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentsFromAuth(response.user);
    //         }
    //     }
    //     fetchData();
    // }, []);

    // Google Auth - check
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentsFromAuth(user);
  // };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
