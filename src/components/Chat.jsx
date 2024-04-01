// Import fs from 'fs/promises' for promise-based operations

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import { createClient } from "@supabase/supabase-js";

import { fetchData } from "@/lib/data";

const output = await fetchData();

const sbApiKey = process.env.SUPABASE_API_KEY;
const sbUrl = process.env.SUPABASE_API_URL;

const client = createClient(sbUrl, sbApiKey);
// console.log(client, "client");

const Chat = async () => {
  // const output = await fetchData();
  return (
    <div>
      Chat Content here:
      {/* {JSON.stringify(output)} */}
    </div>
  );
};

export default Chat;
