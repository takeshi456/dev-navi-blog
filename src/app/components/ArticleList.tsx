import React from "react";
import type { Blog } from "../../../libs/microcms";
import ArticleCard from "./ArticleCard";

type ContentsListProps = {
  contents: Blog[];
};

const ArticleList = ({ contents }: ContentsListProps) => {
  return (
    <article>
      <div>
        {contents.map((contents) => (
          <ArticleCard key={contents.title} article={contents} />
        ))}
      </div>
    </article>
  );
};

export default ArticleList;
