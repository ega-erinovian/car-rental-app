# Product Requirements Document (PRD)

## Rentcars — Car Rental Website

| Field | Detail |
|---|---|
| **Product** | Rentcars public website (landing page) |
| **Document version** | 0.1 (Draft) |
| **Date** | 5 November 2026 |
| **Derived from** | Rentcars BRD v0.1 |
| **Product owner** | _TBD_ |
| **Status** | Draft for review |
| **Audience** | Product, Design, Engineering, QA, Marketing |

---

## 1. Overview

### 1.1 Product Summary

Rentcars lets people find, book, and rent a car on iOS, Android, or the web, with the car delivered to them. The website is the public entry point: a single-page experience that explains the service, shows popular vehicles, builds trust, and moves the visitor to one of three actions: **search for a car**, **sign up**, or **download the app**.

### 1.2 Problem Statement

Visitors who land on a car rental brand decide in seconds whether it is simple, trustworthy, and worth their time. Without a clear value proposition, an immediate way to start a search, and visible social proof, they leave before searching, signing up, or installing the app.

### 1.3 Product Vision

"Find, book and rent a car easily." A visitor should be able to start a rental search within one screen of landing, and understand why Rentcars is a safe choice within one scroll.

### 1.4 Goals

| ID | Goal | Maps to BRD |
|---|---|---|
| G1 | Maximize search starts from the hero search bar | BO-1 |
| G2 | Increase sign-ups from the header and downstream flows | BO-2 |
| G3 | Drive app installs through hero and download-section badges | BO-3 |
| G4 | Build trust via guarantees, support promises, and testimonials | BO-4 |
| G5 | Push traffic from featured vehicles into booking | BO-5 |
| G6 | Surface the vehicle-owner entry point ("Become a renter") | BO-6 |

### 1.5 Non-Goals (This Release)

- Building the authentication, search results, vehicle detail, checkout, or payment pages (the page links to them).
- The "Become a renter" owner onboarding flow.
- The full vehicle listing page behind "Show all vehicles".
- Driver assignment, delivery logistics, or the support tooling behind the promises on the page.
- The Rentcars mobile apps.
- Multi-language support.

### 1.6 Success Metrics (Proposed, Baselines TBD)

| Metric | Definition | Target |
|---|---|---|
| Search start rate | Sessions with a valid search submitted ÷ sessions | Set after baseline |
| Rent Now CTR | Rent Now clicks ÷ sessions reaching the deals section | Set after baseline |
| Sign-up CTR | Sign up clicks ÷ sessions | Set after baseline |
| App badge CTR | Store badge clicks ÷ sessions | Set after baseline |
| Bounce rate | Single-page, no-interaction sessions | Reduce vs. baseline |
| LCP (mobile, p75) | Largest Contentful Paint | ≤ 2.5 s |
| Accessibility | Automated + manual WCAG 2.1 AA audit | 0 critical issues |

---

## 2. Users

### 2.1 Personas

| Persona | Needs | Key page elements |
|---|---|---|
| **Weekend/leisure renter** | Quickly find an attractive car for specific dates | Hero search, popular deals |
| **Renter who wants a driver** | Reassurance that an experienced driver is available | Why choose us, How it works |
| **Mobile-first customer** | Book from the phone with exclusive deals | App badges, download section |
| **Prospective vehicle owner** | Learn how to list a car | "Become a renter" link |
| **Skeptical first-time visitor** | Proof that the service is reliable | Testimonials, guarantees, support, contact details |

### 2.2 Primary User Journeys

1. **Search journey:** Land → enter location and dates → Search → results page.
2. **Browse journey:** Land → scroll to Popular deals → Rent Now on a vehicle → vehicle detail/booking.
3. **Account journey:** Land → Sign up → registration flow.
4. **App journey:** Land → tap a store badge → store listing.
5. **Owner journey:** Land → Become a renter → owner onboarding.

---

## 3. User Stories and Acceptance Criteria

Priority: **P0** = launch blocker, **P1** = launch target, **P2** = later.

### 3.1 Navigation

**US-01 (P0)** As a visitor, I want a persistent header so that I can reach key sections and my account quickly.

