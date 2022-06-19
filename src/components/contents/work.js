import SwiperCore, { EffectCoverflow, Pagination , Navigation, Scrollbar, A11y} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const Work = (props) => {
    const { name, company, details, technologies, images } = props.details;

    return (
        <div className="company-projects" >
            
            <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               spaceBetween={10}
               slidesPerView={3}
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log('slide change')}
                >
                {
                    (images) ? images.map((image, i) => {
                        return (
                            // <SwiperSlide> {image} </SwiperSlide>
                            <SwiperSlide  key={i}>
                                <img src={'./assets/projects/' + image.image} style={{width: image.width}} alt="" />
                            </SwiperSlide>
                        )
                    }) : null
                }
            </Swiper>
            {/* { ( images) ? <Carousel responsive={responsive}>
                { 
                    images.map((image, key) => {
                        return (
                            <div key={key}>
                                test
                            </div>
                        )
                    })
                }
            </Carousel>  : null } */}

            <div className="project-details hero ">
                <div className="project-details-holder">
                    <span className="label"> Project </span>
                    <h3 > { name } </h3>
                </div>

                <div className="project-details-holder">
                    <span className="label"> Company </span>
                    <h3 > { company } </h3>
                </div>

                <div className="project-details-holder">
                    <span className="label"> Details </span>
                    <h3 > { details } </h3>
                </div>

                <div className="project-details-holder">
                    <span className="label"> Technologies </span>
                    <h3 > { technologies } </h3>
                </div>
            </div>

        </div>
    );
}

export default Work;
  