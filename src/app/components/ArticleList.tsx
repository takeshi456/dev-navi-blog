import React from "react";
import type { Blog } from "../../../libs/microcms";
import ArticleCard from "./ArticleCard";

type ContentsListProps = {
  contents: Blog[];
};

const ArticleList = ({ contents }: ContentsListProps) => {
  return (
    <div className="mt-16 mx-auto w-full max-w-4xl">
      <div
        className="flex flex-col justify-center space-y-8 md:grid md:grid-cols-2
        md:gap-2 md:space-y-0 xl:grid-cols-3 "
      >
        {contents.map((contents) => (
          <ArticleCard key={contents.title} article={contents} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
