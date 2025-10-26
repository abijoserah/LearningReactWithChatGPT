import { UserCard } from "./UserCard";

export default function App() {
    const UserCardProps = [
        {
            username: "Serah1",
            email: "serahabijo94@gmail.com",
            age: 23
        },
        {
            username: "Virgile20",
            email: "vir20@gmail.com",
            age: 29
        }
    ]
    return (
        <>
            <UserCard CardProp={UserCardProps[0]} />
            <UserCard CardProp={UserCardProps[1]} />
        </>
    )
}