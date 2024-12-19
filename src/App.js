import TreeView from "./components/treeNavBar";
import menus from "./components/treeNavBar/data";

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
