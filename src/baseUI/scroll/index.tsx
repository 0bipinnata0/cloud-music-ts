import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import BScroll, { Options } from "better-scroll";
import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Scroll.defaultProps = {
//   direction: "vertical",
//   click: true,
//   refresh: true,
//   onScroll: null,
//   pullUpLoading: false,
//   pullDownLoading: false,
//   pullUp: null,
//   pullDown: null,
//   bounceTop: true,
//   bounceBottom: true,
// };
const Scroll = forwardRef<
  { refresh(): void; getBScroll(): BScroll<Options> | undefined },
  Partial<{
    className: string;
    direction: "vertical" | "horizontal";
    click: boolean;
    refresh: boolean;
    onScroll: (p: unknown) => void;
    pullUp: () => void;
    pullDown: () => void;
    pullUpLoading: boolean;
    pullDownLoading: boolean;
    bounceTop: boolean; // 是否支持向上吸顶
    bounceBottom: boolean; // 是否支持向上吸顶
    children: React.ReactNode;
  }>
>((props, ref) => {
  const [bScroll, setBScroll] = useState<BScroll | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const {
    className,
    direction = "vertical",
    click = true,
    refresh = true,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  const { pullUp, pullDown, onScroll } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current!, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on("scroll", (scroll: unknown) => {
      onScroll(scroll);
    });
    return () => {
      bScroll.off("scroll");
    };
  }, [onScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on("scrollEnd", () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off("scrollEnd");
    };
  }, [pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on("touchEnd", ({ y }: { y: number }) => {
      // 判断用户的下拉动作
      if (y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off("touchEnd");
    };
  }, [pullDown, bScroll]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    },
  }));

  return (
    <ScrollContainer className={className} ref={scrollContainerRef}>
      {props.children}
    </ScrollContainer>
  );
});

export default Scroll;
