"use client";

import Image from "next/image";

type TimbroVariant = "zero" | "smash-alto";

interface TimbroStampProps {
  variant: TimbroVariant;
  /** Posizione: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  /** Dimensione in px (default: 120) */
  size?: number;
  /** Rotazione in gradi (default: -8 per effetto timbro) */
  rotation?: number;
  className?: string;
}

const POSITION_CLASSES: Record<NonNullable<TimbroStampProps["position"]>, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const TIMBRO_SRC: Record<TimbroVariant, string> = {
  zero: "/TimbroZero.png",
  "smash-alto": "/TimbroSmashAlto.png",
};

export default function TimbroStamp({
  variant,
  position = "bottom-right",
  size = 120,
  rotation = -8,
  className = "",
}: TimbroStampProps) {
  const src = TIMBRO_SRC[variant];
  const posClass = POSITION_CLASSES[position];

  const transformStyle =
    position === "center"
      ? { transform: `translate(-50%, -50%) rotate(${rotation}deg)` }
      : { transform: `rotate(${rotation}deg)` };

  return (
    <div
      className={`absolute z-20 pointer-events-none ${posClass} ${className}`}
      style={transformStyle}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="object-contain drop-shadow-lg"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