- Given I am on the page, then I see the logo, the links "Become a renter", "Rental deals", "How it work", "Why choose us", a "Sign in" link, and a "Sign up" button.
- When I click "Rental deals", "How it work", or "Why choose us", the page smooth-scrolls to that section and the URL hash updates.
- When I click the logo, the page scrolls to the top.
- Given a viewport narrower than 768 px, then the links collapse into a menu button that opens a full list, including Sign in and Sign up.
- When the mobile menu is open and I choose a link, then the menu closes and the page scrolls to the target.

**US-02 (P0)** As a visitor, I want to sign in or sign up from the header.

- When I click "Sign in", I go to the sign-in page.
- When I click "Sign up", I go to the registration page.

**US-03 (P1)** As a prospective owner, I want to find the owner entry point.

- When I click "Become a renter", I go to the owner onboarding page (URL TBD).

### 3.2 Hero and Search

**US-04 (P0)** As a visitor, I immediately understand what Rentcars does.

- Then I see the headline "Find, book and rent a car Easily" with "Easily" highlighted, the supporting text, store badges, and the hero vehicle image.

**US-05 (P0)** As a renter, I want to search by location and dates from the hero.

- Given the search bar, then it has fields: Location, Pickup date (date + time), Return date (date + time), and a Search button.
- When I submit with a valid location, pickup, and return, I go to the search results page with the values as query parameters.
- When I submit with a missing location, then the field shows an inline error ("Please enter a location") and focus moves to it.
- When the pickup is in the past, then the error "Pickup must be in the future" shows.
- When the return is the same as or earlier than the pickup, then the error "Return must be after pickup" shows.
- When I change the pickup to a date after the current return, the return field resets or shifts to keep a valid range (default: pickup + 1 day, same time).
- Pressing Enter in any search field submits the form.

**US-06 (P1)** As a renter, I want location suggestions.

- When I type at least 2 characters, then a suggestion list appears (debounced, 250 ms).
- When I pick a suggestion with mouse, touch, or keyboard (arrow keys + Enter), then the field is populated and the list closes.
- When no suggestions match, then "No locations found" shows.
- When the suggestion service fails, then the user can still submit free text and no blocking error is shown.

**US-07 (P1)** As a renter, I want pickers that are easy to use.

- Date fields display a weekday, day, month, and 24-hour time (e.g., "Tue 15 Feb, 09:00").
- Tapping a date field opens a calendar and time selector (native or custom), usable on touch and keyboard.

**US-08 (P0)** As a mobile user, I want store badges that go to the right store.

- When I click "Google Play" I go to the Google Play listing; when I click "App Store" I go to the App Store listing (opening in a new tab).

### 3.3 How It Works

**US-09 (P0)** As a visitor, I understand the booking process in three steps.

- Then I see the label "HOW IT WORK", the heading "Rent with following 3 working steps", and three steps with icons: Choose location, Pick-up date, Book your car.

**US-10 (P1)** As a visitor, I see which car brands are available.

- Then a looping, horizontally moving logo strip shows brands (Honda, Jaguar, Nissan, Volvo, Audi, Acura, and more).
- When I hover (or focus) the strip, then the motion pauses.
- When the user has "reduce motion" enabled, then the strip is static and scrollable.
- The strip is hidden from screen readers if purely decorative, or provides a text list of brands.

### 3.4 Why Choose Us

**US-11 (P0)** As a visitor, I see Rentcars' key promises.

- Then I see the label "WHY CHOOSE US", the heading, the feature image, and four items: Best price guaranteed, Experience driver, 24 hour car delivery, 24/7 technical support, each with an icon, title, and description.

**US-12 (P1)** As a visitor, I can learn the terms behind a promise.

- When the business supplies terms, then "Best price guaranteed" includes a "Terms apply" link to them. (Blocked on open question OQ-4.)

### 3.5 Popular Rental Deals

**US-13 (P0)** As a visitor, I see featured vehicles.

- Then I see the label "POPULAR RENTAL DEALS" and the heading "Most popular cars rental deals".
- Each card shows: image, name, rating (one decimal) with review count, passengers, transmission, air conditioning, doors, price per day, and a "Rent Now" button.
- Cards are laid out 4 per row on desktop, 2 on tablet, 1 on mobile.

**US-14 (P0)** As a visitor, I can rent a featured vehicle.

- When I click "Rent Now", I go to that vehicle's detail/booking page, carrying any existing search parameters.
- The whole card is not a link; only the button (and optionally the vehicle name) is, to avoid accidental taps.

