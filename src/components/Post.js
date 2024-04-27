import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
  } from "@heroicons/react/outline";
  import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
  
  function Post({ id, userName, userImg, img, caption }) {
    return (
      <div
        className="bg-white my-7 border
      rounded-sm"
      >
        {/** Header */}
        <div className="flex items-center p-5">
          <img
            className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
            src={userImg}
            alt=""
          />
          <p className="flex-1 font-bold">{userName}</p>
          <DotsHorizontalIcon className="h-5" />
        </div>
  
        {/** Image */}
        <img src={img} alt="" className="object-cover w-full"/>
  
        {/** Buttons */}

        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn"/>
            <ChatIcon className="btn"/>
            <PaperAirplaneIcon className="btn"/>
          </div>
          <BookmarkIcon className="btn"/>
        </div>

        {/** Caption */}

        <p className="p-5 truncate"><span className="font-bold mr-2">{userName}</span>{caption}</p>
  
        {/** Comments */}
          <form className="flex items-center p-4">
            <EmojiHappyIcon className="btn"/>
            <input type="text" placeholder="Add a comment..." className="border-none flex-1 focus:ring-0 outline-none"/>
          </form>
        {/** Input box */}
      </div>
    );
  }
  
  export default Post;