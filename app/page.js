"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import img from "../src/img.png";
import Image from "next/image";
import img2 from "../src/prueba.png";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({ ease: "none" });

    let tl = gsap.timeline();
    tl.to(`.${styles.divs}`, { xPercent: 100 });
    tl.to(`.${styles.divs2}`, { xPercent: -100 }, 0); // Reproduce la animación de divs2 simultáneamente
    tl.to(`.${styles.divs3}`, { xPercent: 100 }, 0);
    tl.from(`.${styles.img}`, { yPercent: -100 }, 1);
    tl.from(`.${styles.seccion3}`, { yPercent: 100, duration: 2 });
    tl.from(`.${styles.seccion4}`, { yPercent: 100, duration: 2 });
    tl.from(`.${styles.img2}`, { scale: 10, duration: 2 });
    tl.to(`.${styles.img2}`, { xPercent: -100, duration: 2 });

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        animation: tl,
        trigger: `.${styles.container_sections}`,
        start: "top top",
        end: "+=4000",
        markers: true,
        scrub: 2,
        pin: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <main className={styles.container_sections}>
        <section className={` ${styles.seccion1}`}>
          <div className={styles.divs} />
          <div className={styles.divs2} />
          <div className={styles.divs3} />
        </section>
        <section className={` ${styles.seccion2}`}>
          <Image className={styles.img} src={img} alt="img" />
          <h2>seccion 2</h2>
        </section>
        <section className={` ${styles.seccion3}`}>
          <h2>seccion 3</h2>
        </section>

        <section className={` ${styles.seccion4}`}>
          <div className={styles.container_text}>
            <h2>seccion 4</h2>
            <h2>seccion 4</h2>
            <h2>seccion 4</h2>
          </div>

          <section className={` ${styles.seccion5}`}>
            <div className={styles.container_image}>
              <Image className={styles.img2} src={img2} alt="img" />
            </div>
            {/* 
            <div className={styles.container_semiSection}></div> */}
          </section>
        </section>
      </main>
    </section>
  );
}
