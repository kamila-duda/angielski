import lemon from "./../sounds/lemon.ogg";
import orange from "./../sounds/orange.ogg";
import banana from "./../sounds/banana.ogg";
import pen from "./../sounds/pen.ogg";
import pencil from "./../sounds/pencil.ogg";
import ruler from "./../sounds/ruler.ogg";

export const words = [
  {
    title: "przybory szkolne",
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517237284472-3b62e4863e4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    border: false,
    words: [{
        title: "pen",
        image:
          "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        sounds: pen,
      },
      {
        title: "pencil",
        image:
          "https://images.unsplash.com/photo-1598714479411-a11ad65f7b2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
          sounds: pencil,
      },
      {
        title: "ruler",
        image:
          "https://images.unsplash.com/photo-1529651795107-e5a141e34843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          sounds: ruler,
      }],
  },
  {
    title: "owoce",
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    border: false,
    words: [
      {
        title: "banana",
        image:
          "https://images.unsplash.com/photo-1579523360587-1e2613000ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          sounds: banana,
      },
      {
        title: "orange",
        image:
          "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
          sounds: orange,
      },
      {
        title: "lemon",
        image:
          "https://images.unsplash.com/photo-1580412092181-219a7b10e6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=650&q=80",
          sounds: lemon,
      },
    ],
  },
];
