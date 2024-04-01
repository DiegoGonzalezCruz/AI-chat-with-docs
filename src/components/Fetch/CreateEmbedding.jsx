import React from "react";

const CreateEmbedding = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-bold">Chat with Documents</h1>
            {/* <p className="py-6">
              Create embedding
            </p> */}
            <button className="btn btn-primary bg-red-500">Create embedding</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmbedding;
