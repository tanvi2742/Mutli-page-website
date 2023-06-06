import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name},Contact us here...</h2>
      <p>
        Quis officia culpa irure minim in excepteur duis nisi ipsum Lorem. Enim
        do in quis adipisicing. Veniam exercitation adipisicing quis enim do in
        cupidatat aliquip. Pariatur voluptate aliquip velit dolore sit non
        fugiat. Consequat irure nostrud nulla ipsum duis quis consequat amet
        sunt enim.
      </p>
    </div>
  );
}
