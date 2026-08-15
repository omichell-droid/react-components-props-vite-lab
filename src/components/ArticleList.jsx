// ArticleList: renders the full list of blog posts by mapping over `posts`
// and rendering an Article component for each one. Receives `posts` as a prop from App.jsx, and passes each post's data down to Article.jsx.
import Article from "./Article";

function ArticleList({ posts }) {
  const articleElements = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{articleElements}</main>;
}

export default ArticleList;