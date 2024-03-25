import { useContext } from "react"
import { GlobalContext } from "../../context/context-index"
import RecipeItem from "../../components/recipe-item/recipe-item-index";


export default function Home() {

    const {recipeList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading...</div>

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {recipeList && recipeList.length > 0 ?
            recipeList.map(item => <RecipeItem item={item} />) 
            : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        What are you in the mood for? <br></br>Search recipes above.
                    </p>
                </div>
            )}
        </div>
    )
}