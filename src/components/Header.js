import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/ModalAtom";

function Header() {
  const { data: session } = useSession();
  const [open,setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/** Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/** Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div
              className="absolute inset-y-0 pl-3 flex items-center
          pointer-events-none "
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
            focus:ring-black rounded-md focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/** Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          {session ? (
            <>
              <div className="hidden md:inline-flex relative">
                <p
                  className="absolute -top-2 -right-1 text-xs h-5
             w-5 rounded-full bg-red-500 flex items-center
            justify-center animate-pulse text-white"
                >
                  3
                </p>
                <PaperAirplaneIcon className="navBtn rotate-45" />
              </div>
              <PlusCircleIcon className="navBtn" onClick={()=>setOpen(true)}/>
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer object-contain p-[1.5px] border-2 border-red-500"
                src={session.user?.image}
                alt="Profile picture"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
