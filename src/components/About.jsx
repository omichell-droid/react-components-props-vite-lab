function about({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>
        This blog is written by Michell Okwaro, a software engineer who loves to share knowledge 
        about React and web development. The goal is to provide clear and
        concise explanations of complex topics, making it easier for developers
        of all skill levels to understand and apply them in their own projects.
      </p>
    </aside>
  );
}

export default about;