# Energy Materials Lab website

성균관대학교 신소재공학과 Byunghoon Kim Research Group 웹사이트입니다. 이 저장소는 정적 웹사이트로 빌드되며 GitHub Pages에 바로 배포할 수 있습니다.

## 가장 중요한 파일

- 사이트 문구와 목록: `content/*.json`
- 글꼴·크기·굵기·색상: `styles/theme.css`
- 전체 세부 레이아웃: `app/globals.css`
- 메인 결정 이미지: `public/images/hero-layered-cathode.png`
- 자동 배포 설정: `.github/workflows/deploy-pages.yml`

대부분의 일상적인 수정에는 `app` 폴더를 건드릴 필요가 없습니다.

## GitHub에 올리는 방법

1. GitHub에서 새 repository를 만듭니다.
2. 이 폴더의 **내용 전체**를 repository 최상단에 업로드합니다.
   - `bkim-energy-materials-github` 폴더 자체가 한 단계 더 들어가지 않도록 주의합니다.
   - 숨김 폴더인 `.github`도 반드시 포함해야 합니다.
   - `node_modules`, `.next`, `out` 폴더는 업로드하지 않습니다.
3. 기본 branch를 `main`으로 사용합니다.
4. GitHub repository의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
5. `main`에 파일을 올리거나 수정하면 GitHub Actions가 자동으로 사이트를 다시 배포합니다.

프로젝트 repository가 `username.github.io` 형식이면 루트 주소에, 일반 repository이면 `username.github.io/repository-name/`에 배포되도록 자동 설정되어 있습니다.

## 로컬에서 확인하기

Node.js 22 이상이 설치된 환경에서:

```bash
npm install
npm run dev
```

브라우저에서 터미널에 표시된 주소를 엽니다.

정적 배포 파일을 확인하려면:

```bash
npm run build
```

빌드 결과는 `out` 폴더에 생성됩니다.

## 내용 수정

`content` 폴더의 JSON 파일을 수정합니다.

| 파일 | 수정 내용 |
| --- | --- |
| `site.json` | 연구실 이름, 소속, 메뉴, footer |
| `home.json` | Home의 제목, 설명, 버튼, 세 개의 핵심 문구 |
| `research.json` | 연구 분야와 설명, 태그 |
| `members.json` | 교수 정보, 경력, 수상, 전체 구성원 |
| `publications.json` | 논문과 특허 |
| `gallery.json` | Gallery 행사 목록 |
| `contact.json` | 주소, 이메일, 모집 문구 |

JSON을 수정할 때는 다음 규칙을 지킵니다.

- 모든 key와 문자열은 큰따옴표 `"`로 감쌉니다.
- 항목 사이에는 쉼표를 넣되 마지막 항목 뒤에는 쉼표를 넣지 않습니다.
- 논문이나 구성원을 추가할 때는 기존 객체 하나를 복사한 뒤 내용을 바꾸는 방식이 안전합니다.
- 저장 후 `npm run check:content`로 문법을 확인할 수 있습니다.

## 디자인 수정

`styles/theme.css` 상단의 변수만 바꾸면 주요 디자인이 함께 변경됩니다.

- `--font-sans`: 기본 글꼴
- `--font-mono`: 숫자와 작은 label 글꼴
- `--weight-*`: regular, medium, semibold, bold 굵기
- `--size-*`: 본문, 브랜드, Home 제목, 페이지 제목 크기
- `--ink`, `--muted`: 기본 글자색과 보조 글자색
- `--blue`, `--blue-dark`: 주요 포인트 색상
- `--hero-gradient-*`: Home 텍스트와 이미지 사이의 옅은 그라데이션

상세한 수정 예시는 [EDITING_GUIDE_KR.md](./EDITING_GUIDE_KR.md)를 참고하세요.

## 메인 이미지 교체

새 이미지를 `public/images`에 넣고 `content/home.json`의 `hero.image` 값을 바꿉니다.

```json
"image": "/images/new-hero-image.png"
```

현재 이미지와 동일한 1672×941 비율을 권장합니다.

## Custom domain

GitHub Pages 설정에서 custom domain을 연결할 수 있습니다. Custom domain을 사용할 경우 repository 경로 없이 루트에서 열리도록 `.github/workflows/deploy-pages.yml`의 `NEXT_PUBLIC_BASE_PATH` 설정을 빈 값으로 바꿔야 할 수 있습니다.
