import fetchNews from "@/lib/fetchNews";
import Newslist from "../Newslist";

type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>

      <Newslist news={news} />
    </div>
  );
}

export default SearchPage;
