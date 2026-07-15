"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

export interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  children: ReactNode;
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass = "", className = "", ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={`card ${customClass} ${className}`}
    />
  )
);

Card.displayName = "Card";

const CardSwap: React.FC<CardSwapProps> = ({
  width = 600,
  height = 220,
  cardDistance = 90,
  verticalDistance = 80,
  delay = 4000,
  pauseOnHover = true,
  onCardClick,
  children,
}) => {
  const childArray = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );

  const refs = useMemo(
    () =>
      childArray.map(() =>
        React.createRef<HTMLDivElement>()
      ),
    [childArray.length]
  );

  const order = useRef(
    Array.from(
      { length: childArray.length },
      (_, i) => i
    )
  );

  const containerRef =
    useRef<HTMLDivElement>(null);

  const intervalRef = useRef<number | undefined>(undefined);

  const updatePositions = () => {
    order.current.forEach((cardIndex, position) => {
      const el = refs[cardIndex].current;

      if (!el) return;

      gsap.to(el, {
        x: position * cardDistance,
        y: -position * verticalDistance,
        z: -position * cardDistance,
        zIndex:
          childArray.length - position,
        duration: 0.7,
        ease: "power3.out",
      });
    });
  };

  const nextCard = () => {
    const [first, ...rest] = order.current;

    order.current = [...rest, first];

    updatePositions();

    onCardClick?.(order.current[0]);
  };

  useEffect(() => {
    order.current.forEach(
      (cardIndex, position) => {
        const el =
          refs[cardIndex].current;

        if (!el) return;

        gsap.set(el, {
          x: position * cardDistance,
          y: -position * verticalDistance,
          z: -position * cardDistance,
          zIndex:
            childArray.length - position,
          xPercent: -50,
          yPercent: -50,
        });
      }
    );

    onCardClick?.(0);

    intervalRef.current = window.setInterval(
      nextCard,
      delay
    );

    if (
      pauseOnHover &&
      containerRef.current
    ) {
      const node = containerRef.current;

      const pause = () =>
        clearInterval(intervalRef.current);

      const resume = () => {
        intervalRef.current =
          window.setInterval(
            nextCard,
            delay
          );
      };

      node.addEventListener(
        "mouseenter",
        pause
      );
      node.addEventListener(
        "mouseleave",
        resume
      );

      return () => {
        node.removeEventListener(
          "mouseenter",
          pause
        );
        node.removeEventListener(
          "mouseleave",
          resume
        );

        clearInterval(intervalRef.current);
      };
    }

    return () =>
      clearInterval(intervalRef.current);
  }, []);

  const renderedCards = childArray.map(
    (child, index) =>
      cloneElement(child, {
        key: index,
        ref: refs[index],
        style: {
          width,
          height,
          ...(child.props.style || {}),
        },

        onClick: () => {
          nextCard();
        },
      } as any)
  );

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{
        width,
        height,
      }}
    >
      {renderedCards}
    </div>
  );
};

export default CardSwap;