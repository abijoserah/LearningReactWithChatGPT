/*Exercise 4 — Like Button
Create a <LikeButton /> that toggles between:
    •	🤍 when not liked
    •	❤️ when liked

When clicked, it should change state.

(Goal: boolean state)*/

import { useState } from "react"

export function LikeButton() {
    const [like, setLike] = useState("🤍")
    return (
        <>
            <button type="button" onClick={() => setLike("❤️")}>{like}</button >
        </>
    )
}