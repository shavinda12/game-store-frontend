import useGames from '../hooks/useGames'

const GamesGrid = () => {
    const{games,error}=useGames()
  return (
    <>
    {error&&<p>{error}</p>}
    <ul>
        {games.map((rows)=>(
            <li key={rows.id}>{rows.name}</li>
        ))}
    </ul>
    </>
  )
}

export default GamesGrid