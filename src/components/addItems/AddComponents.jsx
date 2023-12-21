import { useState } from "react";
import { submitForm } from "../forms/Forms";
const AddComponents = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setIsLoading(true);
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
    setIsLoading(false);
  };

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
  };
  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center my-6 justify-center gap-3">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={answer}
              onChange={handleTextareaChange}
              disabled={status === "submitting"}
            />
          </div>
          <div>
            <button
              className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={answer.length === 0 || status === "submitting"}
            >
              Add
            </button>
          </div>
        </div>
        {isLoading
          ? "Loading..."
          : error !== null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
};

export default AddComponents;
