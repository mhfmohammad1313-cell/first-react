import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";

import PersianCalendar from "./PersianCalendar";
import Home from "./class";
import { useContext, useEffect, useState } from "react";
import UserContext from "./context";


export default function ShabibiSlider() {
  const user = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setUsers(data);
      })

      // .then((res) => {
      //     return res.json()
      // })

      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);
  return (
    <>
      <h2>best products</h2>
      <hr />

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
        {users.map((item) => {
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
      <hr />
      <PersianCalendar />
      <Home />
    </>
  );
}
