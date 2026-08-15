// Header: renders the blog's title in an <h1>.
// Receives `name` as a prop from App.jsx.
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;