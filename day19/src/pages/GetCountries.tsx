import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";

interface Country {
    code: number;
    name: string;
    emoji: string;
}

const GetCountries = () => {
    const {data, loading, error} = useQuery(GET_COUNTRIES);

    if(loading) {
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error</div>
    }
    return (
        <div>
            {data.countries.map((country: Country) => (<li key={country.code}>{country.name} {country.emoji}</li>))}
            
        </div>
    )
}

export default GetCountries;