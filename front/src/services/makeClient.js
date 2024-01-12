import axios from "axios"
import deepmerge from "deepmerge"

export const makeClient = (options = {}) =>
  axios.create(
    deepmerge(
      {
        baseURL: "http://back:3000",
      },
      options
    )
  )
