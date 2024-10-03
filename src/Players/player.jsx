export default function Player({players}) {
    const displayPlayers = () => {
        return players.map(_ => <li>{_}</li>)
    }
    return <>
        <h1 className='Players'>Players Real Madrid</h1>
        <ul>
            {displayPlayers()}
        </ul>
    </>
}