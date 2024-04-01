import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const openAIApiKey = process.env.OPENAI_API_KEY;

const llm = new ChatOpenAI({ openAIApiKey });

const standAloneQuestionTemplate =
  "Turn the following question into a standalone question: {question}";

const standAloneQuestionPrompt = PromptTemplate.fromTemplate(
  standAloneQuestionTemplate
);

const standAloneQuestionChain = standAloneQuestionPrompt.pipe(llm);

// console.log(standAloneQuestionChain, "standAloneQuestionChain");

const response = await standAloneQuestionChain.invoke({
  question:
    "I'd like to try new ways of questioning about Electric Shoes, but I am not sure about how to do it. Can you help me?",
});
console.log(response.content, "response");

const ExamplePrompt = async () => {
  // const output = await fetchData();
  return (
    <div>
      ExamplePrompt Content here:
      {/* {JSON.stringify(output)} */}
    </div>
  );
};

export default ExamplePrompt;