**US-15 (P0)** As a visitor, I can see all vehicles.

- When I click "Show all vehicles", I go to the vehicle listing page.

**US-16 (P1)** As a visitor, I get graceful behavior when data is slow or missing.

- While data loads, then skeleton cards show.
- When the vehicle request fails, then an inline message with a "Try again" button replaces the grid, and the rest of the page still works.
- When there are fewer than 4 vehicles, then the cards render without empty placeholders.

### 3.6 Testimonials

**US-17 (P0)** As a visitor, I read what other customers say.

- Then I see the label "TESTIMONIALS", the heading, and a carousel of cards with a photo, rating (e.g., "5.0 stars" and star icons), the quote, name, and location.

**US-18 (P1)** As a visitor, I can move through testimonials.

- I can navigate by swipe/drag, prev/next controls, and keyboard.
- The active card is fully visible and adjacent cards are partly visible on desktop; on mobile one card is shown at a time.
- Auto-advance (if used) pauses on hover/focus and is disabled for reduced motion.
- Controls have accessible names, and the active slide is announced politely to screen readers.

### 3.7 Download App

**US-19 (P0)** As a visitor, I am invited to download the app.

- Then I see the label "DOWNLOAD", the heading "Download Rentcars App for FREE", the supporting text, both store badges, and a phone mockup.

### 3.8 Footer

**US-20 (P0)** As a visitor, I find contact details and secondary links.

- Then I see the logo, address, phone, email, the link groups (Our Product, Resources, About Rentcars), and social icons (Facebook, Instagram, YouTube).
- Phone and email are clickable (`tel:` and `mailto:`).
- Social links open in a new tab with `rel="noopener noreferrer"` and accessible names.
- The copyright year is generated from the current date.
- Footer links to pages that don't exist yet are either removed or point to a "Coming soon" page (decision in OQ-8).

---

## 4. Feature Requirements Summary

| ID | Feature | Priority | BRD reference | Stories |
|---|---|---|---|---|
| F-01 | Header navigation + mobile menu | P0 | FR-NAV-01–06 | US-01–03 |
| F-02 | Hero content | P0 | FR-HERO-01–04 | US-04, US-08 |
| F-03 | Rental search form with validation | P0 | FR-HERO-05, 07, 08 | US-05 |
| F-04 | Location autocomplete | P1 | FR-HERO-06 | US-06 |
| F-05 | Date/time pickers | P1 | FR-HERO-09 | US-07 |
| F-06 | How it works steps | P0 | FR-HOW-01–02 | US-09 |
| F-07 | Brand logo carousel | P1 | FR-HOW-03–05 | US-10 |
| F-08 | Why choose us | P0 | FR-WHY-01–03, 05 | US-11 |
| F-09 | Guarantee terms link | P1 | FR-WHY-04 | US-12 |
| F-10 | Popular deals grid | P0 | FR-DEAL-01–05, 07–08 | US-13–15 |
| F-11 | Deals data loading/error states | P1 | FR-DEAL-06 | US-16 |
| F-12 | Testimonials carousel | P0/P1 | FR-TEST-01–05 | US-17–18 |
| F-13 | Download app section | P0 | FR-APP-01–04 | US-19 |
| F-14 | Device-aware store badge priority | P2 | FR-APP-05 | — |
| F-15 | Footer | P0 | FR-FOOT-01–05 | US-20 |
| F-16 | Analytics instrumentation | P0 | NFR-07 | Section 9 |

---

## 5. Page Structure and UX Specification

### 5.1 Section Order

1. Header (sticky or static — see OQ-6)
2. Hero + floating search bar
3. How it work + brand logo strip
4. Why choose us
5. Popular rental deals
6. Testimonials
7. Download app
8. Footer

### 5.2 Responsive Behavior

| Breakpoint | Width | Key behavior |
|---|---|---|
| Mobile | < 768 px | Menu button replaces nav; hero text stacked above the image; search fields stack vertically with a full-width Search button; steps and features stack; deals 1 column; testimonial card shows photo above text; footer columns stack |
| Tablet | 768–1279 px | Condensed nav; deals 2 columns; search bar may wrap to two rows |
| Desktop | ≥ 1280 px | Layout as designed (1440 px reference); content max-width about 1120 px centered |

