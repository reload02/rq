import React, { forwardRef } from "react";

// Props 타입 정의
interface Props {
  headline: string; // 필수
  headlinePointer?: string; // 선택적
}

// forwardRef의 올바른 타입 정의
const HeadLine = forwardRef<HTMLHeadingElement, Props>(
  ({ headline, headlinePointer }, ref) => {
    return (
      <h1 className="mt-7 text-2xl font-bold" ref={ref}>
        {headline}
      </h1>
    );
  },
);

export default HeadLine;
