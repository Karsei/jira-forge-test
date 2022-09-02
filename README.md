# jira-forge-test

forge 를 이용한 jira 앱 등록 테스트

## Spec

* NodeJS v16.14
* React 16.8.6

> Atlaskit 자체가 React 16 버전을 이용하고 있기 때문에 위 React 버전은 변경될 수 없습니다.

## Usage

### 환경 준비

1. Forge 설치

```bash
$ npm install -g @forge/cli
```

2. self signed certificate 오류 무시

하드코딩으로 아래 코드를 넣어줍니다.

```javascript
// global 로 설치된 forge-cli 경로
// /usr/local/lib/node_modules/@forge/cli/out/command-line/index.js : 58
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
```

3. 로그인

```bash
$ forge login --verbose
```

4. 모듈 설치

```bash
$ npm run ready
```

### Jira 에 Deploy

build 하고 Jira 에 앱을 deploy 하면서 개발해야 합니다.

```bash
$ npm run deploy
```

현재 Jira 에 해당 앱이 없다면 아래 항목을 추가적으로 진행합니다.

### Jira 에 아직 앱이 등록되지 않았을 경우

```bash
$ forge install
```

---

# Forge Hello World

This project contains a Forge app written in JavaScript that displays `Hello World!` in a Jira global page.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start
- Install dependencies (inside of the `static/hello-world` directory)::
```
npm install
```

- Modify your app by editing the files in `static/hello-world/src/`.

- Build your app (inside of the `static/hello-world` directory):
```
npm run build
```

- Deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