Mobile and tablet comps are not yet supplied (see OQ-1).

### 5.3 Visual System (To Be Verified Against Design File)

| Token | Guidance from design |
|---|---|
| Primary | Bright blue — buttons, logo, section labels, highlighted words |
| Primary tint | Very light blue — pills, icon tiles, background shapes |
| Neutral text | Near-black headings, mid-gray body text |
| Footer | Dark navy |
| Font | Geometric sans-serif, appears to be Poppins |
| Radius | Rounded pills, tiles, cards, and buttons |
| Elevation | Soft shadow on cards and the search bar |

### 5.4 Component Inventory

| Component | Used in | Variants / states |
|---|---|---|
| Logo | Header, footer | Light, dark |
| Button | Sign up, Search, Rent Now, Show all vehicles | Primary (filled), secondary (outlined); default, hover, focus, active, disabled, loading |
| Text link | Sign in, nav, footer | Default, hover, focus, active |
| Section label (pill) | All sections | — |
| Search bar | Hero | Default, focused, error, loading |
| Text input with icon | Location | Default, focus, error, suggestions open |
| Date-time field | Pickup, return | Default, focus, error, picker open |
| Step card | How it work | — |
| Brand logo strip | How it work | Moving, paused, static |
| Feature item | Why choose us | — |
| Vehicle card | Deals | Default, hover, loading skeleton |
| Rating | Vehicle card, testimonial | — |
| Spec item (icon + text) | Vehicle card | — |
| Testimonial card | Testimonials | Active, inactive |
| Carousel controls | Testimonials | Default, disabled |
| Store badge | Hero, download | Google Play, App Store |
| Phone mockup | Download | — |
| Footer link group | Footer | — |
| Social icon link | Footer | Default, hover, focus |

### 5.5 Interaction and Motion

- Smooth scroll to anchors; offset for a sticky header if used.
- Subtle hover elevation on vehicle cards and button hover states.
- Logo strip auto-scroll and testimonial transitions must respect `prefers-reduced-motion`.
- Images below the fold load lazily; the hero image loads eagerly with priority.

---

## 6. Content Requirements

### 6.1 Static Copy (From Design, With Recommended Fixes)

| Location | Design copy | Recommended copy |
|---|---|---|
| Hero text | "…with your IOS and Android device." | "…with your iOS and Android device." |
| Nav / label | "How it work" | "How it works" (confirm) |
| How it works, step 1 | "Choose your and find your best car" | "Choose your location and find your best car" |
| Why choose us | "Experience driver" | "Experienced driver" |
| Deals specs | "Passagers" | "Passengers" |
| Testimonials heading | "What peole say about us?" | "What people say about us?" |
| Testimonial quote | "…caretall's services…" | Use "Rentcars" or replace the testimonial |

### 6.2 Dynamic Content

| Content | Source | Owner |
|---|---|---|
| Featured vehicles | API/CMS | Fleet / marketing |
| Testimonials | CMS | Marketing |
| Brand logos | CMS or static assets | Marketing / legal |
| Location suggestions | Locations API | Backend |
| Contact details, social links, store URLs | Config | Marketing |

---

## 7. Data and API Requirements (Proposed)

### 7.1 Data Models

**Vehicle (featured)**

| Field | Type | Notes |
|---|---|---|
| id | string | |
| name | string | e.g., "Jaguar XE L P250" |
| imageUrl | string | Transparent-background image, consistent aspect ratio |
| rating | number | 0–5, one decimal |
| reviewCount | integer | Formatted per locale |
| passengers | integer | |
| transmission | enum | `auto`, `manual` |
| airConditioning | boolean | |
| doors | integer | |
| pricePerDay | number | |
| currency | string | ISO 4217 code |

**Testimonial**

| Field | Type | Notes |
|---|---|---|
| id | string | |
| rating | number | e.g., 5.0 |
| quote | string | Character limit TBD |
| authorName | string | |
| authorLocation | string | e.g., "New York, US" |
| photoUrl | string | Requires consent |

**Brand logo:** `id`, `name`, `logoUrl`, `linkUrl?`

**Location suggestion:** `id`, `label`, `type` (city, airport, address), optional coordinates

