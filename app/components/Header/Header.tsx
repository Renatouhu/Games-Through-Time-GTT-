"use client";
import { useState } from "react";
import { Rowdies } from "next/font/google";
import { header, h1, navHeader, list, item1, item2, item3 } from "@/app/components/Header/header.css";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

type colorType = {
  [key: number]: string
  1: string,
  2: string,
  3: string,
  4: string,
}

export function Header() {
  const [colorsLogo, setColorsLogo] = useState<colorType>({
    1: "red",
    2: "#00BF00",
    3: "#0040BF",
    4: "#FFF",
  });

  async function changeColors() {
    const delay = 1000;
    await new Promise((res) => {
      setTimeout(res, delay);
    });
    let newColors = { ...colorsLogo };
    const colorsLogoLength = Object.keys(colorsLogo).length;
    const lastColor = colorsLogo[colorsLogoLength];
    for (let i = 1; i < colorsLogoLength - 1; i++) {
      const prevColor = colorsLogo[i];
      const nextColor = colorsLogo[i + 1];
      Object.defineProperty(newColors, `${i + 1}`, {
        value: prevColor,
        writable: true,
      });
      Object.defineProperty(newColors, `${i + 2}`, {
        value: nextColor,
        writable: true,
      });
    }
    Object.defineProperty(newColors, "1", { value: lastColor, writable: true });
    setColorsLogo(newColors);
  }

  changeColors();
  return (
    <header className={header}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 1000 122"
        >
          <path
            fill={colorsLogo[1]}
            d="M193 1.1c-18.8 2-36.4 14.4-44.4 31.4-4.1 8.6-4.8 11.4-4.8 21.2 0 13.8 4 24.2 13.3 34.6 22.4 25.2 63.4 25.2 85.8 0 9.3-10.4 13.3-20.8 13.3-34.6 0-9.8-.7-12.6-4.8-21.2-6.5-13.7-19.1-24.5-33.9-29C208.3.8 202.2.2 193 1.1"
          />
          <path
            fill={colorsLogo[2]}
            d="M396 1.1c-19 2-36.4 14.4-44.6 31.8-7.6 15.9-6 35.5 4.2 49.7 11.4 16.1 27.7 24.5 47.4 24.5s36-8.4 47.4-24.5c5-7 7.4-13.3 8.5-22.3 3-25.3-13.1-49.1-38.4-56.8C411.3.8 405.2.2 396 1.1"
          />
          <path
            fill={colorsLogo[3]}
            d="M591 1.1c-17 1.8-34.1 12.8-42.5 27.3-9.5 16.4-8.8 37.9 1.6 53.5 10.8 16.1 28 25.2 47.9 25.2 31.5 0 56.1-23.3 56.1-53.2.1-32-29.1-56.4-63.1-52.8"
          />
          <path
            fill={colorsLogo[4]}
            d="M794 1.1c-17 1.8-34.1 12.8-42.5 27.3-12.1 20.8-7.6 47.7 10.7 64.1 18.3 16.5 46.1 19.5 67.5 7.4 22.4-12.7 32.9-38.9 24.9-62C846 13.2 821.4-1.8 794 1.1"
          />
          <path d="M84.9 38.9c-17.8 3.5-21.8 26.6-6.1 35.8l4.7 2.8 32.3.3c17.7.2 32.2.2 32.2-.1 0-.2-.5-1.8-1.1-3.6l-1.1-3.1h-30.6c-33.6 0-34-.1-37.9-5.9-2.8-4.2-3-9.5-.3-13.8 3.7-6.1 4.8-6.3 37.5-6.3 22.9 0 29.5-.3 29.5-1.3 0-.6.3-2.2.6-3.5l.6-2.2-28.3.1c-15.6.1-30 .4-32 .8m170.5 1.3c.3 1.3.6 2.9.6 3.5 0 1 9.8 1.3 45.5 1.3s45.5-.3 45.5-1.3c0-.6.3-2.2.6-3.5l.6-2.2h-93.4zm203 0c.3 1.3.6 2.9.6 3.5 0 1 9 1.3 41.5 1.3s41.5-.3 41.5-1.3c0-.6.3-2.2.6-3.5l.6-2.2h-85.4zm195 0c.3 1.3.6 2.9.6 3.5 0 1 9.8 1.3 45.5 1.3s45.5-.3 45.5-1.3c0-.6.3-2.2.6-3.5l.6-2.2h-93.4zm202.9 0c.4 1.3.7 2.9.7 3.5 0 1 6.6 1.3 29.8 1.3 27.7 0 29.9.1 32.9 2 7.2 4.3 8.4 14.4 2.4 20.4l-3.1 3.1-31.9.3-31.9.3-1.1 3.1c-.6 1.7-1.1 3.3-1.1 3.5 0 .3 14.5.3 32.3.1l32.2-.3 4.7-2.8c13.2-7.7 13.2-25.7 0-33.4l-4.7-2.8-30.9-.3-30.9-.4zM253.1 74.1c-.6 1.8-1.1 3.4-1.1 3.5 0 .2 22.3.4 49.5.4s49.5-.2 49.5-.4c0-.1-.5-1.7-1.1-3.5l-1.1-3.1h-94.6zm203 0c-.6 1.8-1.1 3.4-1.1 3.5 0 .2 20.5.4 45.5.4s45.5-.2 45.5-.4c0-.1-.5-1.7-1.1-3.5l-1.1-3.1h-86.6zm195 0c-.6 1.8-1.1 3.4-1.1 3.5 0 .2 22.3.4 49.5.4s49.5-.2 49.5-.4c0-.1-.5-1.7-1.1-3.5l-1.1-3.1h-94.6z" />
          <path
            fillOpacity=".33"
            d="M101.8 45.7c7.9.2 20.5.2 28 0 7.5-.1 1.1-.3-14.3-.3s-21.6.2-13.7.3m177.5 0c12.6.2 32.8.2 45 0 12.2-.1 2-.2-22.8-.2-24.7 0-34.7.1-22.2.2m201 0c11.5.2 29.9.2 41 0 11.1-.1 1.8-.2-20.8-.2-22.5 0-31.6.1-20.2.2m197 0c12.6.2 32.8.2 45 0 12.2-.1 2-.2-22.8-.2-24.7 0-34.7.1-22.2.2m194.5 0c7.9.2 20.5.2 28 0 7.5-.1 1.1-.3-14.3-.3s-21.6.2-13.7.3m-769.5 25c8.2.2 21.2.2 29 0 7.8-.1 1.2-.3-14.8-.3-15.9 0-22.3.2-14.2.3m176 0c13.1.2 34.3.2 47 0 12.8-.1 2.1-.2-23.8-.2-25.8 0-36.3.1-23.2.2m201 0c12 .2 31.4.2 43 0 11.7-.1 1.9-.2-21.8-.2-23.6 0-33.2.1-21.2.2m197 0c13.1.2 34.3.2 47 0 12.8-.1 2.1-.2-23.8-.2-25.8 0-36.3.1-23.2.2m194 0c8.2.2 21.2.2 29 0 7.8-.1 1.2-.3-14.8-.3-15.9 0-22.3.2-14.2.3"
          />
        </svg>
        <h1 className={`${rowdies.className} ${h1}`}>Games Through Time</h1>
      </div>
      <nav className={navHeader}>
        <ul className={list}>
          <li><a className={item1}>Home</a></li>
          <li><a className={item2}>Collection</a></li>
          <li><a href="#contact" className={item3}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
