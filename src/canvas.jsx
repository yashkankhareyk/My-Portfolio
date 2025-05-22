import { useEffect, useRef, useState } from "react";
import canvasimages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 

function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;

  const [index, setIndex] = useState({ value: startIndex });
  const [canvasSize, setCanvasSize] = useState(size * 1.5);
  const canvasRef = useRef(null);

  // Function to update canvas size based on window width
  const updateCanvasSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 600) {
      // For small screens, reduce canvas size more aggressively
      setCanvasSize(size * 0.5);
    } else {
      setCanvasSize(size * 1.5);
    }
  };

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });  
  });

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasimages[index.value];
    img.onload = () => {
      canvas.width = canvasSize * scale;
      canvas.height = canvasSize * scale;
      canvas.style.width = canvasSize + "px";
      canvas.style.height = canvasSize + "px";

      ctx.scale(scale, scale);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvasSize, canvasSize);
    };
  }, [index, canvasSize]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${canvasSize}px`,
        height: `${canvasSize}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    ></canvas>
  );
}

export default Canvas;
