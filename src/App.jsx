import Viewer from "./components/Viewer";
import { usePDF } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf" });
  return (
    <main>
      <button
        className="block absolute top-0 right-0 z-10"
        onClick={() => toPDF()}
      >
        Download PDF
      </button>
      <div ref={targetRef}>
        <Viewer />
      </div>
    </main>
  );
}

export default App;
