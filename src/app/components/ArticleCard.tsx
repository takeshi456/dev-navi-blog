import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Blog } from "../../../libs/microcms";

type ContentCardProps = {
  article: Blog;
};

const ArticleCard = ({ article }: ContentCardProps) => {
  return (
    <div key={article.id}>
      <Link href={`${article.id}`}>
        {article.thumbnail && (
          <Image
            src={article.thumbnail.url}
            alt="blog eyecatch"
            width="500"
            height="315"
          />
        )}
        {article.title}
        投稿日：{new Date(article.createdAt).toLocaleDateString()}
      </Link>
    </div>
  );
};

export default ArticleCard;
