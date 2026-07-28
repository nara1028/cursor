# Fashion Designer Portfolio

`자기소개서_의상디자이너.md` 내용을 바탕으로 만든 정적 포트폴리오 사이트입니다.

## 로컬에서 보기

### 방법 1: 파일 직접 열기
`index.html`을 브라우저로 열면 됩니다.

### 방법 2: 로컬 서버 (권장)
PowerShell에서 이 폴더로 이동한 뒤:

```powershell
cd C:\Users\user\Downloads\cursorstudy\portfolio
python -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속

## 수정할 항목

- `[이름]`
- 이메일, 전화번호, 포트폴리오 URL
- Brand A/B/C 실제 브랜드명
- 성과 섹션의 구체적 수치

## GitHub Pages 배포

1. GitHub에 새 저장소 생성 (예: `fashion-designer-portfolio`)
2. 이 폴더 내용을 저장소 루트에 push
3. GitHub → Settings → Pages
4. Source: `Deploy from a branch`
5. Branch: `main` / folder: `/ (root)`
6. 저장 후 `https://<username>.github.io/<repo-name>/` 에서 확인

## 파일 구조

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```
