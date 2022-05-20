import React, { useState, useEffect } from "react"
import { getCategories } from "./CategoryManager.js"
import { Link } from 'react-router-dom'

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    //useEffect(() => {what}, [when])


    return (
        <article className="categories">
            {
                categories.map(category => {
                    return <section key={`category--${category.id}`} className="category">
                        <li className="category__name" to={`/categories/${category.id}`}>{category.name}</li>
                    </section>
                })
            }
        </article>
    )
}