type ResearchVisualProps = {
  index: string;
};

const visualProps = {
  viewBox: "0 0 260 116",
  focusable: "false" as const,
  "aria-hidden": true,
};

const oxygenSites = [
  [18, 17], [43, 17], [68, 17], [93, 17], [118, 17],
  [24, 43], [49, 43], [74, 43], [99, 43], [124, 43],
  [18, 69], [43, 69], [68, 69], [93, 69], [118, 69],
  [24, 95], [49, 95], [74, 95], [99, 95], [124, 95],
];

export default function ResearchVisual({ index }: ResearchVisualProps) {
  if (index === "01") {
    return (
      <svg {...visualProps} className="research-visual research-visual-01">
        <defs>
          <linearGradient id="rv01-purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8ea9e8" stopOpacity=".8" />
            <stop offset="1" stopColor="#5b64b6" stopOpacity=".56" />
          </linearGradient>
          <linearGradient id="rv01-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#b9dfa8" stopOpacity=".8" />
            <stop offset="1" stopColor="#72b785" stopOpacity=".5" />
          </linearGradient>
          <radialGradient id="rv01-tm">
            <stop offset="0" stopColor="#eef4ff" />
            <stop offset=".45" stopColor="#6687d8" />
            <stop offset="1" stopColor="#334a9b" />
          </radialGradient>
        </defs>

        <g className="rv01-lattice">
          <polygon className="rv01-slab rv01-slab-top" points="10,8 114,8 132,25 28,25" />
          <polygon className="rv01-slab rv01-slab-middle" points="16,34 120,34 138,51 34,51" />
          <polygon className="rv01-slab rv01-slab-lower" points="10,60 114,60 132,77 28,77" />
          <polygon className="rv01-slab rv01-slab-bottom" points="16,86 120,86 138,103 34,103" />

          {oxygenSites.map(([cx, cy], siteIndex) => (
            <circle className="rv01-oxygen" cx={cx} cy={cy} r="2.35" key={`${cx}-${cy}-${siteIndex}`} />
          ))}
          {[[33, 16], [58, 16], [83, 16], [108, 16], [39, 68], [64, 68], [89, 68], [114, 68]].map(([cx, cy]) => (
            <circle className="rv01-tm-site" cx={cx} cy={cy} r="4.2" key={`${cx}-${cy}`} />
          ))}
          {[[40, 42], [65, 42], [90, 42], [115, 42], [46, 94], [71, 94], [96, 94], [121, 94]].map(([cx, cy]) => (
            <circle className="rv01-li-site" cx={cx} cy={cy} r="3.1" key={`${cx}-${cy}`} />
          ))}
        </g>

        <g className="rv01-migration-inset">
          <rect className="rv-scientific-frame" x="151" y="10" width="99" height="94" rx="3" />
          <path className="rv01-octahedron rv01-octahedron-a" d="M171 31L190 18L209 31L190 58Z" />
          <path className="rv01-octahedron rv01-octahedron-b" d="M190 58L216 46L236 66L213 91Z" />
          {[[171,31],[190,18],[209,31],[190,58],[216,46],[236,66],[213,91]].map(([cx, cy]) => (
            <circle className="rv01-oxygen" cx={cx} cy={cy} r="3" key={`${cx}-${cy}`} />
          ))}
          <circle className="rv01-intermediate" cx="203" cy="50" r="5.2" />
          <path className="rv01-migration-path" d="M190 33C190 43 193 47 203 50S214 61 213 76" />
          <circle className="rv01-migrating-tm" cx="0" cy="0" r="5.6" />
          <path className="rv01-repulsion" d="M219 54l-4 5 5 5-5 5 4 5" />
        </g>
      </svg>
    );
  }

  if (index === "02") {
    return (
      <svg {...visualProps} className="research-visual research-visual-02">
        <defs>
          <linearGradient id="rv02-energy" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#2b73b9" />
            <stop offset=".38" stopColor="#56b9a7" />
            <stop offset=".68" stopColor="#f2c84b" />
            <stop offset="1" stopColor="#d34b47" />
          </linearGradient>
        </defs>

        <g className="rv02-atomistic">
          <path className="rv02-polyhedron rv02-polyhedron-before" d="M13 45L30 20L53 27L58 53L36 68Z" />
          <path className="rv02-polyhedron rv02-polyhedron-before" d="M48 69L63 48L83 53L91 78L69 94Z" />
          <path className="rv02-bond" d="M32 41L68 69" />
          <circle className="rv02-metal" cx="35" cy="43" r="6" />
          <circle className="rv02-metal" cx="69" cy="68" r="6" />
          <circle className="rv02-ligand rv02-ligand-before" cx="52" cy="29" r="4" />
          <circle className="rv02-ligand" cx="84" cy="55" r="4" />

          <path className="rv02-relax-arrow" d="M95 58H121" />
          <path className="rv02-relax-arrow-head" d="M116 53L122 58L116 63" />

          <path className="rv02-polyhedron rv02-polyhedron-after" d="M125 42L142 21L163 32L161 57L139 69Z" />
          <path className="rv02-bond" d="M141 44L151 31" />
          <circle className="rv02-metal" cx="141" cy="45" r="6" />
          <circle className="rv02-ligand rv02-ligand-after" cx="153" cy="29" r="4" />
        </g>

        <g className="rv02-landscape">
          <rect className="rv-scientific-frame" x="174" y="11" width="76" height="94" rx="3" />
          <rect x="181" y="18" width="62" height="80" rx="11" fill="#2b73b9" opacity=".22" />
          <rect x="187" y="25" width="50" height="66" rx="12" fill="#56b9a7" opacity=".42" />
          <rect x="193" y="33" width="38" height="50" rx="12" fill="#f2c84b" opacity=".58" />
          <rect x="200" y="42" width="24" height="32" rx="10" fill="#d34b47" opacity=".72" />
          <path className="rv02-contour" d="M181 58H243M212 18V98" />
          <circle className="rv02-screening-point rv02-screening-point-a" cx="188" cy="88" r="3.5" />
          <circle className="rv02-screening-point rv02-screening-point-b" cx="218" cy="52" r="4.5" />
        </g>
      </svg>
    );
  }

  if (index === "03") {
    return (
      <svg {...visualProps} className="research-visual research-visual-03">
        <defs>
          <linearGradient id="rv03-p2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e9bd55" />
            <stop offset="1" stopColor="#c78336" />
          </linearGradient>
          <linearGradient id="rv03-o3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6aafe3" />
            <stop offset="1" stopColor="#4776bd" />
          </linearGradient>
        </defs>

        <g className="rv03-chemical-space">
          <path className="rv03-triangle" d="M13 96L69 16L125 96Z" />
          <path className="rv03-capacity-limit" d="M31 70H107" />
          {[[22,91],[39,67],[54,46],[69,25],[48,91],[71,91],[96,91],[62,68],[83,68]].map(([cx, cy]) => (
            <circle className="rv03-composition-site" cx={cx} cy={cy} r="2.4" key={`${cx}-${cy}`} />
          ))}
          <path className="rv03-screening-path" d="M28 88C43 74 58 75 66 59S88 39 107 28" />
          <circle className="rv03-composition-ion" cx="0" cy="0" r="4.6" />
        </g>

        <path className="rv03-prediction-arrow" d="M130 57H151" />
        <path className="rv03-prediction-arrow-head" d="M146 52L152 57L146 62" />

        <g className="rv03-phase rv03-phase-o3">
          <text x="170" y="12">O3</text>
          {[20, 40, 60, 80].map((y, layer) => (
            <g key={y}>
              <polygon className={layer % 2 ? "rv03-layer rv03-layer-yellow" : "rv03-layer rv03-layer-blue"} points={`160,${y} 197,${y} 204,${y + 9} 167,${y + 9}`} />
              {[166,179,192].map((cx) => <circle className="rv03-oxygen" cx={cx} cy={y} r="1.9" key={`${cx}-${y}`} />)}
            </g>
          ))}
        </g>

        <g className="rv03-phase rv03-phase-p2">
          <text x="226" y="12">P2</text>
          {[20, 40, 60, 80].map((y, layer) => (
            <g key={y}>
              <polygon className={layer % 2 ? "rv03-layer rv03-layer-blue" : "rv03-layer rv03-layer-yellow"} points={`216,${y} 247,${y} 253,${y + 9} 222,${y + 9}`} />
              {[222,233,244].map((cx) => <circle className="rv03-oxygen" cx={cx} cy={y} r="1.9" key={`${cx}-${y}`} />)}
            </g>
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg {...visualProps} className="research-visual research-visual-04">
      <defs>
        <linearGradient id="rv04-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#78b7e2" stopOpacity=".82" />
          <stop offset="1" stopColor="#347aac" stopOpacity=".62" />
        </linearGradient>
        <linearGradient id="rv04-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a28bc4" stopOpacity=".84" />
          <stop offset="1" stopColor="#694a91" stopOpacity=".6" />
        </linearGradient>
      </defs>

      <g className="rv04-sulfide">
        {[[19,24],[54,20],[88,28],[36,59],[74,61],[104,56],[20,91],[56,92],[92,88]].map(([cx, cy], polyIndex) => (
          <g key={`${cx}-${cy}`}>
            <path className={polyIndex % 3 === 0 ? "rv04-polyhedron rv04-polyhedron-green" : "rv04-polyhedron rv04-polyhedron-blue"} d={`M${cx} ${cy - 12}L${cx + 12} ${cy - 3}L${cx + 7} ${cy + 12}L${cx - 8} ${cy + 10}L${cx - 12} ${cy - 4}Z`} />
            <circle className="rv04-center" cx={cx} cy={cy} r="2.4" />
          </g>
        ))}
        <path className="rv04-ion-network" d="M9 76C27 72 31 43 52 46S73 82 91 72S102 35 119 30" />
        <circle className="rv04-li-ion rv04-li-ion-a" cx="0" cy="0" r="4.4" />
      </g>

      <path className="rv04-divider" d="M130 10V106" />

      <g className="rv04-halide">
        {[21,49,77].map((y, layerIndex) => (
          <g className={`rv04-halide-layer rv04-halide-layer-${layerIndex + 1}`} key={y}>
            <polygon className="rv04-halide-sheet" points={`143,${y} 238,${y} 251,${y + 16} 156,${y + 16}`} />
            {[154,177,200,223,246].map((cx) => <circle className="rv04-cl" cx={cx} cy={y + 7} r="2.5" key={`${cx}-${y}`} />)}
            {[166,189,212,235].map((cx) => <circle className="rv04-y" cx={cx} cy={y + 7} r="4" key={`${cx}-${y}`} />)}
          </g>
        ))}
        <path className="rv04-ion-network rv04-halide-path" d="M148 97C164 83 162 52 180 45S198 70 214 55S228 25 246 19" />
        <circle className="rv04-li-ion rv04-li-ion-b" cx="0" cy="0" r="4.4" />
        <circle className="rv04-vacancy" cx="213" cy="84" r="5" />
      </g>
    </svg>
  );
}
