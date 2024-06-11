type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
  lang: string[];
};

const User = ({ name, age, isRegistered, lang }: UserProps) => {
  return (
    <div>
      <h1>My Name Is {name}</h1>
      <p>Age: {age}</p>
      <p>{isRegistered ? "Registered User" : "Not Registered User"}</p>
      <p>
        Speaks:{" "}
        {lang.map((language, index) => (
          <span key={index}>{language} </span>
        ))}
      </p>
    </div>
  );
};

export default User;
