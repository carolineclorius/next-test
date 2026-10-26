import Link from "next/link";
import styles from "./PostCard.module.css";
import { formatDate } from "@/lib/format";

export default function PostCard({ post }) {
  const date = formatDate(post.date);

  // Hent billede fra WordPress
  const image = post._embedded?.["wp:featuredmedia"]?.[0];

  // Hent kategorier fra WordPress
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];

  return (
    <article className={styles.card}>

      {/* Billede */}
      {image && (
        <img
          className={styles.image}
          src={image.source_url}
          alt={image.alt_text || ""}
        />
      )}

      {/* Kategorier */}
      {categories.length > 0 && (
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}

      {/* Dato */}
      <time className={styles.date} dateTime={post.date}>
        {date}
      </time>

      {/* Titel */}
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Uddrag */}
      <div
        className={styles.excerpt}
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />

      {/* Link til detaljesiden */}
      <Link href={`/posts/${post.slug}`} className={styles.link}>
        Read more
      </Link>

    </article>
  );
}