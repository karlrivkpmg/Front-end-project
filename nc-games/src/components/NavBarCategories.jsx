import { Link } from "react-router-dom"
import {getCategories} from "../api"
import { useEffect, useState } from "react"
export const NavBarCategories = () =>{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
        .then((categories)=>{
            setCategories(categories);
        })
    }, [])

    return (
            <nav>
            {categories.map((category)=>(
                <Link style={{ textDecoration: 'none'}} to={`/reviews/category/${category.slug}`}
                className="link-text"
                key={category.slug}    
                > | {category.slug} </Link>
            ))}
            </nav>
    )


}