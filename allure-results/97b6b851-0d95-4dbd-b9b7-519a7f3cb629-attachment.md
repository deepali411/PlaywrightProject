# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandleWindow.spec.ts >> Handle child Window
- Location: tests\HandleWindow.spec.ts:3:5

# Error details

```
Test timeout of 60000ms exceeded.
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
            - generic [ref=e41]: Windows
          - heading "Windows" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: Goto Home
              - button "Open Home Page" [active] [ref=e52] [cursor=pointer]
            - generic [ref=e53]:
              - generic [ref=e54]: Open multiple windows
              - button "Multiple windows" [ref=e56] [cursor=pointer]
            - list [ref=e59]:
              - listitem [ref=e60]: Click on the home button
              - listitem [ref=e61]: Goto the newly opened tab
              - listitem [ref=e62]: Print the title of the page
              - listitem [ref=e63]:
                - text: Close the parent
                - link "window" [ref=e64] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e67]: Close the child window
              - listitem [ref=e68]:
                - text: Click on the Multiple
                - link "windows button" [ref=e69] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e72]: Print all the window titles
              - listitem [ref=e73]: Close all the windows
              - link "Windows" [ref=e74] [cursor=pointer]
          - generic [ref=e79]:
            - heading "Learning Points" [level=3] [ref=e84]
            - list [ref=e85]:
              - listitem [ref=e86]:
                - generic [ref=e90]:
                  - link "Window" [ref=e91] [cursor=pointer]:
                    - /url: "#"
                  - text: Handling concept
              - listitem [ref=e94]:
                - generic [ref=e98]: close()
              - listitem [ref=e99]:
                - generic [ref=e103]: quit()
              - listitem [ref=e104]:
                - generic [ref=e108]: getTitle()
              - listitem [ref=e109]:
                - generic [ref=e113]: List
              - listitem [ref=e114]:
                - generic [ref=e118]: Set - LinkedHashSet
              - listitem [ref=e119]:
                - generic [ref=e123]: Iterator or loop
            - generic [ref=e124]:
              - link "Watch Tutorial" [ref=e125] [cursor=pointer]:
                - /url: /video/window
              - generic [ref=e129]:
                - text: "Practice ID:"
                - code [ref=e130]: window
          - generic [ref=e133]:
            - insertion:
              - iframe [ref=e135]
        - insertion [ref=e139]:
          - generic [ref=e141]:
            - generic "These are topics related to the article that might interest you" [ref=e142]: Discover more
            - link "Programming" [ref=e143] [cursor=pointer]
            - link "Computer Education" [ref=e147] [cursor=pointer]
            - link "Career Resources & Planning" [ref=e151] [cursor=pointer]
            - link "Doors & Windows" [ref=e155] [cursor=pointer]
            - link "Window" [ref=e159] [cursor=pointer]
            - link "Windows" [ref=e163] [cursor=pointer]
            - link "window" [ref=e167] [cursor=pointer]
            - link "Web Portals" [ref=e171] [cursor=pointer]
            - link "Education" [ref=e175] [cursor=pointer]
            - link "Educational Resources" [ref=e179] [cursor=pointer]
    - contentinfo [ref=e183]:
      - generic [ref=e184]:
        - paragraph [ref=e185]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e186] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e187] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e188]:
          - link "GitHub" [ref=e189] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e193] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e197] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e203] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e204] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - generic:
    - insertion:
      - iframe [ref=e206]
```