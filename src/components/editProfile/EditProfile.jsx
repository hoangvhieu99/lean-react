import { useState } from "react";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("hieu");
  const [lastName, setLastName] = useState("hoang");
  const [clickEdit, setClickEdit] = useState(false);

  let fullName = firstName + " " + lastName;
  const handleChangeFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLN = (e) => {
    setLastName(e.target.value);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setClickEdit(!clickEdit);
  };
  return (
    <div className="w-full">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleEdit}
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          {clickEdit ? (
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={handleChangeFN}
            />
          ) : (
            <span className="mb-2 text-gray-700 text-sm font-medium">
              {firstName}
            </span>
          )}
        </div>
        <div className="mb-6 flex items-center justify-center gap-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          {clickEdit ? (
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={lastName}
              onChange={handleChangeLN}
            />
          ) : (
            <span className="mb-2 text-gray-700 text-sm font-medium">
              {lastName}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {clickEdit ? "Save" : "Edit"} Profile
          </button>
        </div>
        <div className="flex items-center justify-center">
          <p>Hello, {fullName}</p>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
