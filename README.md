# Sample using Playwright with VSCode devcontainers
Playwright is not fully supported on Fedora Linux. 

>On Linux agents, headed execution requires Xvfb to be installed. Our Docker image and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add xvfb-run before the Node.js command.

`xvfb-run npx playwright test --ui` 
If a browser window doesn't open, check VSCode terminal PORTS tab for any new open ports


Didn't manage to get `npx playwright codegen` to work. 
Workaround - https://chromewebstore.google.com/detail/playwright-crx/jambeljnbnfbkcpnoiaedcabbgmnnlcd
