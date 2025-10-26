/*🎨 Level 5 — Conditional Rendering + State

Exercise 7 — Show/Hide Details
Create a <UserCard /> that shows a user’s name and a “Show details” button.
When clicked, it toggles showing email + age (coming from props).

(Goal: conditional rendering + state toggling)*/
import { useState } from "react";

export function UserCard({ CardProp }) {
    const [userDetails, setUserDetails] = useState(false)

    function Toggle() {
        setUserDetails(!userDetails)
    }
    return (
        <>
            <h1>{CardProp.username}</h1>
            <button type="button" onClick={Toggle}>{userDetails ? "Hide details" : "Show details"}</button>

            {
                userDetails && (
                    <>
                        <span>Email : {CardProp.email}</span>
                        <span>Age : {CardProp.age}</span>
                    </>)
            }
        </>
    )
}