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
            <ellipse className="rv-dft-orbit rv-dft-orbit-a" cx="130" cy="58" rx="54" ry="17" />
            <circle className="rv-dft-electron rv-dft-electron-a" cx="0" cy="0" r="4.2" />
          </g>
          <g className="rv-dft-orbit-frame" transform="rotate(60 130 58)">
            <ellipse className="rv-dft-orbit rv-dft-orbit-b" cx="130" cy="58" rx="54" ry="17" />
            <circle className="rv-dft-electron rv-dft-electron-b" cx="0" cy="0" r="4.2" />
          </g>
          <g className="rv-dft-orbit-frame" transform="rotate(120 130 58)">
            <ellipse className="rv-dft-orbit rv-dft-orbit-c" cx="130" cy="58" rx="54" ry="17" />
            <circle className="rv-dft-electron rv-dft-electron-c" cx="0" cy="0" r="4.2" />
          </g>
          <circle className="rv-dft-nucleus-halo" cx="130" cy="58" r="12" />
          <circle className="rv-dft-nucleus" cx="130" cy="58" r="7.5" />
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
        <rect className="rv-nfpp-cell-2d" x="18" y="9" width="224" height="98" />

        <g className="rv-nfpp-network">
          <path d="M62 31L103 31L142 30L194 33M62 31L92 82L138 76L184 82L194 33M103 31L138 76M142 30L138 76" />
        </g>

        <g className="rv-nfpp-fe-framework">
          {[
            [62, 31], [142, 30], [92, 82], [184, 82],
          ].map(([x, y]) => (
            <g className="rv-nfpp-fe-octahedron" transform={`translate(${x} ${y})`} key={`${x}-${y}`}>
              <path d="M0 -17L18 0L0 17L-18 0Z" />
              <path className="rv-nfpp-fe-lines" d="M0 0V-17M0 0L18 0M0 0V17M0 0L-18 0" />
              <circle className="rv-nfpp-fe-center" cx="0" cy="0" r="3.7" />
              <circle className="rv-nfpp-o" cx="0" cy="-17" r="2.6" />
              <circle className="rv-nfpp-o" cx="18" cy="0" r="2.6" />
              <circle className="rv-nfpp-o" cx="0" cy="17" r="2.6" />
              <circle className="rv-nfpp-o" cx="-18" cy="0" r="2.6" />
            </g>
          ))}
        </g>

        <g className="rv-nfpp-polyanions">
          <g className="rv-nfpp-po4" transform="translate(103 31)">
            <path d="M0 -13L14 10L-14 10Z" />
            <path className="rv-nfpp-p-lines" d="M0 1V-13M0 1L14 10M0 1L-14 10" />
            <circle className="rv-nfpp-p-center" cx="0" cy="1" r="3.4" />
            <circle className="rv-nfpp-o" cx="0" cy="-13" r="2.5" />
            <circle className="rv-nfpp-o" cx="14" cy="10" r="2.5" />
            <circle className="rv-nfpp-o" cx="-14" cy="10" r="2.5" />
          </g>

          <g className="rv-nfpp-po4" transform="translate(205 43)">
            <path d="M0 -13L14 10L-14 10Z" />
            <path className="rv-nfpp-p-lines" d="M0 1V-13M0 1L14 10M0 1L-14 10" />
            <circle className="rv-nfpp-p-center" cx="0" cy="1" r="3.4" />
            <circle className="rv-nfpp-o" cx="0" cy="-13" r="2.5" />
            <circle className="rv-nfpp-o" cx="14" cy="10" r="2.5" />
            <circle className="rv-nfpp-o" cx="-14" cy="10" r="2.5" />
          </g>

          <g className="rv-nfpp-p2o7" transform="translate(138 76)">
            <path d="M0 -2L-14 -20L14 -20Z" />
            <path d="M0 2L14 20L-14 20Z" />
            <path className="rv-nfpp-p-lines" d="M0 -12L0 -2M0 -12L-14 -20M0 -12L14 -20M0 12L0 2M0 12L14 20M0 12L-14 20" />
            <circle className="rv-nfpp-p-center" cx="0" cy="-12" r="3.2" />
            <circle className="rv-nfpp-p-center" cx="0" cy="12" r="3.2" />
            <circle className="rv-nfpp-o rv-nfpp-bridge-o" cx="0" cy="0" r="2.8" />
          </g>
        </g>

        <path className="rv-nfpp-channel rv-nfpp-channel-a" d="M34 58C52 48 68 51 84 59S115 70 130 60S160 48 176 58S207 69 226 57" />
        {[
          [34, 58], [82, 58], [130, 60], [178, 58], [226, 57],
        ].map(([x, y]) => (
          <circle className="rv-nfpp-na-site" cx={x} cy={y} r="4.5" key={`${x}-${y}`} />
        ))}
        <circle className="rv-nfpp-vacancy" cx="226" cy="57" r="6.1" />
        <circle className="rv-nfpp-na-mobile rv-nfpp-na-mobile-a" cx="0" cy="0" r="6.2" />
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
