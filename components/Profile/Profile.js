import React, { useEffect, useState } from "react";
import axios from "axios";
import _get from "lodash/get";

export default function Profile() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/api/getUser");
      setUserData(response.data);
    };
    getUser();
  }, []);

  return (
    <div>
      <h2>{userData.name}</h2>
      <img src={_get(userData, "avatar_urls[96]")} alt="avatar" />
      <div>id: {userData.id}</div>
    </div>
  );
}
