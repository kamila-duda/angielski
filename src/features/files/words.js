import { school } from "./categories/school";
import { fruits } from "./categories/fruits";

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
];
