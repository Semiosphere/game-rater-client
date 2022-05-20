import React, { useState, useEffect } from "react"
import { getGameById, deleteGame, getReviews } from "./GameManager.js"
import { useParams, useHistory } from 'react-router-dom'


export const GameDetails = () => {
    const { gameId } = useParams()
    const history = useHistory()
    const [game, setGame] = useState({})

    useEffect(() => {
        getGameById(gameId).then((res) => {
            setGame(res)
        })
    }, [])


    return (
        <article className="singleGame">
            <h2 id="single_game_title">{game.title}</h2>
            <div id="single_game_designer">Designed by {game.designer}</div>
            <div id="single_game_release_year">Released {game.release_year}</div>
            <div id="single_game_number_of_players">Number of players: {game.number_of_players}</div>
            <div id="single_game_est_playtime">Estimated playtime: {game.est_playtime}</div>
            <div id="single_game_rec_age">Recommended Age: {game.rec_age}</div>
            <div id="single_game_categories">Game categories:
                {
                    game.category?.map(category => {
                        return <div key={`category--${category.id}`} className="category">{category.name}</div>
                    })
                }
            </div>
            <button onClick={() => history.push(`/games/${gameId}/review`)} >Review Game</button>
            <button onClick={() => deleteGame(game.id).then(setGame)} >Delete Game</button>
            <div className="single_game_review_list"> Reviews:
                {
                    game.reviewed?.map(newReview => {
                        return <div key={`review--${newReview.id}`} className="review">{newReview.review}</div>
                    })
                }
            </div>
        </article>
    )
}