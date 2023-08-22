import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function SearchResultDetail() {
  const { id } = useParams();
  console.log(id);
  //   const location = useLocation();
  //   const providerProfile = location.state;
  //   console.log(providerProfile);
  return (
    <main>
      <h2> helo</h2>
    </main>
  );
}
