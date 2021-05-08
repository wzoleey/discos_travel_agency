import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./slide.css";

const items = [
  {
    src: "../../../images/slide_2.jpg",
    altText: "Slide 1",
    caption: "You dream it. We plant it.",
    header: "Book With Us And Book It Out Of Here!",
    key: "1",
  },
  {
    src: "../../../images/slide_1.jpg",
    altText: "Slide 2",
    caption: "You’ll be happy to be back.",
    header: "Go, Find,Explore.",
    key: "2",
  },
  {
    src: "../../../images/slide_3.jpg",
    altText: "Slide 3",
    caption: "Beauty, Charm, And Adventure.",
    header: "Keep calm and travel on.",
    key: "3",
  },
];

const Slide = () => <UncontrolledCarousel items={items} />;

export default Slide;
