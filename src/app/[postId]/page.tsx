import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import Image from "next/image";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <div className="mb-5 p-4 max-w-4xl m-auto">
      <h1 className="text-5xl text-center py-3 text-gray-600">{post.title}</h1>
      <p className="py-3 text-right text-sm text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {post.thumbnail && (
        <Image
          src={post.thumbnail.url}
          alt="blog eyecatch"
          width="1000"
          height="630"
          className="rounded  mx-auto"
        />
      )}
      <div className="body text-gray-800">{parse(post.body)}</div>
    </div>
  );
}
