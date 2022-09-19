import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import DragDrop from "./DragDrop";

import "./App.css";

function App() {
  const frameRef = useRef(null);
  const [hasFrameContent, setHasFrameContent] = useState(false);

  useEffect(() => {
    if (frameRef.current) {
      frameRef.current.contentWindow.document.head.innerHTML =
        document.head.innerHTML;
      setHasFrameContent(true);
    }
  }, []);

  return (
    <iframe ref={frameRef} title="app-frame">
      {hasFrameContent &&
        createPortal(
          <DragDrop />,
          frameRef.current.contentWindow.document.body
        )}
    </iframe>
  );
}

export default App;
