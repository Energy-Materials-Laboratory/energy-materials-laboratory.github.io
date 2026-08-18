type ResearchVisualProps = {
  index: string;
};

const visualProps = {
  viewBox: "0 0 260 116",
  focusable: "false" as const,
  "aria-hidden": true,
};

export default function ResearchVisual({ index }: ResearchVisualProps) {
  if (index === "01") {
    return (
      <svg
        {...visualProps}
        className="research-visual research-visual-01"
      >
        <g className="rv-layer rv-layer-top">
          <path className="rv-plane" d="M12 18L226 18L248 31L34 31Z" />
          <path className="rv-bond" d="M27 24H237" />
          {[29, 70, 111, 152, 193, 234].map((x) => (
            <circle className="rv-tm-node" cx={x} cy="24" r="5" key={x} />
          ))}
        </g>

        <g className="rv-layer rv-layer-middle">
          <path className="rv-plane rv-plane-accent" d="M12 50L226 50L248 63L34 63Z" />
          <path className="rv-bond" d="M27 56H237" />
          {[29, 70, 111, 152, 193, 234].map((x) => (
            <circle className="rv-li-site" cx={x} cy="56" r="4.5" key={x} />
          ))}
          <circle className="rv-li-ion" cx="0" cy="0" r="7" />
        </g>

        <g className="rv-layer rv-layer-bottom">
          <path className="rv-plane" d="M12 82L226 82L248 95L34 95Z" />
          <path className="rv-bond" d="M27 88H237" />
          {[29, 70, 111, 152, 193, 234].map((x) => (
            <circle className="rv-tm-node" cx={x} cy="88" r="5" key={x} />
          ))}
        </g>

        <path className="rv-ion-guide" d="M29 56H234" />
      </svg>
    );
  }

  if (index === "02") {
    return (
      <svg
        {...visualProps}
        className="research-visual research-visual-02"
      >
        <g className="rv-density-field">
          <rect className="rv-density-frame" x="9" y="10" width="94" height="82" rx="3" />
          <path className="rv-density-contour rv-density-contour-outer" d="M14 56C14 34 34 18 55 28C75 18 98 34 98 56C98 78 75 92 54 80C34 91 14 78 14 56Z" />
          <path className="rv-density-contour rv-density-contour-middle" d="M22 57C22 41 39 29 55 37C71 28 90 41 90 57C90 73 71 83 55 73C39 82 22 73 22 57Z" />
          <path className="rv-density-contour rv-density-contour-inner" d="M31 58C31 48 43 40 55 46C67 39 81 48 81 58C81 69 67 75 55 67C43 75 31 69 31 58Z" />
          <path className="rv-density-bond" d="M26 61L55 39L84 61" />
          <circle className="rv-density-nucleus" cx="26" cy="61" r="5" />
          <circle className="rv-density-nucleus rv-density-nucleus-main" cx="55" cy="39" r="6.5" />
          <circle className="rv-density-nucleus" cx="84" cy="61" r="5" />
          <circle className="rv-density-electron rv-density-electron-a" cx="38" cy="43" r="2.5" />
          <circle className="rv-density-electron rv-density-electron-b" cx="70" cy="48" r="2.5" />
          <circle className="rv-density-electron rv-density-electron-c" cx="55" cy="70" r="2.5" />
          <text className="rv-density-label" x="13" y="107">ρ(r)</text>
        </g>

        <g className="rv-energy-plot">
          <path className="rv-axis" d="M123 12V93H248" />
          <path className="rv-convergence" d="M130 24C145 76 157 29 174 58S204 80 218 76S235 78 246 78" />
          <path className="rv-threshold" d="M124 78H248" />
          <circle className="rv-energy-point" cx="0" cy="0" r="5" />
        </g>
      </svg>
    );
  }

  if (index === "03") {
    return (
      <svg
        {...visualProps}
        className="research-visual research-visual-03"
      >
        <path className="rv-na-slab" d="M12 16H248V36H12Z" />
        <path className="rv-na-slab" d="M12 80H248V100H12Z" />
        {[28, 62, 96, 130, 164, 198, 232].map((x) => (
          <g key={x}>
            <circle className="rv-na-host" cx={x} cy="26" r="5" />
            <circle className="rv-na-host" cx={x} cy="90" r="5" />
          </g>
        ))}
        <path className="rv-na-path" d="M27 61C49 61 52 45 75 45S101 68 124 68S151 45 174 45S205 62 233 52" />
        {[28, 76, 124, 174, 232].map((x, siteIndex) => (
          <circle
            className="rv-na-site"
            cx={x}
            cy={[61, 45, 68, 45, 52][siteIndex]}
            r="5"
            key={x}
          />
        ))}
        <g className="rv-na-ion">
          <circle cx="0" cy="0" r="8" />
          <path d="M-4 0H4M0 -4V4" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      {...visualProps}
      className="research-visual research-visual-04"
    >
      <path className="rv-electrode" d="M10 12H42V104H10Z" />
      <path className="rv-electrode" d="M218 12H250V104H218Z" />
      <path className="rv-solid-frame" d="M52 12H208V104H52Z" />
      <path className="rv-solid-grid" d="M72 20V96M106 20V96M140 20V96M174 20V96M194 20V96M58 32H202M58 58H202M58 84H202" />
      {[72, 106, 140, 174, 194].flatMap((x) =>
        [32, 58, 84].map((y) => (
          <circle className="rv-solid-node" cx={x} cy={y} r="4" key={`${x}-${y}`} />
        )),
      )}
      <path className="rv-conduction-path" d="M28 70C56 70 60 43 86 43S112 75 139 75S165 38 191 38S211 61 234 48" />
      <circle className="rv-conducting-ion rv-conducting-ion-a" cx="0" cy="0" r="7" />
      <circle className="rv-conducting-ion rv-conducting-ion-b" cx="0" cy="0" r="5" />
    </svg>
  );
}
