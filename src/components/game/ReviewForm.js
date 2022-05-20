import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createReview, getGameById } from "./GameManager"

export const ReviewForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    //useParams pulls data from the url
    const [games, setGames] = useState([]);
    const [ currentReview, setCurrentReview ] = useState({})
    
    
    const handleChange = (event) => {
        const tempReview = {
            review: event.target.value
        }
        setCurrentReview(tempReview)
    }

    useEffect(() => {
        getGameById(gameId).then((res) => {
            setGames(res)
        })
    }, [])
    
    
    return (
        <form className="reviewForm">
            <textarea onChange={handleChange} name="review" />
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const submittedReview = {
                        player: localStorage.getItem("lu_token"),
                        // player = Player.objects.get(user=request.data["player"])
                            // serializer = CreateGameSerializer(data=request.data)
                            // serializer.is_valid(raise_exception=True)
                            // serializer.save(player=player)
                            // return Response(serializer.data, status=status.HTTP_201_CREATED)
                        game: gameId,
                        review: currentReview.review
                    }
                    createReview(submittedReview)
                }}
                className="btn btn-primary">Submit review</button>
        </form>
    )
}



//get the data to the server --- text of review and game id needs to get to the server
//after submitting review, push back to game detail page




//when user clicks "add review" btn, route to "/games/:gameId(\d+)/review"

//here, a user can write a review and submit it

//when the submit btn is clicked, the text and game id are sent to the database and
//the user is routed back to the game detail page where all reviews for that game 
//are listed