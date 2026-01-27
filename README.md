# IT23267190 - Assignment 1 ITPM

## Description
This repository contains automated tests using Playwright for the university assignment.

## Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Lithira-Silva/IT23267190---Assignment-1-ITPM-.git
cd IT23267190---Assignment-1-ITPM-
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

## View Test Report

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Project Structure
- `tests/` - Contains test files
- `playwright.config.ts` - Playwright configuration
- `.github/workflows/` - CI/CD configuration for GitHub Actions

## Repository Access
This repository is publicly accessible at: https://github.com/Lithira-Silva/IT23267190---Assignment-1-ITPM-