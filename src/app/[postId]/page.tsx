import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import { css } from "../../../styled-system/css";

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

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className={css({ fontSize: "6xl" })}>{post.title}</h1>
      <div>{parse(post.body)}</div>
    </div>
  );
}
