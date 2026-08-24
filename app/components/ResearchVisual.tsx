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
        <g className="rv-dft-symbol">
          <g className="rv-dft-orbit-frame">
            <ellipse className="rv-dft-orbit rv-dft-orbit-a" cx="130" cy="43" rx="50" ry="16" />
            <circle className="rv-dft-electron rv-dft-electron-a" cx="0" cy="0" r="4.2" />
          </g>
          <g className="rv-dft-orbit-frame" transform="rotate(60 130 43)">
            <ellipse className="rv-dft-orbit rv-dft-orbit-b" cx="130" cy="43" rx="50" ry="16" />
            <circle className="rv-dft-electron rv-dft-electron-b" cx="0" cy="0" r="4.2" />
          </g>
          <g className="rv-dft-orbit-frame" transform="rotate(120 130 43)">
            <ellipse className="rv-dft-orbit rv-dft-orbit-c" cx="130" cy="43" rx="50" ry="16" />
            <circle className="rv-dft-electron rv-dft-electron-c" cx="0" cy="0" r="4.2" />
          </g>
          <circle className="rv-dft-nucleus-halo" cx="130" cy="43" r="12" />
          <circle className="rv-dft-nucleus" cx="130" cy="43" r="7.5" />
        </g>
        <text className="rv-dft-label" x="130" y="110" textAnchor="middle">DFT</text>
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
