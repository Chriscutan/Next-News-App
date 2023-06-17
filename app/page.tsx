import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import Newslist from "./Newslist";

export default async function Home() {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return (
    <div>
      <Newslist news={news} />
    </div>
  );
}
