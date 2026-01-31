# IT23267190 - Assignment 1 ITPM

## 📝 Description
This repository contains comprehensive automated test suites using Playwright for testing a Singlish to Sinhala translation web application. The test suite includes positive scenarios, negative scenarios, and UI validation tests.

## 📋 Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository) - [Download here](https://git-scm.com/)
- **A code editor** (VS Code recommended)

## 🚀 Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/Lithira-Silva/IT23267190---Assignment-1-ITPM-.git
cd IT23267190---Assignment-1-ITPM-
```

### Step 2: Install Dependencies
Install all required Node.js packages:
```bash
npm install
```

### Step 3: Install Playwright Browsers
Install the Chromium, Firefox, and WebKit browsers:
```bash
npx playwright install
```

### Step 4: Start the Application Server
**IMPORTANT:** Before running tests, ensure your application server is running on `http://localhost:5173/`

For development server (if using Vite):
```bash
npm run dev
```

Or start your application server using the appropriate command for your setup.

## 🧪 Running Tests

### Run All Tests (Default Order)
Tests execute in the following order: Positive → Negative → UI
```bash
npx playwright test
```

### Run Tests with Browser Visible (Headed Mode)
```bash
npx playwright test --headed
```

### Run Tests in Interactive UI Mode
```bash
npx playwright test --ui
```

### Run Specific Test Files
Run only positive tests:
```bash
npx playwright test tests/positive.spec.ts
```

Run only negative tests:
```bash
npx playwright test tests/negative.spec.ts
```

Run only UI tests:
```bash
npx playwright test tests/ui.spec.ts
```

### Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug Tests
```bash
npx playwright test --debug
```

## 📊 View Test Reports

After running tests, view the detailed HTML report:
```bash
npx playwright show-report
```

The report will automatically open in your browser and includes:
- Test execution results
- Screenshots and videos of failures
- Detailed test steps and timings
- Error messages and stack traces

## 📁 Project Structure
```
IT23267190/
├── tests/
│   ├── positive.spec.ts    # Positive test cases (Pos_Fun_0001 to Pos_Fun_0024)
│   ├── negative.spec.ts    # Negative test cases (Neg_Fun_0001 to Neg_Fun_0010)
│   └── ui.spec.ts          # UI test cases (Pos_UI_0001 to Pos_UI_0003)
├── playwright.config.ts    # Playwright configuration
├── playwright-report/      # HTML test reports (auto-generated)
├── test-results/          # Test artifacts (screenshots, videos)
├── package.json           # Project dependencies
└── README.md             # This file
```

## 🧩 Test Suite Overview

### Positive Tests (24 tests)
Tests valid Singlish inputs and verifies correct Sinhala translations.
- **IDs:** Pos_Fun_0001 to Pos_Fun_0024
- **Purpose:** Validate core translation functionality

### Negative Tests (10 tests)
Tests invalid/edge-case inputs to verify proper error handling.
- **IDs:** Neg_Fun_0001 to Neg_Fun_0010
- **Test scenarios:**
  - Informal/incorrect text
  - All caps input
  - Mixed alphanumeric characters
  - URL inputs
  - Special characters
  - XSS injection attempts
  - Very short text
  - Comparison formats
  - Extremely long text
  - Email addresses

### UI Tests (3 tests)
Tests user interface interactions and behavior.
- **IDs:** Pos_UI_0001 to Pos_UI_0003
- **Purpose:** Validate UI responsiveness and element interactions

## ⚙️ Configuration

The test execution order is configured in `playwright.config.ts`:
1. **Positive tests** run first
2. **Negative tests** run second
3. **UI tests** run last

To modify test execution settings, edit `playwright.config.ts`.

## 🐛 Troubleshooting

### Tests Fail with "ERR_CONNECTION_REFUSED"
**Solution:** Ensure your application server is running on `http://localhost:5173/` before running tests.

### Playwright Browsers Not Installed
**Solution:** Run `npx playwright install` to download required browsers.

### Port 5173 Already in Use
**Solution:** Stop any other processes using port 5173 or update the URL in test files.

### Node Version Issues
**Solution:** Update Node.js to version 14 or higher.

## 📦 Dependencies
- `@playwright/test`: ^1.58.0
- `@types/node`: ^25.0.10

## 🔗 Repository Access
This repository is publicly accessible at: https://github.com/Lithira-Silva/IT23267190---Assignment-1-ITPM-

## 👨‍💻 Author
**Student ID:** IT23267190  
**Assignment:** Assignment 1 - ITPM

## 📄 License
ISC

---

## 🆘 Need Help?
If you encounter any issues:
1. Check that Node.js and npm are properly installed: `node --version` && `npm --version`
2. Verify all dependencies are installed: `npm install`
3. Ensure Playwright browsers are installed: `npx playwright install`
4. Confirm the application server is running before executing tests
5. Review the test report for detailed error information: `npx playwright show-report`