# 🧪 E2E Tests for Demo Bank

End-to-end test suite for the [Parabank](https://parabank.parasoft.com/parabank/index.htm) demo banking application using [Playwright](https://playwright.dev/) and TypeScript.

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/nikolina-gams/parabank.git
```
### 2. Install dependencies 
```
npm install
```
### 3. Install Playwright browsers
```
npx playwright install
```
### 4. Set up environment variables 🔐
Before running tests create a ".env" file in the root of the project.
> ⚠️ Do not commit the `.env` file to version control. Add it to `.gitignore`.

### 5. Launch Playwright Codegen (for debugging or writing new tests)
```
npx playwright codegen
```
### 6. Run all tests with tracing enabled 
```
npx playwright test --trace on
```
### 7. Open the test report 
```
npx playwright show-report
```
___

**ENJOY TESTING!** 👩‍💻



