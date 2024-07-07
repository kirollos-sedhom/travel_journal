/* eslint-disable react/jsx-key */
import Header from './components/Header.jsx'
import Card from './components/Card'
import data from '../data.js'
import './App.css'

function App() {
  const cards = data.map(item =>{
    return (
      <Card
      title={item.title} 
      imageUrl={item.imageUrl}
      description={item.description}
      googleMapsUrl={item.googleMapsUrl}
      location={item.location}
      startDate={item.startDate}
      endDate={item.endDate}
      />
    )
  })
  console.log(cards)

  return (
    <>
      <Header />
      {cards}
      {/* <Card title="mount fugi" imageUrl="alex2.jpg" description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." /> */}
    </>
  )
}

export default App
