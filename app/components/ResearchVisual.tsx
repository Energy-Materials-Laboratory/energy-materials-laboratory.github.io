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
        <path
          className="rv-cathode-cell"
          d="M12 18V82M34 31V95M226 18V82M248 31V95"
        />

        <g className="rv-layer rv-layer-top">
          <path className="rv-plane rv-plane-cathode" d="M12 18L226 18L248 31L34 31Z" />
          <path
            className="rv-slab-network"
            d="M29 24L49 19L70 24L90 19L111 24L131 19L152 24L172 19L193 24L213 19L234 24M29 24L49 29L70 24L90 29L111 24L131 29L152 24L172 29L193 24L213 29L234 24"
          />
          {[29, 70, 111, 152, 193, 234].map((x, itemIndex) => (
            <circle
              className={`rv-tm-node rv-tm-node-${itemIndex % 3}`}
              cx={x}
              cy="24"
              r="5.2"
              key={x}
            />
          ))}
          {[49, 90, 131, 172, 213].flatMap((x) => [
            <circle className="rv-o-node" cx={x} cy="19" r="2.35" key={`${x}-top`} />,
            <circle className="rv-o-node" cx={x} cy="29" r="2.35" key={`${x}-bottom`} />,
          ])}
          <circle className="rv-redox-ring rv-redox-ring-top" cx="152" cy="24" r="8.2" />
        </g>

        <g className="rv-layer rv-layer-middle">
          <path className="rv-plane rv-plane-accent" d="M12 50L226 50L248 63L34 63Z" />
          <path className="rv-ion-guide" d="M29 56H234" />
          {[29, 70, 111, 152, 193].map((x) => (
            <circle className="rv-li-site" cx={x} cy="56" r="4.5" key={x} />
          ))}
          <circle className="rv-li-vacancy" cx="234" cy="56" r="5.6" />
          <circle className="rv-li-ion-halo" cx="0" cy="0" r="10.5" />
          <circle className="rv-li-ion" cx="0" cy="0" r="6.3" />
        </g>

        <g className="rv-layer rv-layer-bottom">
          <path className="rv-plane rv-plane-cathode" d="M12 82L226 82L248 95L34 95Z" />
          <path
            className="rv-slab-network"
            d="M29 88L49 83L70 88L90 83L111 88L131 83L152 88L172 83L193 88L213 83L234 88M29 88L49 93L70 88L90 93L111 88L131 93L152 88L172 93L193 88L213 93L234 88"
          />
          {[29, 70, 111, 152, 193, 234].map((x, itemIndex) => (
            <circle
              className={`rv-tm-node rv-tm-node-${(itemIndex + 1) % 3}`}
              cx={x}
              cy="88"
              r="5.2"
              key={x}
            />
          ))}
          {[49, 90, 131, 172, 213].flatMap((x) => [
            <circle className="rv-o-node" cx={x} cy="83" r="2.35" key={`${x}-top`} />,
            <circle className="rv-o-node" cx={x} cy="93" r="2.35" key={`${x}-bottom`} />,
          ])}
          <circle className="rv-redox-ring rv-redox-ring-bottom" cx="111" cy="88" r="8.2" />
        </g>
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
      <path className="rv-assb-frame" d="M9 10H251V106H9Z" />

      <g className="rv-assb-composite">
        <path className="rv-assb-composite-fill" d="M13 14H99V102H13Z" />
        <path
          className="rv-assb-composite-network"
          d="M51 14L46 51L99 44M13 53L46 51L57 102M46 51L99 84"
        />
        <circle className="rv-assb-active rv-assb-active-a" cx="31" cy="31" r="10.5" />
        <circle className="rv-assb-active rv-assb-active-b" cx="66" cy="28" r="7.5" />
        <circle className="rv-assb-active rv-assb-active-c" cx="36" cy="75" r="12" />
        <circle className="rv-assb-active rv-assb-active-d" cx="69" cy="78" r="8.5" />
        {[
          [47, 27], [80, 48], [20, 55], [60, 61], [90, 92],
        ].map(([x, y]) => (
          <circle className="rv-assb-composite-se" cx={x} cy={y} r="3.2" key={`${x}-${y}`} />
        ))}
      </g>

      <path className="rv-assb-interface rv-assb-interface-left" d="M102 15V101" />

      <g className="rv-assb-electrolyte">
        <path className="rv-assb-electrolyte-frame" d="M105 14H169V102H105Z" />
        <path className="rv-assb-grain rv-assb-grain-a" d="M105 14H137L132 43L105 48Z" />
        <path className="rv-assb-grain rv-assb-grain-path-a" d="M137 14H169V46L132 43Z" />
        <path className="rv-assb-grain rv-assb-grain-path-b" d="M105 48L132 43L140 73L105 78Z" />
        <path className="rv-assb-grain rv-assb-grain-path-c" d="M132 43L169 46V75L140 73Z" />
        <path className="rv-assb-grain rv-assb-grain-g" d="M105 78L140 73L135 102H105Z" />
        <path className="rv-assb-grain rv-assb-grain-i" d="M140 73L169 75V102H135Z" />
      </g>

      <path className="rv-assb-interface rv-assb-interface-right" d="M172 15V101" />

      <g className="rv-assb-anode">
        <path className="rv-assb-anode-fill" d="M176 14H247V102H176Z" />
        <path
          className="rv-assb-anode-sheets"
          d="M180 29H243M180 43H243M180 57H243M180 71H243M180 85H243"
        />
        <path className="rv-assb-current-collector" d="M243 14H247V102H243Z" />
      </g>

      <path
        className="rv-assb-path"
        d="M28 69C52 47 76 66 102 56S130 44 145 56S160 67 173 58S207 43 238 56"
      />
      {[
        [28, 69], [70, 60], [105, 55], [136, 52], [166, 61], [201, 50], [238, 56],
      ].map(([x, y]) => (
        <circle className="rv-assb-site" cx={x} cy={y} r="3.6" key={`${x}-${y}`} />
      ))}
      <circle className="rv-assb-ion rv-assb-ion-a" cx="0" cy="0" r="6.2" />
      <circle className="rv-assb-ion rv-assb-ion-b" cx="0" cy="0" r="4.8" />
    </svg>
  );
}
