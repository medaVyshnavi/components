import React, { useState } from "react";

const File = ({ data }) => {
  const [open, setOpen] = useState(false);
  if (data.isFolder) {
    return (
      <div>
        <div onClick={() => setOpen(!open)}>
          <span>📁{data.name}</span>
        </div>

        <div style={{ display: open ? "block" : "none", padding: "0 1rem" }}>
          {data.items.map((item, index) => (
            <File key={index} data={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>📄{data.name}</div>;
  }
};

export default File;
