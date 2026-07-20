# GitHub 업로드 체크리스트

- [ ] ZIP의 압축을 해제했다.
- [ ] repository 최상단에 `package.json`, `app`, `content`, `public`이 바로 보인다.
- [ ] 숨김 폴더 `.github/workflows/deploy-pages.yml`을 함께 올렸다.
- [ ] `node_modules`, `.next`, `out`은 올리지 않았다.
- [ ] 기본 branch 이름이 `main`이다.
- [ ] Settings → Pages → Source를 **GitHub Actions**로 선택했다.
- [ ] Actions 탭의 “Deploy site to GitHub Pages” 작업이 성공했다.
- [ ] 배포 주소에서 Home과 하위 메뉴를 각각 열어 보았다.

일반적인 내용 수정은 `content/*.json`, 디자인 수정은 `styles/theme.css`에서 진행합니다.
