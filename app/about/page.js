import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";

export default async function About() {
  const page = await getPageBySlug("about");

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </div>
  );
}