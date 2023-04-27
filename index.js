const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Google Search')
})

let data = [
  {
    title: 'JS Tutorials',
    description: 'The best Javascript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'JS Tutorials1',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners1',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web1',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'JS Tutorials2',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners2',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web2',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
]

app.get('/results', (req, res) => {
  // let str = req.query.search
  let filteredData = []

  function filterData(str) {
    let count = 0
    data.map((e) => {
      if (e.title.toUpperCase().includes(str.toUpperCase())) {
        filteredData[count] = e
        count++
      } else {
        if (e.description.toUpperCase().includes(str.toUpperCase())) {
          filteredData[count] = e
          count++
        } else {
          if (e.url.toUpperCase().includes(str.toUpperCase())) {
            filteredData[count] = e
            count++
          }
        }
      }
      return filteredData
    })
  }
  filterData(req.query.search)
  res.send(filteredData)
})

app.listen(4000, () => {
  console.log('Server is listening')
})
