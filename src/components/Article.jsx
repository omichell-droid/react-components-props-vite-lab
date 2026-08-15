// Article: renders a single blog post's title, date, and preview text.
// Receives `title`, `date`, and `preview` as props from ArticleList.jsx.
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;