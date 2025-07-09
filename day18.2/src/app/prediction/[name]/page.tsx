const getPredictedAge = async (name: string) => {
    const res = await  fetch(`https://api.agify.io?name=${name}`)
    return res.json();
}

const getPredictedGender = async (name: string) => {
    const res = await  fetch(`https://api.genderize.io?name=${name}`)
    return res.json();
}

const getPredictedCountry = async (name: string) => {
    const res = await  fetch(`https://api.nationalize.io?name=${name}`)
    return res.json();
}

interface Params {
    params: {name: string}
}

export default async function Page({params}: Params){
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-md p-8 w-[500px] text-left rounded">
    <div className="text-3xl text-blue-600 mb-4">Personal Info</div>
    <div className="text-black">Age: {age?.age}</div>
    <div className="text-black">Gender: {gender?.gender}</div>
    <div className="text-black">Country: {country?.country[0]?.country_id}</div>
  </div>
</div>

    )
}