import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"
import { GameDetails } from "./game/GameDetails.js"
import { CategoryList } from "./category/categoryList.js"
import { ReviewForm } from "./game/ReviewForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/new">
                <GameForm />
            </Route>
            <Route path="/games/:gameId(\d+)">
                <GameDetails />
            </Route>

            <Route path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>

            <Route exact path="/categories">
                <CategoryList />
            </Route>
        </main>
    </>
}