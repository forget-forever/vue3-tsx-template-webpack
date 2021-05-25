import { IGlobalData } from "./utils/globalInterfaces"

const globalData: IGlobalData = {
  sig: {a: 0, b: 1},
  aa: 0,
  pageFunction: {
  },
  install: function() {
    console.log(this, 'globalData')
  },
}

export default globalData