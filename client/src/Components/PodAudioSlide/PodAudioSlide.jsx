import './PodAudioSlide.css'
const PodAudioSlide = () => {
  return (
    <>
      <div className="d-flex">
        <div className="left w-50 d-grid">
          <img className="w-100 mt-4 ms-5" src="/mentoons podcast/png1/Mentoons Podcast page uiux-03.png" alt="" />
          <img className="w-75 mt-3 ms-5" src="/mentoons podcast/png1/Mentoons Podcast page uiux-04.png" alt="" />
          <img className="w-50 mt-2 ms-5" src="/mentoons podcast/png1/Mentoons Podcast page uiux-05.png" alt="" />
          <img className="w-50 ms-5 mb-4" src="/mentoons podcast/png1/Mentoons Podcast page uiux-06.png" alt="" />
        </div>
        <div className="right w-50">
          <img className="w-100 mt-5" src="/mentoons podcast/png1/Mentoons Podcast page uiux-02.png" alt="" />
        </div>
      </div>
      <div className="plate"></div>
    </>
  );
}

export default PodAudioSlide;
