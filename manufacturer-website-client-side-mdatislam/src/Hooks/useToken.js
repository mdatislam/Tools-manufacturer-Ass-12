import React, { useState } from "react";
import { useEffect } from "react";

const UseToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    console.log(email);
    if (email) {
      fetch(`http://https://still-spire-24654.herokuapp.com/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          const accessToken = result.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default UseToken;
