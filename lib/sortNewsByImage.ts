export default function sortNewsByImage(news: NewsResponse) {
  const newWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    pagination: news.pagination,
    data: [...newWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponse;
}
