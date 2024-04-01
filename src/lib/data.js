import fs from "fs/promises";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import path from "path";
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

const openAIApiKey = process.env.OPENAI_API_KEY;

// Async function to fetch data from a local file
export async function fetchData() {
  try {
    // Use path.join to ensure the path is correctly formed across different OS
    // __dirname is not available in ES module scope, so you might need to construct a path differently depending on your setup
    const filePath = path.join(
      process.cwd(),
      "/public/data/manual-cumpleanos.md"
    );
    const text = await fs.readFile(filePath, "utf8");

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100,
      separators: ["\n\n", "\n", " ", "", "#", "##", "###"],
      chunkOverlap: 25,
    });

    const output = await splitter.createDocuments([text]);
    // console.log(output[0].metadata);

    return output;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function createEmbedding() {
  const output = await fetchData();
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: openAIApiKey,
    batchSize: 512,
    modelName: "text-embedding-3-large",
  });

  try {
    await SupabaseVectorStore.fromDocuments(output, embeddings, {
      client,
      tableName: "documents-thinkey",
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
