import { useContext } from "react";
import { GlobalContext } from "../../context/context-index";
import RecipeItem from '../../components/recipe-item/recipe-item-index';


export default function Favorites() {

    const { favoritesList } = useContext(GlobalContext);

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {favoritesList && favoritesList.length > 0 ? (
                favoritesList.map((item) => <RecipeItem item={item} />)
            ) : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing to show. Add your favorite recipes to view here!
                    </p>
                </div>
            )}
        </div>
    )
}