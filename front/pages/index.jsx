import { Button, Input, Typography } from "@material-tailwind/react"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [label, setLabel] = useState("")
  const [searchedData, setSearchedData] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    // Mettez à jour les suggestions basées sur la valeur actuelle du label ici
    // Vous pouvez appeler votre endpoint Elasticsearch pour récupérer les suggestions
    // Utilisez une annulation différée pour éviter les appels inutiles lors de la frappe rapide
    const delayedFetchSuggestions = setTimeout(() => {
      fetchSuggestions()
    }, 300)

    return () => clearTimeout(delayedFetchSuggestions)
  }, [label])

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/search/employee?field=job&value=${label}`
      )

      const uniqueJobSet = new Set(
        response.data.map((employee) => employee.job)
      )

      const uniqueJobSuggestions = [...uniqueJobSet]
      setSuggestions(uniqueJobSuggestions)
    } catch (err) {
      console.error("ERROR fetching suggestions: ", err)
    }
  }

  const handleSelectSuggestion = (selectedValue) => {
    // Mettez à jour le label avec la suggestion sélectionnée
    setLabel(selectedValue)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(
        `http://localhost:3000/search/employee?field=job&value=${label}`
      )
      setSearchedData(response.data)
    } catch (err) {
      console.error("ERROR: ", err)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 ">
      <div className="mt-8 mb-2 w-96 grid grid-cols-1 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              placeholder="name, firstname, job, etc"
              className="px-2 py-4 border border-2 border-gray-900 !border-t-blue-gray-300  w-full bg-gray-300 rounded-lg focus:!border-t-gray-900 placeholder-gray-900"
              name="searchLabel"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <ul className="bg-gray-100 rounded-xl py-3 px-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
          <Button
            type="submit"
            className="px-2 py-4 border border-2 border-gray-900  mt-6 mb-4 w-full flex items-center justify-center rounded-lg bg-yellow-400 hover:bg-yellow-500 hover:scale-110"
          >
            SEARCH
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>
        </form>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {searchedData && searchedData.length > 0 ? (
            searchedData.map(({ first_name, last_name, job, age }, index) => (
              <div
                key={index}
                className="hover:scale-105 shadow-lg bg-red-400 py-4 px-4 rounded-xl"
              >
                <div className="mt-4 grid grid-cols-1">
                  <Typography color="white" className="items-center font-bold">
                    {first_name} {last_name}
                  </Typography>
                  <Typography color="white">Job : {job}</Typography>
                  <Typography color="white">Age : {age}</Typography>
                </div>
              </div>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
