const API_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`;

/* Hent alle blogindlæg */
export async function getPosts() {
  const response = await fetch(`${API_URL}/posts?_embed`);

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const posts = await response.json();

  return posts;
}

// Hent de 3 nyeste blogindlæg
export async function getLatestPosts() {
  const response = await fetch(`${API_URL}/posts?per_page=3&_embed`);

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const posts = await response.json();

  return posts;
}

/* Hent ét blogindlæg ud fra slug */
export async function getPostBySlug(slug) {
  const response = await fetch(
    `${API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`
  );

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const posts = await response.json();

  return posts[0];
}

/* Hent én WordPress-side ud fra slug */
export async function getPageBySlug(slug) {
  const response = await fetch(
    `${API_URL}/pages?slug=${encodeURIComponent(slug)}&_embed`
  );

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const pages = await response.json();

  return pages[0];
}