import PodAudioSlide from "../Components/PodAudioSlide/PodAudioSlide"
import PodComingSoon from "../Components/PodComingSoon/PodComingSoon"
import PodYoutube from "../Components/PodYoutube/PodYoutube"
import PodcastNav from "../Components/PodcastNav/PodcastNav"

const Podcast = () => {
  return (
    <div className="mb-5">
      <PodcastNav />
      <PodAudioSlide />
      <PodYoutube />
      <PodComingSoon/>
    </div>
  )
}

export default Podcast
