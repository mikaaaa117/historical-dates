import { SwiperSlide } from "swiper/react";
import "./EventItem.scss";

interface SwiperItemProps {
  date: number;
  body: string;
}

export const EventItem: React.FC<SwiperItemProps> = ({ date, body }) => {
  return (
    <SwiperSlide>
      <h3>{date}</h3>
      <p>{body}</p>
    </SwiperSlide>
  );
};
