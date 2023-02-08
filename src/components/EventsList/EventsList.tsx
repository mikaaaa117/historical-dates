import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./EventsList.scss";
import { FC, useEffect, useLayoutEffect, useRef } from "react";
import { Navigation } from "swiper";
import { EventItem } from "../EventItem/EventItem";
import gsap from "gsap";

interface HistoricalEvent {
  id: number;
  date: number;
  body: string;
}

interface EventsProps {
  items: HistoricalEvent[];
}

export const EventsList: FC<EventsProps> = ({ items }) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(el.current, {
        y: 10,
        delay: 0.3,
        opacity: 0,
      });
    });

    return () => {
      ctx.revert();
    };
  });

  useLayoutEffect(() => {
    return () => {
      const ctx = gsap.context(() => {
        gsap.to(el.current, {
          opacity: 0,
          duration: 0.5,
        });
      });
      ctx.revert();
    };
  });
  return (
    <div className="events-list" ref={el}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView="auto"
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {items &&
          items.map((item) => (
            <SwiperSlide key={item.id}>
              <EventItem date={item.date} body={item.body} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
