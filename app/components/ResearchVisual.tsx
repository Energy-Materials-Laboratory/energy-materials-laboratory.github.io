import { assetPath } from "../../lib/paths";

type ResearchVisualProps = {
  index: string;
};

const researchImages: Record<string, string> = {
  "01": "/images/research/high-energy-cathodes.jpg",
  "02": "/images/research/computational-materials-design.jpg",
  "03": "/images/research/sodium-ion-materials.webp",
  "04": "/images/research/solid-state-ion-conductors.webp",
};

const overlayProps = {
  viewBox: "0 0 320 132",
  focusable: "false" as const,
  "aria-hidden": true,
};

function ResearchMotion({ index }: { index: string }) {
  if (index === "01") {
    return (
      <svg {...overlayProps} className="rv-motion-layer">
        <path className="rv-motion-path rv-motion-path-01" d="M132 33C151 40 160 56 178 63S207 77 223 96" />
        <circle className="rv-motion-site" cx="178" cy="63" r="8" />
        <circle className="rv-motion-particle rv-motion-particle-01" cx="0" cy="0" r="5" />
      </svg>
    );
  }

  if (index === "02") {
    return (
      <svg {...overlayProps} className="rv-motion-layer">
        <rect className="rv-screening-window" x="188" y="19" width="105" height="94" rx="4" />
        <path className="rv-screening-line" d="M196 33H285" />
        <circle className="rv-screening-target" cx="243" cy="66" r="8" />
        <circle className="rv-screening-dot" cx="243" cy="66" r="4.5" />
      </svg>
    );
  }

  if (index === "03") {
    return (
      <svg {...overlayProps} className="rv-motion-layer">
        <path className="rv-motion-path rv-motion-path-03" d="M37 105C76 89 105 70 143 65S205 53 276 31" />
        <circle className="rv-motion-particle rv-motion-particle-03" cx="0" cy="0" r="5" />
        <path className="rv-phase-bracket rv-phase-bracket-o3" d="M195 19H246V55" />
        <path className="rv-phase-bracket rv-phase-bracket-p2" d="M260 68V111H307" />
      </svg>
    );
  }

  return (
    <svg {...overlayProps} className="rv-motion-layer">
      <path className="rv-motion-path rv-motion-path-04a" d="M19 99C50 88 63 59 94 65S131 96 158 76" />
      <path className="rv-motion-path rv-motion-path-04b" d="M166 102C188 82 192 51 216 46S252 67 300 27" />
      <circle className="rv-motion-particle rv-motion-particle-04a" cx="0" cy="0" r="4.5" />
      <circle className="rv-motion-particle rv-motion-particle-04b" cx="0" cy="0" r="4.5" />
    </svg>
  );
}

export default function ResearchVisual({ index }: ResearchVisualProps) {
  const image = researchImages[index] ?? researchImages["01"];

  return (
    <div className={`research-visual research-visual-${index}`} aria-hidden="true">
      <img
        alt=""
        className="research-visual-source"
        decoding="async"
        loading="lazy"
        src={assetPath(image)}
      />
      <span className="research-visual-shade" />
      <ResearchMotion index={index} />
    </div>
  );
}
