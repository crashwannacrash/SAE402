import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="page w-full">
      <Header></Header>
      <Hero ></Hero>
      <Gallery ></Gallery>
      <Video ></Video>
      <Presentation ></Presentation>
    </div>
  );
}

export default App;
