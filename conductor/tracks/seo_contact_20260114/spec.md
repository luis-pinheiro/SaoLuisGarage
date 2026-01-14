# Track Specification: SEO Readiness and Contact Form Validation

## 1. Goal
The primary goal of this track is to finalize the application for production by ensuring all SEO mechanisms are correctly configured and the Contact Form is robust, secure, and fully functional. This ensures the site is discoverable by search engines and that potential customers can reliably contact the workshop.

## 2. Core Features & Requirements

### 2.1 SEO Optimization
- **Sitemap & Robots.txt:**
    - Verify `sitemap.ts` generates a valid XML sitemap including all static and dynamic routes.
    - Verify `robots.ts` correctly points to the sitemap and defines appropriate crawl rules.
- **Metadata:**
    - Review `layout.tsx` and page-level metadata to ensure unique titles, descriptions, and Open Graph tags are present and optimized.
    - Ensure JSON-LD structured data (AutoRepair) is correctly implemented and valid.

### 2.2 Contact Form Validation & Logic
- **Form Validation (Zod):**
    - Ensure the Zod schema covers all edge cases (empty fields, invalid email formats, min/max lengths).
    - Verify that validation errors are displayed clearly to the user.
- **Server Actions:**
    - Review the server action handling the form submission.
    - Ensure proper error handling for Nodemailer failures.
    - verify rate limiting or spam protection mechanisms (if any) are functioning.
- **User Feedback:**
    - Ensure loading states are visible during submission.
    - Verify success/error toasts or messages are displayed after submission.

## 3. Tech Stack
- **Next.js 16:** App Router, Server Actions, Metadata API.
- **Zod:** Schema validation.
- **Nodemailer:** Email dispatch.
- **React Hook Form (implied):** For efficient form management on the client.

## 4. Success Criteria
- [ ] `sitemap.xml` is accessible and valid.
- [ ] `robots.txt` is accessible and correctly configured.
- [ ] Contact form submission works successfully, sending an email via Nodemailer.
- [ ] Invalid form inputs trigger visible validation errors.
- [ ] Google Rich Results test confirms valid JSON-LD.