### 7.2 Endpoints (Proposed — Final Contract With Backend)

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/vehicles/featured` | Vehicles for the Popular deals grid |
| GET | `/locations/suggest?q={text}` | Autocomplete |
| GET | `/testimonials` | Carousel content |
| GET | `/brands` | Logo strip (optional if static) |

### 7.3 Outbound Navigation Contracts

| Action | Destination | Parameters |
|---|---|---|
| Search | Results page | `location`, `pickup` (ISO 8601), `return` (ISO 8601) |
| Rent Now | Vehicle detail/booking | `vehicleId`, plus search parameters if set |
| Show all vehicles | Vehicle listing | — |
| Sign in / Sign up | Auth pages | Optional `redirect` |
| Become a renter | Owner onboarding | — |
| Store badges | Store URLs | New tab |

---

## 8. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Performance | LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms on mid-range mobile over 4G; images in modern formats with explicit dimensions; fonts preloaded with `font-display: swap`; total initial JS kept minimal |
| Accessibility | WCAG 2.1 AA; semantic landmarks (header, main, footer); visible focus; sufficient contrast (review gray body text and placeholders); alt text on informative images; labelled form fields; carousel pause/controls; error messages tied to inputs |
| SEO | One H1 (hero headline); logical heading hierarchy; title and meta description; Open Graph and Twitter tags; Organization structured data; canonical URL; sitemap and robots |
| Browser support | Last two versions of Chrome, Safari, Firefox, Edge; iOS Safari and Android Chrome |
| Security and privacy | HTTPS; no sensitive data in logs; cookie consent before non-essential analytics where required; privacy policy link |
| Reliability | Page renders and core links work even if all data APIs fail (static fallbacks) |
| Localization readiness | Strings externalized; currency, number, and date formats configurable |
| Maintainability | Design tokens, reusable components, content separated from code |

---

## 9. Analytics Specification

| Event | Trigger | Properties |
|---|---|---|
| `page_view` | Page load | `referrer`, `utm_*` |
| `nav_click` | Header link click | `link_name` |
| `sign_in_click` / `sign_up_click` | Header buttons | `location: header` |
| `search_started` | First focus in the search bar | — |
| `search_validation_error` | Validation fails | `field`, `error_type` |
| `search_submitted` | Valid submit | `location`, `pickup`, `return`, `duration_days` |
| `location_suggestion_selected` | Suggestion chosen | `position`, `query_length` |
| `vehicle_card_view` | Card at least 50% visible for 1 s | `vehicle_id`, `position` |
| `rent_now_click` | Rent Now | `vehicle_id`, `position`, `price` |
| `show_all_vehicles_click` | Button click | — |
| `testimonial_navigate` | Prev/next/swipe | `direction`, `index` |
| `app_badge_click` | Store badge | `store`, `placement` (hero, download) |
| `become_renter_click` | Nav link | — |
| `footer_link_click` | Footer link | `group`, `link_name` |
| `social_click` | Social icon | `network` |
| `section_view` | Section 50% visible | `section_name` |

---

## 10. Dependencies

| Dependency | Owner | Needed by |
|---|---|---|
| Final copy, photography, vehicle images | Marketing | Before build start of each section |
| Mobile and tablet designs | Design | Before build start |
| Design file with exact tokens and exported assets | Design | Before build start |
| Featured vehicles, testimonials, locations APIs | Backend | Integration phase |
| Auth, results, vehicle detail, listing, owner pages (or agreed URLs) | Product / other teams | Before QA |
| Store listing URLs, social profile URLs | Marketing | Before QA |
| Logo and trademark clearance | Legal | Before launch |
| "Best price guaranteed" terms | Legal / business | Before launch |
| Analytics and consent tooling | Marketing / data | Before launch |

---

## 11. Release Plan (Proposed)

| Phase | Scope | Exit criteria |
|---|---|---|
| **0. Discovery** | Resolve open questions OQ-1–OQ-4, 7; receive responsive designs and assets | Signed-off designs and content |
| **1. MVP (P0)** | Header, hero + search with validation, how it works, why choose us, deals grid (static or API), testimonials, download, footer, analytics | All P0 stories pass acceptance; performance and accessibility targets met |
| **2. Enhancements (P1)** | Autocomplete, custom pickers, brand strip, loading/error states, guarantee terms link, testimonial controls polish | P1 stories pass; metrics reviewed |
| **3. Optimization (P2)** | Device-aware badges, A/B tests on hero copy and CTAs | Experiments defined from MVP data |

---

## 12. QA and Test Considerations

- **Functional:** every link and CTA destination; search validation matrix (empty, past date, return before pickup, boundary times); autocomplete empty/error; carousel controls.
- **Responsive:** 360, 390, 768, 1024, 1280, 1440, 1920 px; portrait/landscape.
- **Cross-browser/device:** per NFR browser list.
- **Accessibility:** keyboard-only pass, screen reader pass (VoiceOver, NVDA), contrast checks, reduced-motion.
- **Performance:** Lighthouse/WebPageTest on throttled mobile; image weight budget.
- **Content:** typos and consistency items from BRD Section 13 verified fixed.
- **Analytics:** each event fires once with the correct properties.
- **Failure modes:** API timeouts, empty arrays, very long names/quotes, missing images, slow network.

---

## 13. Risks and Mitigations

| ID | Risk | Mitigation |
|---|---|---|
| R-1 | Third-party brand logos and vehicle photos lack usage rights | Legal review; use licensed or owned assets |
| R-2 | Guarantee, driver, and 24-hour delivery promises not backed by operations | Align copy with what operations can deliver; add terms |
| R-3 | Fabricated or placeholder testimonials and ratings reach production | Use verified content only; content sign-off |
| R-4 | Missing responsive designs cause rework | Block build on design delivery |
| R-5 | Heavy imagery hurts load time and conversion | Image optimization, lazy loading, performance budget |
| R-6 | Destination pages are not ready at launch | Agree URLs and interim behavior (e.g., "Coming soon") |
| R-7 | Inconsistent contact details harm credibility | Business confirms the final contact data |

---

## 14. Open Questions

| ID | Question | Owner | Blocks |
|---|---|---|---|
| OQ-1 | Can design provide mobile and tablet layouts and the token/asset export? | Design | Phase 1 |
| OQ-2 | Is the scope the landing page only, or does it include downstream flows? | Product | Planning |
| OQ-3 | What are the destination URLs for Rent Now, Show all vehicles, Become a renter, Sign in/up? | Product | QA |
| OQ-4 | What are the terms of "Best price guaranteed"? Is the "Terms apply" link needed? | Legal / business | US-12 |
| OQ-5 | Which currency and regions at launch? Is the price shown before tax or fees? | Business | US-13 |
| OQ-6 | Is the header sticky on scroll? | Design | US-01 |
| OQ-7 | What are the search rules — minimum rental duration, operating hours, maximum advance booking, timezone handling? | Product / ops | US-05 |
| OQ-8 | Which footer links exist at launch? Should "Priceline" and "Cruises" be removed? | Marketing | US-20 |
| OQ-9 | Should the search bar include vehicle type, driver option, or delivery address? | Product | US-05 |
| OQ-10 | Where do ratings and review counts come from, and how are they calculated? | Product / data | US-13 |
| OQ-11 | Final contact details (address vs. +603 phone code mismatch; branded email)? | Business | US-20 |
| OQ-12 | Is testimonial auto-advance wanted? | Design / marketing | US-18 |

---

## 15. Appendix — BRD to PRD Traceability

| BRD requirement group | PRD features |
|---|---|
| FR-NAV-01–06 | F-01 |
| FR-HERO-01–04 | F-02 |
| FR-HERO-05, 07, 08 | F-03 |
| FR-HERO-06 | F-04 |
| FR-HERO-09 | F-05 |
| FR-HOW-01–02 | F-06 |
| FR-HOW-03–05 | F-07 |
| FR-WHY-01–03, 05 | F-08 |
| FR-WHY-04 | F-09 |
| FR-DEAL-01–05, 07–08 | F-10 |
| FR-DEAL-06 | F-11 |
| FR-TEST-01–05 | F-12 |
| FR-APP-01–04 | F-13 |
| FR-APP-05 | F-14 |
| FR-FOOT-01–05 | F-15 |
| NFR-07 | F-16 |
| NFR-01–06, 08–10 | PRD Section 8 |

---

## 16. Approval

| Name | Role | Signature | Date |
|---|---|---|---|
| | Product Owner | | |
| | Design Lead | | |
| | Engineering Lead | | |
| | QA Lead | | |
| | Marketing Lead | | |
