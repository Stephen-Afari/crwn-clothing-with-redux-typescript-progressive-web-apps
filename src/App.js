import "./components/directory/directory.component.jsx";
import categories from "./components/category-item/categories";
import Directory from "./components/directory/directory.component.jsx";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
