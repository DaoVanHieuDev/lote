import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
function DarkVariantExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width:"100%",height:"100%",objectFit:"cover"}} src="./banner_web-01_9.png" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%",height:"100%",objectFit:"cover"}} src="./banner_tai_app_web.jpg" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%",height:"100%",objectFit:"cover"}} src="./banner__web_deli.jpg" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%",height:"100%",objectFit:"cover"}} src="./banner-dli-01_2.jpg" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
