import File from "./fileExplorer/File";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <File data={data} />
    </div>
  );
}

export default App;
