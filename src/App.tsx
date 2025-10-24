/*Exercise 2 — Avatar Card
Create a component <Avatar /> that takes props:
  •	image (string, URL)
  •	firstName
  •	lastName
and displays the person’s picture and full name.

(Goal: pass multiple props and render them dynamically)*/

import Avatar from "./Avatar";

export default function App() {
  const Avatars = [{
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Portrait_of_Neytiri.jpg",
    firstName: "Neytiri",
    lastName: "Avatar"
  },
  {
    imgSrc: "https://static.wikia.nocookie.net/james-camerons-avatar/images/1/1e/Lo%27ak.jpg/revision/latest/scale-to-width-down/1200?cb=20221230185604&path-prefix=fr",
    firstName: "Lo'ak",
    lastName: "Avatar"
  }]
  return (
    <>
      <Avatar avatar={Avatars[0]} />
      <Avatar avatar={Avatars[1]} />
    </>
  )
}