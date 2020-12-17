import { school } from "./categories/school";
import { fruits } from "./categories/fruits";
import { colors } from "./categories/colors";
import { toys } from "./categories/toys";
import { beach } from "./categories/beach";
import { numbers } from "./categories/numbers";

export const words = [
  {
    title: "przybory szkolne",
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517237284472-3b62e4863e4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    border: false,
    words: school,
  },
  {
    title: "owoce",
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    border: false,
    words: fruits,
  },
  {
    title: "kolory",
    id: 3,
    image:
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    border: false,
    words: colors,
  },
  {
    title: "zabawki",
    id: 4,
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80",
    border: false,
    words: toys,
  },
  {
    title: "plaża",
    id: 5,
    image:
      "https://images.pexels.com/photos/160773/sandbox-children-child-sand-160773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    border: false,
    words: beach,
  },
  {
    title: "cyfry",
    id: 6,
    image:
      "https://images.unsplash.com/photo-1502570149819-b2260483d302?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    border: false,
    words: numbers,
  },
];
