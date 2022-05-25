import axios from "axios"

export const requestApi = {

  // getRequest() {
  //   axios.get('https://neko-cafe-back.herokuapp.com/auth/test')
  //     .then((res) => res.data)
  // },

  sendRequest(isChecked: boolean) {
   return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: isChecked})
      // .then((res) => res.data)
  }
}
