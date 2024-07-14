import { useRef, useEffect } from "react";

function useDimensions(ref: React.RefObject<HTMLElement>) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}

export default useDimensions;
