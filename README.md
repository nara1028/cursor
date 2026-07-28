# Fashion Designer Portfolio

`자기소개서_의상디자이너.md` 내용을 바탕으로 만든 정적 포트폴리오 사이트입니다.

## Live Site

- Repository: https://github.com/nara1028/cursor
- GitHub Pages URL: https://nara1028.github.io/cursor/

GitHub Pages를 처음 켜는 경우, 저장소 **Settings → Pages**에서 아래처럼 설정하세요.

1. **Build and deployment → Source**: `Deploy from a branch`
2. **Branch**: `main` / folder: `/ (root)`
3. Save

1~2분 후 위 Live Site URL에서 확인할 수 있습니다.

## 로컬에서 보기

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
