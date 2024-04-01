import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { supabaseClient } from "@/config/supabase";

const openAIApiKey = process.env.OPENAI_API_KEY;

const llm = new ChatOpenAI({ openAIApiKey });

const embeddings = new OpenAIEmbeddings();

const vectorStore = new SupabaseVectorStore(embeddings, {
  client: supabaseClient,
  tableName: "documents",
  queryName: "match_documents",
});

const retriever = vectorStore.asRetriever();
console.log(retriever, "retriever*****");
const standAloneQuestionTemplate =
  "Turn the following question into a bedtime story for kids: {question} standalone question";

// console.log(retriever, "retriever");
const standAloneQuestionPrompt = PromptTemplate.fromTemplate(
  standAloneQuestionTemplate
);
console.log(standAloneQuestionPrompt, "standAloneQuestionPrompt");

const standAloneQuestionChain = standAloneQuestionPrompt
  .pipe(llm)
  .pipe(new StringOutputParser())
  .pipe(retriever);

console.log(standAloneQuestionChain, "standAloneQuestionChain");
const response = await standAloneQuestionChain.invoke({
  question: "I'd like a story about Jesus being born",
});

// const response2 = await retriever.invoke("Tell me a story about Jesus");

console.log("*********");
console.log(response);
// console.log(response2, "response2");
console.log("*********");

const CreatingEmbeddings = async () => {
  // const output = await fetchData();
  return (
    <div>
      CreatingEmbeddings Content here:
      {/* {JSON.stringify(output)} */}
    </div>
  );
};

export default CreatingEmbeddings;
