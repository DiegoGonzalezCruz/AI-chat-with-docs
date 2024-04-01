"use client";
const CreateEmbeddingButton = ({ createEmbedding }) => {
  const handleClick = () => {
    createEmbedding;
  };
  return (
    <button className="btn btn-primary bg-red-500" onClick={handleClick}>
      Create embedding
    </button>
  );
};

export default CreateEmbeddingButton;
