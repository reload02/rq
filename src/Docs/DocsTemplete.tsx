import { useRef } from "react";
import CodeBlock from "../component/CodeBlock";
import HeadLine from "../component/HeadLine";

const DocsTemplete: React.FC = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="grid h-[3700px] w-[860px] grid-cols-[5fr_1fr] items-start">
      <div className="flex flex-row justify-center">
        <div className="mt-10 w-[640px]">
          <HeadLine
            headline="test1"
            ref={(el) => (containerRef.current[0] = el)}
          />
          <HeadLine
            headline="t123"
            ref={(el) => (containerRef.current[1] = el)}
          />
          <HeadLine
            headline="test3"
            ref={(el) => (containerRef.current[2] = el)}
          />

          <p className="break-words pt-8 text-base font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <CodeBlock
            code={`const hi = () => {
console.log("Hello, world!");
}
hi();
  `}
            language="javascript"
          />
        </div>
      </div>

      <ContentNavigation domList={containerRef.current} />
    </div>
  );
};

const ContentNavigation = ({ domList }: { domList: any }) => {
  const handleScroll = (index: number) => {
    if (domList[index]) {
      domList[index]?.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤
        block: "start", // 요소의 상단이 보이도록 스크롤
      });
    }
  };
  return (
    <div className="sticky top-20 flex flex-col">
      {domList.map((_: any, index: number) => {
        return (
          <button
            className="cursor-pointer"
            onClick={() => {
              handleScroll(index);
            }}
            key={index}
          >
            {domList[index].innerText}
          </button>
        );
      })}
    </div>
  );
};

export default DocsTemplete;
