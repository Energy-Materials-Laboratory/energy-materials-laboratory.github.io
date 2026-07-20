# 사이트 수정 가이드

## 1. Home의 제목이나 설명 바꾸기

`content/home.json`을 열고 `hero` 안의 값을 수정합니다.

```json
"hero": {
  "eyebrow": "Materials · Mechanisms · Discovery",
  "title": "Materials for batteries, understood across scales.",
  "description": "설명 문구",
  "primaryAction": {
    "label": "Explore our research",
    "href": "/research"
  }
}
```

`href`는 버튼을 눌렀을 때 이동할 페이지입니다.

## 2. 연구 분야 추가하기

`content/research.json`의 `areas` 배열에서 기존 항목 하나를 복사한 뒤 `index`, `title`, `short`, `detail`, `tags`를 변경합니다.

Home의 Research 카드도 이 목록을 자동으로 사용합니다.

## 3. 구성원 추가 또는 삭제하기

`content/members.json`의 `group.members` 배열을 수정합니다.

```json
{
  "name": "Member Name",
  "email": "member@skku.edu",
  "role": "Master's Student",
  "initials": "MN"
}
```

`role`은 `group.roleOrder`에 등록된 값과 정확히 같아야 자동으로 올바른 그룹에 표시됩니다.

## 4. 논문 추가하기

`content/publications.json`의 `journals` 배열 가장 위에 새 논문을 추가합니다.

```json
{
  "year": "2026",
  "title": "Article title",
  "authors": "Authors",
  "venue": "Journal · volume · pages",
  "doi": "10.xxxx/xxxxx"
}
```

DOI가 아직 없으면 `doi` 줄 전체를 삭제합니다. 연도 목록과 번호는 자동으로 생성됩니다.

## 5. 글꼴 바꾸기

`styles/theme.css`의 다음 값을 바꿉니다.

```css
--font-sans: Arial, "Helvetica Neue", Helvetica, sans-serif;
```

웹폰트를 직접 넣으려면 font 파일을 `public/fonts`에 추가하고 `theme.css` 상단에 `@font-face`를 선언한 뒤 `--font-sans`에서 해당 이름을 사용합니다.

## 6. 제목 크기와 굵기 바꾸기

```css
--weight-bold: 760;
--size-hero-title: clamp(51px, 4.6vw, 74px);
--size-page-title: clamp(54px, 7.4vw, 104px);
```

`clamp(최소값, 화면에 따른 값, 최대값)` 형식입니다. 세 값을 같은 비율로 조정하면 반응형 크기를 유지할 수 있습니다.

## 7. 색상 바꾸기

```css
--ink: #111820;
--muted: #5e6874;
--blue: #075dbb;
--blue-dark: #06458a;
```

Home의 옅은 배경 그라데이션은 아래 값으로 조절합니다.

```css
--hero-gradient-start: #ffffff;
--hero-gradient-middle: #f8fafc;
--hero-gradient-end-rgb: 242, 246, 250;
```

`--hero-gradient-end-rgb`는 쉼표로 구분된 RGB 숫자를 사용합니다.

## 8. 수정 후 확인

```bash
npm run check:content
npm run build
```

두 명령이 성공하면 GitHub Pages 배포에도 사용할 수 있습니다.
