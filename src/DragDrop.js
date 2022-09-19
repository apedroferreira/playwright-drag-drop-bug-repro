import { useState } from "react";

function DragDrop() {
  const [hasDropped, setHasDropped] = useState(false);

  const handleDragEnter = (event) => {
    event.preventDefault();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  const handleDragEnd = () => {};

  const handleDrop = () => {
    setHasDropped(true);
  };

  const droppedClass = hasDropped ? "dropped" : "";

  return (
    <div className="container">
      <div className={`source ${droppedClass}`} draggable>
        drag me
      </div>
      <div
        className={`target ${droppedClass}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragEnd}
        onDrop={handleDrop}
      >
        {hasDropped ? "dropped!" : "drop here"}
      </div>
    </div>
  );
}

export default DragDrop;
