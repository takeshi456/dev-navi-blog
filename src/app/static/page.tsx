import Link from "next/link";
import { getList } from "../../../libs/microcms";
import Image from "next/image";

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/static/${post.id}`}>
                {" "}
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail.url}
                    alt="blog eyecatch"
                    width={post.thumbnail.width}
                    height={post.thumbnail.height}
                  />
                )}
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
