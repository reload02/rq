import { useParams } from "react-router-dom";
import { useRef } from "react";
import CodeBlock from "./CodeBlock";

const ShowDocs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement[] | null>([]);
  const handleScroll = (index: number) => {
    console.log(containerRef.current[index]);
    containerRef.current[index]?.scrollIntoView({
      behavior: "smooth", // 부드러운 스크롤
      block: "start", // 요소의 상단이 보이도록 스크롤
    });
  };

  return (
    <div className="grid h-[3700px] w-[860px] grid-cols-[5fr_1fr] items-start">
      <div className="flex flex-row justify-center">
        <div className="mt-10 w-[640px]">
          <h1 className="mt-2 text-3xl font-bold">Text generation</h1>
          <p className="break-words pt-8 text-base font-normal">
            OpenAI provides simple APIs to use a large language model to
            generate text from a prompt, as you might using ChatGPT. These
            models have been trained on vast quantities of data to understand
            multimedia inputs and natural language instructions. From these
            prompts, models can generate almost any kind of text response, like
            code, mathematical equations, structured JSON data, or human-like
            prose.
          </p>
          <h1
            className="mt-7 text-2xl font-bold"
            ref={(el) => (containerRef.current[0] = el)}
          >
            Quickstart
          </h1>
          <p className="break-words pt-8 text-base font-normal">
            To generate text, you can use the chat completions endpoint in the
            REST API, as seen in the examples below. You can either use the REST
            API from the HTTP client of your choice, or use one of OpenAI's
            official SDKs for your preferred programming language.
          </p>
          <div className="overflow-auto rounded-lg text-white">
            <pre className="font-mono text-sm">
              <CodeBlock
                code={`import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);
  `}
                language="javascript"
              />
            </pre>
          </div>
          <h1
            className="mt-7 text-2xl font-bold"
            ref={(el) => (containerRef.current[1] = el)}
          >
            Choosing a model
          </h1>
          <p className="break-words pt-8 text-base font-normal">
            When making a text generation request, the first option to configure
            is which model you want to generate the response. The model you
            choose can greatly influence the output, and impact how much each
            generation request costs.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              A large model like gpt-4o will offer a very high level of
              intelligence and strong performance, while having a higher cost
              per token.
            </li>
            <li>
              A small model like gpt-4o-mini offers intelligence not quite on
              the level of the larger model, but is faster and less expensive
              per token.
            </li>
            <li>
              A reasoning model like the o1 family of models is slower to return
              a result, and uses more tokens to "think", but is capable of
              advanced reasoning, coding, and multi-step planning.
            </li>
            <p>
              Experiment with different models in the Playground to see which
              one works best for your prompts! More information on choosing a
              model can also be found here.
            </p>
          </ul>
          <h1
            className="mt-7 text-2xl font-bold"
            ref={(el) => (containerRef.current[2] = el)}
          >
            Building prompts
          </h1>
          <p className="break-words pt-8 text-base font-normal">
            The process of crafting prompts to get the right output from a model
            is called prompt engineering. By giving the model precise
            instructions, examples, and necessary context information (like
            private or specialized information that wasn't included in the
            model's training data), you can improve the quality and accuracy of
            the model's output. Here, we'll get into some high-level guidance on
            building prompts, but you might also find the prompt engineering
            guide helpful.
          </p>
          <p className="break-words pt-8 text-base font-normal">
            In the chat completions API, you create prompts by providing an
            array of messages that contain instructions for the model. Each
            message can have a different role, which influences how the model
            might interpret the input.
          </p>
          <h1
            className="text-1xl mt-7 font-bold"
            ref={(el) => (containerRef.current[3] = el)}
          >
            User messages
          </h1>
          <p className="break-words pt-8 text-base font-normal">
            User messages contain instructions that request a particular type of
            output from the model. You can think of user messages as the
            messages you might type in to ChatGPT as an end user. Here's an
            example of a user message prompt that asks the gpt-4o model to
            generate a haiku poem based on a prompt.
          </p>
          <pre className="font-mono text-sm">
            <CodeBlock
              code={`const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Write a haiku about programming."
        }
      ]
    }
  ]
});
  `}
              language="javascript"
            />
          </pre>
          <h1 className="text-1xl mt-7 font-bold">System messages</h1>
          <p className="break-words pt-8 text-base font-normal">
            Messages with the system role act as top-level instructions to the
            model, and typically describe what the model is supposed to do and
            how it should generally behave and respond. Here's an example of a
            system message that modifies the behavior of the model when
            generating a response to a user message:
          </p>
          <pre className="font-mono text-sm">
            <CodeBlock
              code={`const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": \`
            You are a helpful assistant that answers programming questions 
            in the style of a southern belle from the southeast United States.
          \`
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Are semicolons optional in JavaScript?"
        }
      ]
    }
  ]
});
  `}
              language="javascript"
            />
          </pre>
          <p className="break-words pt-8 text-base font-normal">
            This prompt returns a text output in the rhetorical style requested:
          </p>
          <pre className="font-mono text-sm">
            <CodeBlock
              code={`Well, sugar, that's a fine question you've got there! Now, in the world of 
JavaScript, semicolons are indeed a bit like the pearls on a necklace – you 
might slip by without 'em, but you sure do look more polished with 'em in place. 

Technically, JavaScript has this little thing called "automatic semicolon 
insertion" where it kindly adds semicolons for you where it thinks they 
oughta go. However, it's not always perfect, bless its heart. Sometimes, it 
might get a tad confused and cause all sorts of unexpected behavior.
  `}
              language="javascript"
            />
          </pre>
          <h1
            className="mt-7 text-2xl font-bold"
            ref={(el) => (containerRef.current[4] = el)}
          >
            Optimizing model outputs
          </h1>
          <p className="break-words pt-8 text-base font-normal">
            As you iterate on your prompts, you will be continually trying to
            improve accuracy, cost, and latency.
          </p>
          <div className="flex justify-center pt-8">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="border-b-2">
                  <td className="border-x-0 border-gray-300 px-4 py-2 font-bold"></td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 font-bold">
                    Goal
                  </td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 font-bold">
                    Available techniques
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="border-x-0 border-gray-300 px-4 py-2">
                    Accuracy
                  </td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 text-xs">
                    Ensure the model produces accurate and useful responses to
                    your prompts.
                  </td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 text-xs">
                    Accurate responses require that the model has all the
                    information it needs to generate a response, and knows how
                    to go about creating a response (from interpreting input to
                    formatting and styling). Often, this will require a mix of
                    prompt engineering, RAG, and model fine-tuning. Learn about
                    optimizing for accuracy here.
                  </td>
                </tr>
                <tr className="border-b-2">
                  <td className="border-x-0 border-gray-300 px-4 py-2">Cost</td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 text-xs">
                    Drive down the total cost of model usage by reducing token
                    usage and using cheaper models when possible.
                  </td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 text-xs">
                    To control costs, you can try to use fewer tokens or
                    smaller, cheaper models. Learn more about optimizing for
                    cost here
                  </td>
                </tr>
                <tr>
                  <td className="border-x-0 border-gray-300 px-4 py-2">
                    Latency
                  </td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 text-xs">
                    Decrease the time it takes to generate responses to your
                    prompts.
                  </td>
                  <td className="border-x-0 border-gray-300 px-4 py-2 text-xs">
                    Optimizing latency is a multi-faceted process including
                    prompt engineering, parallelism in your own code, and more.
                    Learn more here.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-40"> </div>
          <div>
            Was this page useful?{"  "}
            <button className="rounded-lg">👍</button>{" "}
            <button className="rounded-lg">❌</button>
          </div>
          <div className="h-20"> </div>
        </div>
      </div>
      <div className="sticky top-20">
        <button
          className="cursor-pointer"
          onClick={() => {
            handleScroll(0);
          }}
        >
          Quickstart
        </button>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleScroll(1);
          }}
        >
          Choosing a model
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleScroll(2);
          }}
        >
          Building prompts
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleScroll(3);
          }}
        >
          Conversations and context
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleScroll(4);
          }}
        >
          Optimizing
        </div>
      </div>
    </div>
  );
};

export default ShowDocs;
