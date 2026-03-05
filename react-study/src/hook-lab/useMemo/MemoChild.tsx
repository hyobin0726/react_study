import React from "react";
import RenderCounter from "../../components/RenderCounter";

interface Props {
  items: number[];
}

const MemoChild = React.memo(({ items }: Props) => {
  return (
    <div className="border p-3">
      <h3>Memo Child</h3>

      <RenderCounter name="MemoChild" />

      <p>Items length: {items.length}</p>
    </div>
  );
});

export default MemoChild;