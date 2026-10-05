# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AlertHandle.spec.ts >> confitm alert
- Location: tests\AlertHandle.spec.ts:19:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Confirm Alert' })
    - locator resolved to <button id="confirm" class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors bg-transparent">Confirm Alert</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fc-dialog-overlay"></div> from <div class="fc-message-root">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fc-dialog-overlay"></div> from <div class="fc-message-root">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    78 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="fc-dialog-overlay"></div> from <div class="fc-message-root">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
              - link "Resume Builder":
                - /url: /resume-builder
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
            - generic [ref=e41]: Alert
          - heading "Alert" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: Accept the Alert
              - button "Simple Alert" [ref=e52] [cursor=pointer]
            - generic [ref=e53]:
              - generic [ref=e54]: Dismiss the Alert & print the alert text
              - button "Confirm Alert" [ref=e56] [cursor=pointer]
            - generic [ref=e57]:
              - generic [ref=e58]: Type your name & accept
              - button "Prompt Alert" [ref=e60] [cursor=pointer]
            - generic [ref=e61]:
              - generic [ref=e62]: Sweet alert
              - button "Modern Alert" [ref=e64] [cursor=pointer]
          - generic [ref=e66]:
            - heading "Learning Points" [level=3] [ref=e71]
            - list [ref=e72]:
              - listitem [ref=e73]:
                - generic [ref=e77]:
                  - text: switchTo()
                  - link "Teaching & Classroom Resources" [ref=e78] [cursor=pointer]
              - listitem [ref=e82]:
                - generic [ref=e86]: accept()
              - listitem [ref=e87]:
                - generic [ref=e91]: dismiss()
              - listitem [ref=e92]:
                - generic [ref=e96]: getText()
              - listitem [ref=e97]:
                - generic [ref=e101]: sendKeys()
              - listitem [ref=e102]:
                - generic [ref=e106]: Sweet Alert
            - generic [ref=e107]:
              - link "Watch Tutorial" [ref=e108] [cursor=pointer]:
                - /url: /video/alert
              - generic [ref=e112]:
                - text: "Practice ID:"
                - code [ref=e113]: alert
          - insertion [ref=e117]
        - insertion [ref=e121]
    - contentinfo [ref=e122]:
      - generic [ref=e123]:
        - paragraph [ref=e124]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e125] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e126] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e127]:
          - link "GitHub" [ref=e128] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e132] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e136] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e142] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e143] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - dialog "Unlock more content" [active] [ref=e146]:
    - generic [ref=e147]:
      - img "Welcome to letcode.in" [ref=e150]
      - generic [ref=e151]:
        - heading "Unlock more content" [level=1] [ref=e152]
        - paragraph [ref=e154]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e156] [cursor=pointer]:
        - generic [ref=e157]:
          - generic [ref=e158]: View a short ad
          - generic [ref=e159]: Site-wide access for 24 hours
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | test('Handle simple Alert', async({page})=>{
  4  | 
  5  | await page.goto('https://letcode.in/alert');
  6  | page.on('dialog',async dialog=>{
  7  | 
  8  |      console.log(dialog.message());
  9  |      await dialog.accept();
  10 | 
  11 | });
  12 | 
  13 | await page.getByRole('button',{name:'Simple Alert'}).click();
  14 | await page.waitForTimeout(5000);
  15 | });
  16 | 
  17 | 
  18 | //Confirmation Alert
  19 | test('confitm alert',async({page})=> {
  20 | 
  21 | await page.goto('https://letcode.in/alert');
  22 |    
  23 | page.on('dialog',async dialog=>{
  24 | 
  25 |      console.log(dialog.message());
  26 |      await dialog.dismiss();
  27 | 
  28 | });
  29 | 
> 30 | await page.getByRole('button',{name:'Confirm Alert'}).click();
     |                                                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
  31 | await page.waitForTimeout(5000);
  32 | });
  33 | 
  34 | //prompt alert
  35 | test('promt alert',async({page})=>{
  36 | await page.goto('https://letcode.in/alert');
  37 | 
  38 | page.on('dialog',async dialog=>{
  39 | 
  40 |      console.log(dialog.message());
  41 |      await dialog.accept('Playwright alert');
  42 |      console.log(dialog.type());          
  43 | 
  44 | });
  45 | await page.locator('#prompt').click();
  46 | await page.waitForTimeout(5000);
  47 | 
  48 | });
  49 | 
  50 | //modern alert
  51 | test ('modern alert',async({page})=>{
  52 | await page.goto('https://letcode.in/alert');
  53 | 
  54 | await page.getByRole('button',{name:'Modern Alert'}).click();
  55 | 
  56 | console.log(await page.locator('.modal-content').textContent());
  57 | 
  58 | await page.locator('.modal-close').click();
  59 | 
  60 | await page.waitForTimeout(5000);
  61 | });
  62 | 
```