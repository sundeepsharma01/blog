"use client"
import { useEffect } from "react";

export default function Hlt() {
  useEffect(() => {
    function highlight() {
      function createAndLoad() {
        let dv = document.createElement("div");
        dv.id = "hljsdiv";
        document.body.appendChild(dv);

        let sc = document.createElement("script");
        sc.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
        dv.appendChild(sc);

        sc.onload = () => {
          hljs.highlightAll();
        };
      }
      let dv = document.querySelector("#hljsdiv");
      if (dv) {
        dv.remove()
        createAndLoad()
      }else{
        createAndLoad()
      }
      document.removeEventListener("scroll", highlight); // Ensure the event listener is only called once
    }

    

    document.addEventListener("scroll", highlight);

    return () => {
      document.removeEventListener("scroll", highlight); // Cleanup event listener on component unmount
    };
  }, []);

  return (
    <div></div>
  );
}
