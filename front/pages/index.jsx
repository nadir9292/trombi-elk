import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react"

const toto = {
  employees: [
    {
      id: 1,
      name: "nadir",
      firstname: "mans",
      job: "dev",
    },
    {
      id: 2,
      name: "toto",
      firstname: "tito",
      job: "dev",
    },
    {
      id: 1,
      name: "nadir",
      firstname: "mans",
      job: "dev",
    },
    {
      id: 2,
      name: "toto",
      firstname: "tito",
      job: "dev",
    },
    {
      id: 1,
      name: "nadir",
      firstname: "mans",
      job: "dev",
    },
    {
      id: 2,
      name: "toto",
      firstname: "tito",
      job: "dev",
    },
    {
      id: 1,
      name: "nadir",
      firstname: "mans",
      job: "dev",
    },
    {
      id: 2,
      name: "toto",
      firstname: "tito",
      job: "dev",
    },
    {
      id: 1,
      name: "nadir",
      firstname: "mans",
      job: "dev",
    },
    {
      id: 2,
      name: "toto",
      firstname: "tito",
      job: "dev",
    },
    {
      id: 1,
      name: "nadir",
      firstname: "mans",
      job: "dev",
    },
    {
      id: 2,
      name: "toto",
      firstname: "tito",
      job: "dev",
    },
  ],
}

const Home = () => {
  const [label, setLabel] = useState("")
  const [data, setData] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setData(toto)
    console.log(event.currentTarget.searchLabel.value)
  }

  return (
    <div className="grid grid-cols-1 gap-4 ">
      <div className="mt-8 mb-2 w-96 grid grid-cols-1 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              placeholder="name, firstname, job , etc"
              className="px-2 py-4 border border-2 border-gray-900 !border-t-blue-gray-300  w-full bg-gray-300 rounded-lg focus:!border-t-gray-900 placeholder-gray-900"
              name="searchLabel"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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
          {data && data.employees && data.employees.length > 0 ? (
            data.employees.map(({ id, name, firstname, job }, index) => (
              <div
                key={index}
                className="hover:scale-105 shadow-lg bg-red-400 py-4 px-4 rounded-xl"
              >
                <div className="mt-4 grid grid-cols-1">
                  <Typography color="white">{id}</Typography>
                  <Typography color="white" className="items-center font-bold">
                    {name} {firstname}
                  </Typography>
                  <Typography color="white">{job}</Typography>
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
