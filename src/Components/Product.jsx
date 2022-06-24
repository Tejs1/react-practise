import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
const list = data.data;

export function Product() {
  const { id } = useParams();
  const { name, description, mass, media } = list.find(
    (ship) => ship.id === id
  );
  const { avatar, cover } = media[0].images;

  function getLink(link) {
    if (link.includes("https")) {
      return link;
    }
    return "https://robertsspaceindustries.com" + link;
  }
  return (
    <div>
      <h1>Product{id}</h1>
      <h2>{name}</h2>
      <h3>{mass}</h3>
      <p>{description}</p>
      <img src={getLink(avatar)} alt="avatar" />
      <img src={getLink(cover)} alt={"cover" + name} />
    </div>
  );
}
