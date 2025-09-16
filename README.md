# PlayWrightAutomationFramework

[![CI](https://github.com/AfreenQA/Playwright-Automation-Framework/actions/workflows/ci.yml/badge.svg)](https://github.com/AfreenQA/Playwright-Automation-Framework/actions/workflows/ci.yml)
![Node](https://img.shields.io/badge/node-18.x-339933?logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/playwright-1.40%2B-2D6AE3)
[![License: ISC](https://img.shields.io/github/license/AfreenQA/Playwright-Automation-Framework)](./LICENSE)
[![Allure Report](https://img.shields.io/badge/allure-report-FF5A5F)](https://github.com/AfreenQA/Playwright-Automation-Framework/actions)

A Playwright end-to-end testing framework with JavaScript and TypeScript specs, Cucumber BDD, and Page Object Model. Includes API testing utilities, parallel execution, multiple browsers, and Allure reporting.

## Features

- Playwright Test runner with JS and TS specs
- Cucumber BDD support (Gherkin features + step definitions)
- Page Object Model in JS and TS (`pageobjects/`, `pageobjects_ts/`)
- API utilities for authentication and order placement (`utils/`)
- Parallel execution across Chromium, Firefox, WebKit
- Environment-configurable via `playwright.config.js`
- Allure integration (optional) for rich reports

## Prerequisites

- Node.js 18+
- npm 9+
- Git

## Install

```bash
npm ci
npx playwright install
```

If you add new dependencies:
```bash
npm i <package> --save-dev
```

## Project Structure

```
PlayWrightAutomationFramework/
  cucumber.js                 # Cucumber configuration
  features/                   # Gherkin features + step definitions
    *.feature
    step_definitions/
    support/
  pageobjects/                # JS page objects
  pageobjects_ts/             # TS page objects
  tests/                      # Playwright specs (JS/TS)
  utils/                      # Helpers (API utils, test base)
  utils_ts/                   # TS helpers
  playwright.config.js        # Default Playwright config
  playwright.config1.js       # Alt config (e.g., Safari project)
  tsconfig.json               # TS config
```

## Scripts

```bash
# Run full regression
npm run regression

# Filter by tag examples
npm run webTests      # --grep @Web
npm run APITests      # --grep @API

# Alternate config (e.g., Safari project)
npm run SafariNewConfig
```

You can also run directly:
```bash
npx playwright test -c playwright.config.js
npx playwright test --project=chromium
npx playwright test tests/ClientAppPO.spec.ts -g "Client App login"
```

## Running Cucumber BDD

Feature files are in `features/*.feature` with step definitions in `features/step_definitions`.
Example invocation:
```bash
npx cucumber-js
```
The project includes both JS and TS step definitions; ensure `ts-node` support if executing TS directly or transpile first.

## Reports

- Default Playwright HTML report:
```bash
npx playwright show-report
```
- Allure (if enabled):
```bash
# example
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

## Environment & Config

- Base settings in `playwright.config.js`
- Alternative settings in `playwright.config1.js` (e.g., Safari project)
- Update timeouts, retries, storage state, and projects as needed

## API Testing

API helpers reside in `utils/APiUtils.js` and `utils_ts/APiUtils.ts`.
Typical flow:
- Authenticate to obtain token
- Create order
- Use token and order id in UI flows

Troubleshooting: if API returns an error (e.g., `{ message: 'Wrong Product ID' }`), ensure product IDs and payload match the backend expectations, and harden parsing to handle error shapes.

## Screenshots

Add screenshots to `docs/screenshots/` and reference them here.

Example:

```markdown
![Login test report](docs/screenshots/login-report.png)
![Visual comparison diff](docs/screenshots/visual-diff.png)
```

You can capture screenshots in tests using Playwright's `page.screenshot()` and save to `docs/screenshots/` for documentation.

## Troubleshooting

- "Cannot find module '@playwright/test'" or missing `tsc`:
  - Run `npm ci`
- "Executable doesn't exist" for browsers:
  - Run `npx playwright install`
- TypeScript implicit any/this in Cucumber steps:
  - Add typings for step params and world context in `features/step_definitions/steps.ts`
- Network/API tests failing with undefined fields:
  - Validate API responses before indexing arrays and log unexpected payloads

## Contributing

- Use feature branches and PRs
- Run tests locally before pushing
- Keep page objects and tests readable and deterministic

## License

ISC
