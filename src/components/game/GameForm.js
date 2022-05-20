import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame} from './GameManager.js'
import { getCategories } from "../category/CategoryManager"


export const GameForm = () => {
    const history = useHistory()

   
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        number_of_players: "",
        designer: "",
        release_year: 0,
        est_playtime: "",
        rec_age: ""
    })

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((categoryArray) => {setCategories(categoryArray);
        });
    }, []);

    

    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = { ...currentGame};
        copy[domEvent.target.name] = domEvent.target.value;
        setCurrentGame(copy)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameTitle">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        defaultValue={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameDesigner">Designed by: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        defaultValue={currentGame.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameDescription">About this game: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        defaultValue={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameNumberOfPlayers">How many players: </label>
                    <input type="text" name="number_of_players" required autoFocus className="form-control"
                        defaultValue={currentGame.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameReleaseYear">Release year: </label>
                    <input type="text" name="release_year" required autoFocus className="form-control"
                        defaultValue={currentGame.release_year}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameEstPlaytime">Estimated playtime: </label>
                    <input type="text" name="est_playtime" required autoFocus className="form-control"
                        defaultValue={currentGame.est_playtime}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameRecAge">Recommended age: </label>
                    <input type="text" name="rec_age" required autoFocus className="form-control"
                        defaultValue={currentGame.rec_age}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const newGame = {
                        title: currentGame.title,
                        description: currentGame.description,
                        number_of_players: currentGame.number_of_players,
                        designer: currentGame.designer,
                        release_year: parseInt(currentGame.release_year),
                        est_playtime: currentGame.est_playtime,
                        rec_age: currentGame.rec_age
                    }

                    // Send POST request to your API
                    createGame(newGame)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}