import React, { useState, useEffect } from "react"
import { getGames } from "./GameManager.js"
import { Link, useHistory } from 'react-router-dom'


export const GameList = () => {
    const history = useHistory()
    const [games, setGames] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    //useEffect(() => {what}, [when])


    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <Link className="game__title" to={`/games/${game.id}`}>{game.title}</Link>
                    </section>
                })
            }
        </article>
    )
}