import React from "react";
import Slider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import PersianCalendar from "./PersianCalendar";

class Home extends React.Component {
    
    render() {
      let t = [
      { title: "fvreef" },
      { title: "fvreef" },
      { title: "fvreef" },
      { title: "fvreef" },
      { title: "fvreef" },
      { title: "fvreef" },
      { title: "fvreef" },
      { title: "fvreef" },
    ];
    return (
      <>
        <h1 className="d-flex align-items-center justify-content-center p-2">
          class
        </h1>
        <Swiper
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {t.map((item) => {
            return (
              <>
                <SwiperSlide>
                  <div className="profile-card-6">
                    <img
                      src="/logo512.png"
                      className="img img-responsive"
                      alt="alaki"
                    />
                    <div className="profile-name">
                      {item.title}
                      <br />
                      DOE
                    </div>
                    <div className="profile-position">Lorem Ipsum Donor</div>
                    <div className="profile-overview">
                      <div className="profile-overview">
                        <div className="row text-center">
                          <div className="col-xs-4">
                            <h3>1</h3>
                            <p>Rank</p>
                          </div>
                          <div className="col-xs-4">
                            <h3>50</h3>
                            <p>Matches</p>
                          </div>
                          <div className="col-xs-4">
                            <h3>35</h3>
                            <p>Goals</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </>
    );
  }
}

export default Home;
