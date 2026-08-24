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
        <defs>
          <linearGradient id="rv-nfpp-polyhedron" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffc16f" />
            <stop offset="1" stopColor="#e87930" />
          </linearGradient>
          <radialGradient id="rv-nfpp-na" cx="32%" cy="28%" r="72%">
            <stop offset="0" stopColor="#d5f5f6" />
            <stop offset=".42" stopColor="#72c8cf" />
            <stop offset="1" stopColor="#2d8f99" />
          </radialGradient>
          <radialGradient id="rv-nfpp-fe" cx="32%" cy="28%" r="72%">
            <stop offset="0" stopColor="#ffc49d" />
            <stop offset=".44" stopColor="#ef7c42" />
            <stop offset="1" stopColor="#b7441e" />
          </radialGradient>
        </defs>

        <g className="rv-nfpp-cell">
          <path className="rv-nfpp-cell-back" d="M55 19L207 12L238 76L84 87Z" />
          <path className="rv-nfpp-cell-front" d="M35 30L188 23L218 89L64 100Z" />
          <path className="rv-nfpp-cell-edge" d="M35 30L55 19M188 23L207 12M218 89L238 76M64 100L84 87" />
        </g>

        <g className="rv-nfpp-framework">
          <g className="rv-nfpp-polyhedron rv-nfpp-polyhedron-a">
            <path d="M76 25L103 39L84 64L58 49Z" />
            <path className="rv-nfpp-polyhedron-lines" d="M81 45L76 25M81 45L103 39M81 45L84 64M81 45L58 49" />
            <circle className="rv-nfpp-fe" cx="81" cy="45" r="5.4" />
          </g>
          <g className="rv-nfpp-polyhedron rv-nfpp-polyhedron-b">
            <path d="M145 19L173 35L153 59L126 44Z" />
            <path className="rv-nfpp-polyhedron-lines" d="M150 39L145 19M150 39L173 35M150 39L153 59M150 39L126 44" />
            <circle className="rv-nfpp-fe" cx="150" cy="39" r="5.4" />
          </g>
          <g className="rv-nfpp-polyhedron rv-nfpp-polyhedron-c">
            <path d="M112 55L141 72L121 98L92 80Z" />
            <path className="rv-nfpp-polyhedron-lines" d="M117 76L112 55M117 76L141 72M117 76L121 98M117 76L92 80" />
            <circle className="rv-nfpp-fe" cx="117" cy="76" r="5.4" />
          </g>
          <g className="rv-nfpp-polyhedron rv-nfpp-polyhedron-d">
            <path d="M181 50L210 66L190 93L161 76Z" />
            <path className="rv-nfpp-polyhedron-lines" d="M186 71L181 50M186 71L210 66M186 71L190 93M186 71L161 76" />
            <circle className="rv-nfpp-fe" cx="186" cy="71" r="5.4" />
          </g>

          <path className="rv-nfpp-link" d="M81 45L150 39L186 71L117 76ZM81 45L117 76M150 39L117 76" />
          {[
            [103, 39], [126, 44], [153, 59], [141, 72],
            [92, 80], [161, 76], [181, 50], [190, 93],
          ].map(([x, y]) => (
            <circle className="rv-nfpp-p" cx={x} cy={y} r="3.1" key={`${x}-${y}`} />
          ))}
        </g>

        <g className="rv-nfpp-sites">
          {[
            [45, 32, 5.5], [112, 20, 4.7], [198, 19, 5.8],
            [55, 73, 4.5], [101, 52, 4.2], [151, 65, 4.8],
            [215, 53, 4.5], [73, 96, 5.8], [155, 98, 5.3], [219, 88, 5.8],
          ].map(([x, y, radius]) => (
            <circle className="rv-nfpp-na-site" cx={x} cy={y} r={radius} key={`${x}-${y}`} />
          ))}
        </g>

        <path className="rv-nfpp-channel rv-nfpp-channel-a" d="M45 32C70 21 88 33 112 20S167 14 198 19S214 35 215 53" />
        <path className="rv-nfpp-channel rv-nfpp-channel-b" d="M55 73C78 64 84 54 101 52S133 66 151 65S197 72 219 88" />
        <circle className="rv-nfpp-na-mobile rv-nfpp-na-mobile-a" cx="0" cy="0" r="7.2" />
        <circle className="rv-nfpp-na-mobile rv-nfpp-na-mobile-b" cx="0" cy="0" r="6.2" />
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
