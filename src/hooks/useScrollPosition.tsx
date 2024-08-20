import { useEffect } from "react";

const useScrollPosition = (
  ref: React.RefObject<HTMLElement>,
  onBottom: () => void,
  onTop: () => void,
  otherFunc?: () => void,
  nearBottomThreshold: number = 100
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollTop, scrollHeight, clientHeight } = ref.current;
        const getTheTop = scrollTop <= 0;
        const getTheBottom =
          scrollTop + clientHeight >= scrollHeight - nearBottomThreshold;
        // Check if user is at the bottom
        if (getTheBottom) {
          onBottom();
        }

        // Check if user is at the top
        if (getTheTop) {
          onTop();
        }

        if (otherFunc && !getTheTop && !getTheBottom) {
          otherFunc();
        }
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, onBottom, onTop]);
};

export default useScrollPosition;
