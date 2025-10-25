/*Exercise 4 — Like Button
Create a <LikeButton /> that toggles between:
    •	🤍 when not liked
    •	❤️ when liked

When clicked, it should change state.

(Goal: boolean state)*/

import { useState } from "react"

export function LikeButton() {
    const [like, setLike] = useState(false)

    function ToggleLike() {
        setLike(!like)
    }

    return (
        <>
            <button type="button" onClick={(ToggleLike)}>{like ? "❤️" : "🤍"}</button >
        </>
    )
}