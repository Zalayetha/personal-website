import { useEffect, type RefObject } from "react";
import Typed from "typed.js";

interface UseTypedOptions {
  strings: string[];
  typeSpeed?: number;
  startDelay?: number;
}

export function useTyped(
  elementRef: RefObject<HTMLElement | null>,
  options: UseTypedOptions,
) {
  const { strings, typeSpeed = 50, startDelay = 0 } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const typed = new Typed(elementRef.current, {
      strings,
      typeSpeed,
      startDelay,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [elementRef, strings, typeSpeed, startDelay]);
}
