import React from "react";
function getLink(link) {
  if (link.includes("https")) {
    return link;
  }
  return "https://robertsspaceindustries.com" + link;
}

export function ProductPage({ product }) {
  const { id, name, description, mass, media } = product;
  const { avatar, cover } = media[0].images;
  return (
    <div>
      <h1>Product{id}</h1>
      <h2>name : {name}</h2>
      <h3>price :{mass}</h3>
      <p>Des :{description}</p>
      <img src={getLink(avatar)} alt="avatar" />
      <img src={getLink(cover)} alt={"cover" + name} />
    </div>
  );
}
