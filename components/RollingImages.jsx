import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";
import img14 from "../assets/images/14.png";
import img15 from "../assets/images/15.png";
import img16 from "../assets/images/16.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";
import img19 from "../assets/images/19.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import img24 from "../assets/images/24.png";
import img25 from "../assets/images/25.png";
import img26 from "../assets/images/26.png";
import img27 from "../assets/images/27.png";
import img28 from "../assets/images/28.png";
import img29 from "../assets/images/29.png";
import img30 from "../assets/images/30.png";
import img31 from "../assets/images/31.png";
import img32 from "../assets/images/32.png";
import img33 from "../assets/images/33.png";
import img34 from "../assets/images/34.png";
import img35 from "../assets/images/35.png";
import img36 from "../assets/images/36.png";
import img37 from "../assets/images/37.png";
import img38 from "../assets/images/38.png";
import img39 from "../assets/images/39.png";
import img40 from "../assets/images/40.png";
import img41 from "../assets/images/41.png";
import img42 from "../assets/images/42.png";
import img43 from "../assets/images/43.png";
import img44 from "../assets/images/44.png";
import img45 from "../assets/images/45.png";
import img46 from "../assets/images/46.png";
import img47 from "../assets/images/47.png";
import img48 from "../assets/images/48.png";
import img49 from "../assets/images/49.png";
import img50 from "../assets/images/50.png";

function RollingImages() {
  const [currentImage, setCurrentImage] = useState(img1);
  let index = 1;
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
  ];
  useEffect(() => {
    setInterval(() => {
      setCurrentImage(images[index]);
      index++;
      if (index === 49) {
        index = 0;
      }
    }, 2500);
  }, []);
  return (
    <div className={styles.card}>
      <Image src={currentImage} width={160} height={253} />
    </div>
  );
}

export default RollingImages;
