
import axios from 'axios'

async function fetchContent () {
  try {
    const { data } = await axios.get('https://vue-second-homework-default-rtdb.europe-west1.firebasedatabase.app/content.json')
    return data
  } catch (error) {
    console.warn(error.message)
  }
}

async function postContent (content) {
  try {
    const response = await fetch('https://vue-second-homework-default-rtdb.europe-west1.firebasedatabase.app/content.json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        value: content.value,
        type: content.type
      })
    })

    const firebaseData = await response.json()
    console.log(firebaseData)
  } catch (error) {
    console.warn(error.message)
  }
}

async function fetchComments () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
    return await response.json()
  } catch (error) {
    console.warn(error.message)
  }
}

export default {
  fetchContent,
  postContent,
  fetchComments
}
