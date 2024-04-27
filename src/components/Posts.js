import Post from "./Post";
import { myImage } from "@/utils/constants";
const posts = [
  {
    id: "1",
    userName: "kartik_narang_007",
    userImg: myImage,
    img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Hello. My first post",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          userName={post.userName}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;