export default function Avatar({ avatar }) {
    const { imgSrc, firstName, lastName } = avatar
    return (
        <>
            <img src={imgSrc} width={500} />
            <h1>{firstName} {lastName}</h1>
        </>
    )
}