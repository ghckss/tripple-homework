## 프로젝트 실행 방법

### Dependency Installation

```bash
yarn install
```

### Start Project

```bash
yarn start
```

### Run Lints

```bash
yarn lint
```

## 사용한 기술과 선택한 이유

<br />

1. Creact-React-App

- 간단한 프로젝트 생성 및 실행

<br />

2. Typescript

- 명시적인 타입 지정

<br />

3. Styled-Component

- 컴포넌트화된 스타일의 정의
- css-in-js의 기능 활용
  <br />
  ex) js, css의 상태 공유

<br />

4. Reset-CSS

- 브라우저에 설정된 기본 스타일 초기화

<br />

5. eslint, prettier, stylelint

- 공통된 코드 스타일 적용
- lint 라이브러리의 이슈 및 버전 매칭을 위한 특정 라이브러리 버전 다운
  - eslint v7.32.0
  - typescript v4.3.5
  - react-scripts v4
    - https://github.com/titicacadev/eslint-config-triple/issues/189
