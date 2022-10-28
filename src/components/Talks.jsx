import React from "react";
import { Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Talks = () => {
  return (
    <div style={{ padding: "0 10px" }}>
      <Typography variant="h5" sx={{paddingLeft: "30px", fontWeight:"400", fontSize: "20px"}}>
        Have you listened to our podcast yet? Check it out!
      </Typography>
      <div style={{ padding: "0 30px" }}>
        <Swiper spaceBetween={2} slidesPerView={3}>
          {/* Swiper component shows 3 slides per view */}
          <SwiperSlide>
            {/* first card */}
            <div
              style={{
                height: "380px",
                background: "URL(/talks.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                width: "325px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  background: "#70707059",
                  color: "#fff",
                  padding: "15px 10px",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Episode 33: Let's talk about Zustand with Daishi Kato
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* second card */}
            <div
              style={{
                height: "380px",
                background: "URL(/talks.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                width: "325px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  background: "#70707059",
                  color: "#fff",
                  padding: "15px 10px",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Episode 33: Let's talk about Zustand with Daishi Kato
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* third card */}
            <div
              style={{
                height: "380px",
                background: "URL(/talks.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                width: "325px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  background: "#70707059",
                  color: "#fff",
                  padding: "15px 10px",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Episode 33: Let's talk about Zustand with Daishi Kato
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* fourth card */}
            <div
              style={{
                height: "380px",
                background: "URL(/talks.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                width: "325px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  background: "#70707059",
                  color: "#fff",
                  padding: "15px 10px",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Episode 33: Let's talk about Zustand with Daishi Kato
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Typography variant="h5" sx={{ fontWeight: "lighter", fontSize: "18px", paddingLeft: "30px" }}>
        Check out the full list of episodes here...
      </Typography>
    </div>
  );
};

export default Talks;
