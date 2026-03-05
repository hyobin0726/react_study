import { useRef, useEffect } from "react";

interface Props {
  name: string;
}

export default function RenderCounter({ name }: Props) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`${name} 렌더링 횟수:`, renderCount.current);
  });

  return null;
}