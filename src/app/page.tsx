import { getList } from "../../libs/microcms";
import ArticleList from "./components/ArticleList";
import Sidebar from "./components/Sidebar";

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      {/* 上のdivフレックスにする */}
      <ArticleList contents={contents} />
      <Sidebar />
    </div>
  );
}
