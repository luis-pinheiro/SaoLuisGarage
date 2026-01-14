# Track Plan: SEO Readiness and Contact Form Validation

## Phase 1: SEO Verification and Optimization

- [x] Task: Audit and Validate SEO Configuration (7b9b658)
    - [ ] Subtask: Review `src/app/sitemap.ts` to ensure it dynamically includes all necessary routes and properties (lastModified).
    - [ ] Subtask: Review `src/app/robots.ts` to ensure it allows indexing and correctly points to the sitemap URL.
    - [ ] Subtask: Inspect `src/app/layout.tsx` for comprehensive Metadata (title, description, keywords, OpenGraph, Twitter cards).
    - [ ] Subtask: Validate the JSON-LD structured data in `layout.tsx` using a validator tool or logic check.
    - [ ] Subtask: Test: Manually verify the generated `/sitemap.xml` and `/robots.txt` in a local dev environment.

- [ ] Task: Conductor - User Manual Verification 'SEO Verification and Optimization' (Protocol in workflow.md)

## Phase 2: Contact Form Robustness

- [ ] Task: Review and Enhance Zod Validation Schema
    - [ ] Subtask: Locate the Zod schema (likely in `src/lib/schemas.ts` or within the component/action file).
    - [ ] Subtask: Ensure strict validation rules: Name (min length), Email (format), Phone (optional/format), Message (min length).
    - [ ] Subtask: Test: Create a test case (or manual test) to submit empty/invalid forms and verify Zod returns expected error codes.

- [ ] Task: Verify Server Action and Email Dispatch
    - [ ] Subtask: Audit `src/app/actions.ts` (or relevant file) for the email sending logic.
    - [ ] Subtask: Ensure `try/catch` blocks correctly handle Nodemailer errors and return structured error responses to the client.
    - [ ] Subtask: Check environment variable usage for `EMAIL_USER` and `EMAIL_PASS`.
    - [ ] Subtask: Test: Simulate a successful email send and a failed email send (e.g., wrong credentials) to verify the UI response.

- [ ] Task: UI Feedback and UX Polish
    - [ ] Subtask: Verify `src/components/Contact.tsx` handles the `isSubmitting` / `pending` state visually (e.g., disabled button, spinner).
    - [ ] Subtask: Ensure success and error messages are clearly displayed to the user upon server action completion.

- [ ] Task: Conductor - User Manual Verification 'Contact Form Robustness' (Protocol in workflow.md)
