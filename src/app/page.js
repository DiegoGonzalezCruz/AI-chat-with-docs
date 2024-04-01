// import Chat from "@/components/Chat";
// import ExamplePrompt from "@/components/ExamplePrompt";
// import CreatingEmbeddings from "@/components/CreatingEmbeddings";

import CreateEmbedding from "@/components/Fetch/CreateEmbedding";

export default function Home() {
  return (
    <main className="w-full h-full card">
      <CreateEmbedding />
      {/* <Chat /> */}
      {/* <ExamplePrompt /> */}
      {/* <CreatingEmbeddings /> */}
    </main>
  );
}
