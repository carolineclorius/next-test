import PostList from "@/components/PostList";
import { getPosts } from "@/lib/wordpress";
import styles from "./page.module.css";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <h1>All posts</h1>
      <p>Explore all our stories from Aarhus.</p>

      <PostList posts={posts} />
    </main>
  );
}