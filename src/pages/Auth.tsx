import { FunctionComponent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Title from "../components/Common/Title";
import { useCurrentViewportView } from "../hooks/useCurrentViewportView";

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { isMobile } = useCurrentViewportView();
  return (
    <>
      <Title value={"Sign In | Star...+"} />

      {!isMobile && (
           <LazyLoadImage
           alt="Logo"
           src="/Background.JPG"
           effect="opacity"
           className="w-full h-full blur-lg"
         />
      )}

      <div className="md:bg-black/80 bg-dark ">
        {!isSignIn && <SignUp setIsSignIn={setIsSignIn} isSignIn={isSignIn} />}
        {isSignIn && <SignIn setIsSignIn={setIsSignIn} isSignIn={isSignIn} />}
      </div>
    </>
  );
};

export default Auth;
