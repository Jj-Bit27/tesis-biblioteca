import img1 from "../assets/image.jpg";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";
import Carousel from "../components/Carrousel.jsx";

export default function Home() {
  const slides = [img1, img2, img3];
  return (
    <div>
      <Carousel>
        {slides.map((slide, i) => (
          <img key={i} src={slide} />
        ))}
      </Carousel>
      <h3 className="mt-4" style={{ color: "#198754" }}>
        Bienvenido a tu biblioteca escolar
      </h3>{" "}
      <br />
      <p className="text-light mt-4">
        Documentacion y mas información <a href="#">aquí.</a>
      </p>
    </div>
  );
}
