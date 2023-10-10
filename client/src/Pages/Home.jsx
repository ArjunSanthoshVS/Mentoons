import Category from "../Components/Category/Category"
import FirstSlider from "../Components/First_Slider/FirstSlider"
import Navbar from "../Components/Navbar/Navbar"
import Trending from "../Components/Trending/Trending"
import Workshop_Banner from "../Components/Workshop_Banner/Workshop_Banner"

const Home = () => {
  return (
    <>
      <Navbar />
      <Trending />
      <FirstSlider />
      <Workshop_Banner />
      <Category/>
    </>
  )
}

export default Home
