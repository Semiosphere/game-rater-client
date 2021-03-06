export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (newGame) => {
    return fetch("http://localhost:8000/games", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
    })  
}

export const updateGame = game => {
    return fetch(`http://localhost:8000/games/${game.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
        .then(getGames)
}

export const getGameById = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(gameId)
    })
        .then(getGames)
}

export const createReview = (newReview) => {
    return fetch("http://localhost:8000/reviews", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
        //body refers to content of payload tab
    })  
}

export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
