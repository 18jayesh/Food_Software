    import { useSearch } from "../../context/SearchContext";

    import TopNavbar from "./TopNavbar";
    import SearchBar from "../../components/Search/SearchBar";
    import FilterBar from "./FilterBar";
    import RecipeFeed from "./RecipeFeed";

    export default function Home() {

        const {

            search,

            setSearch

        } = useSearch();

        return (

            <>
                {/* ================= Filters ================= */}

                <FilterBar />

                {/* ================= Recipes ================= */}

                <RecipeFeed />

            </>

        );

    }