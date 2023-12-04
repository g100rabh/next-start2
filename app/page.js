import styles from "./page.module.css";
import prisma from "../lib/prisma";
import PostCards from "./components/PostCards";
import AddPosts from "./add-post/page";
import Link from "next/link";
import '../styles/global.css';

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className={styles.main}>
      <Link className={styles.addpost} href={"/add-post"}>
        Add Post
      </Link>
      <h1>Posts</h1>
      <div className={styles.cardCon}>
        {posts.map((post) => (
          <PostCards key={posts.id} post={post} />
        ))}
      </div>
    </main>
  );
}
