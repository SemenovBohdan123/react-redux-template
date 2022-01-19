interface InitialState {
  news: NewsState;
}

interface NewsState {
  data: Array<NewsItem>;
}
interface NewsItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
