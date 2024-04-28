import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import Lottie from "react-lottie-player";
import animation from "../../../public/animation/insta-animation.json";
import googleAnimation from "../../../public/animation/google-animation.json";

function signInPage({ providers }) {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center py-2 mt-20
      px-14 text-center"
      >
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <Lottie
          loop
          animationData={animation}
          play
          style={{ width: 250, height: 250 }}
        />
        <div className="relative mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <Lottie
                className="absolute"
                loop
                animationData={googleAnimation}
                play
                style={{ width: 50, height: 50 }}
              />
              <button
                className="py-3 pl-12 pr-4 bg-gray-200 shadow-sm rounded-md text-black font-semibold hover:bg-gray-300 transition duration-150 ease-out"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signInPage;
