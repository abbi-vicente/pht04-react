import React from "react";

const Welcome = (props) => {
  const isLoggedIn = true;
  const names = ["Lance", "Joren", "Sylar"];
  const greeting = "Hello React!";

  return (
    <div>
      <h1>{greeting}</h1>
      <p>
        Welcome,{" "}
        {isLoggedIn
          ? ("User",
            (
              <ul>
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            ))
          : "Guest"}
      </p>
      <style>
        {`
        h1 {
          color: blue
        }
        `}
      </style>
    </div>
  );
};

export default Welcome;
