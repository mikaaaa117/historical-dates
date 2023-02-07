import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./EventsList.scss";
import { FC } from "react";
import { Navigation } from "swiper";
import { EventItem } from "../EventItem/EventItem";

interface HistoricalEvent {
  id: number;
  date: number;
  body: string;
}

interface EventsProps {
  items: HistoricalEvent[];
}

export const EventsList: FC<EventsProps> = ({ items }) => {
  return (
    <div className="events-list">
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
            <SwiperSlide>
              <EventItem key={item.id} date={item.date} body={item.body} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
