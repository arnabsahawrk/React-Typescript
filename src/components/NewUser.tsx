import React, { FormEvent, MouseEvent, useState } from "react";

const NewUser = () => {
  const [newUser, setNewUser] = useState<string>("");
  const [showUser, setShowUser] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setShowUser(!showUser);
  };

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={handleFormSubmission}>
        <input
          name="name"
          type="text"
          placeholder="Enter Your Thought"
          value={newUser}
          onChange={handleInput}
        />
        <p>{showUser && newUser}</p>
        <button onClick={handleClick}>
          {showUser ? "Hide Name" : "Show Me Name"}
        </button>

        <input type="text" placeholder="Enter Your Thought" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewUser;
