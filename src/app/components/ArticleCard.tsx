import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Blog } from "../../../libs/microcms";

type ContentCardProps = {
  article: Blog;
};

const ArticleCard = ({ article }: ContentCardProps) => {
  return (
    <div key={article.id} className="max-h-64 w-full shadow-xl h-64">
      <Link href={`${article.id}`}>
        <div className="h-4/6 relative">
          {article.thumbnail && (
            <Image
              src={article.thumbnail.url}
              alt="blog eyecatch"
              width="500"
              height="315"
              className="rounded"
            />
          )}
        </div>
        <div className="flex h-2/6 items-center justify-between overflow-hidden bg-white p-2 text-black">
          <p className="title h-full overflow-ellipsis p-2 text-lg font-medium text-gray-600">
            {article.title}
          </p>
          <div className="flex h-full flex-col-reverse">
            <p className="text-xs font-thin">
              {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
