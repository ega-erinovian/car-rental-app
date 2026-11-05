# Business Requirements Document (BRD)

## Rentcars — Car Rental Marketing & Booking Entry Website

| Field | Detail |
|---|---|
| **Project name** | Rentcars Website |
| **Document version** | 0.1 (Draft) |
| **Date** | 30 October 2026 |
| **Document owner** | _TBD_ |
| **Status** | Draft for review |
| **Source material** | 7 design sections (Header, How it work, Why choose us, Popular rental deals, What people say, Download app, Footer) |

---

## 1. Executive Summary

Rentcars is an online car rental brand that lets customers find, book, and rent a car from their phone or browser, with delivery of the car directly to the customer. This document defines the business requirements for the Rentcars public website: a single-page marketing site whose goals are to present the brand, show featured rental deals, build trust, and move visitors into the booking flow or toward downloading the iOS/Android app.

The site is built around seven content sections (see Section 6), a persistent search bar for location and rental dates, and calls to action for sign-up, "Rent Now", and app download.

## 2. Business Objectives

| ID | Objective | Success indicator (proposed, to be confirmed) |
|---|---|---|
| BO-1 | Increase car rental bookings through the website | Booking conversion rate from search; number of searches submitted |
| BO-2 | Grow registered users | Sign-up click-through and completion rate |
| BO-3 | Drive mobile app installs | Click-through on Google Play / App Store badges |
| BO-4 | Build trust and brand credibility | Engagement with testimonials; bounce rate; time on page |
| BO-5 | Promote popular/high-value vehicles | Click-through on "Rent Now" and "Show all vehicles" |
| BO-6 | Attract new vehicle owners/partners | Click-through on "Become a renter" |

## 3. Scope

### 3.1 In Scope

- Responsive public landing page with seven sections: Header/Hero, How it work, Why choose us, Popular rental deals, Testimonials, Download app, Footer.
- Top navigation with anchor links, Sign in and Sign up entry points.
- Rental search widget (location, pickup date/time, return date/time).
- Featured vehicle cards with rating, specs, and daily price.
- Testimonial carousel, brand-logo carousel.
- App download badges linking to Google Play and the App Store.
- Footer with contact information, link groups, and social links.

### 3.2 Out of Scope (for this document — to be confirmed)

The designs only show entry points for the following. Their detailed requirements need separate documents:

- Authentication (sign-in / sign-up flows, password recovery).
- Search results page and vehicle detail page.
- Booking, checkout, and payment.
- "Become a renter" onboarding (vehicle owner flow).
- "Show all vehicles" listing page.
- Chauffeur/driver assignment workflow.
- Delivery logistics and 24/7 support tooling.
- Mobile app development.
- Help Centre, Guides, Career, Press Center, Investor Relations, and other footer destination pages.

## 4. Stakeholders

| Stakeholder | Interest |
|---|---|
| Business owner / Product owner | Revenue, bookings, brand positioning |
| Marketing team | Content, campaigns, SEO, analytics |
| UI/UX designers | Fidelity to the design, consistency |
| Frontend / backend developers | Implementation and integration |
| QA team | Verification against acceptance criteria |
| Customer support | Support channel, FAQs, contact accuracy |
| Fleet / operations team | Vehicle data, availability, delivery |
| Legal / compliance | Trademarks, privacy, terms, pricing claims |
| End customers (renters) | Easy discovery and booking |
| Vehicle owners / partners | Listing vehicles through "Become a renter" |

## 5. User Personas (Assumed)

| Persona | Description | Primary goal |
|---|---|---|
| **Leisure/short-term renter** | Wants a car for a weekend or a trip, often with a premium or sports vehicle | Quickly search, compare, and book |
| **Renter without a driver** | Needs a car but prefers an experienced driver | Book a car with a driver |
| **Mobile-first customer** | Prefers to book through an app | Download the app for faster booking and exclusive deals |
| **Prospective vehicle owner** | Wants to rent out their own car | Find out how to become a renter |

## 6. Business and Functional Requirements

### 6.1 Global Navigation (Header)

**Business need:** Let visitors reach key sections and account actions from anywhere on the page.

| ID | Requirement | Priority |
|---|---|---|
| FR-NAV-01 | Display the Rentcars logo (icon + "RENTCARS" wordmark) at the top-left; clicking it returns to the home page top. | Must |
| FR-NAV-02 | Display the navigation links: **Become a renter**, **Rental deals**, **How it work**, **Why choose us**. | Must |
| FR-NAV-03 | "Rental deals", "How it work", and "Why choose us" scroll to the matching page sections. | Must |
| FR-NAV-04 | "Become a renter" navigates to the vehicle-owner onboarding page (destination to be confirmed). | Should |
| FR-NAV-05 | Display a **Sign in** text link and a primary **Sign up** button at the top-right. | Must |
| FR-NAV-06 | On smaller screens, collapse the navigation into a mobile menu that keeps all links and the Sign in / Sign up actions. | Must |

### 6.2 Hero Section

**Business need:** Communicate the value proposition immediately and let the visitor start a rental search.

| ID | Requirement | Priority |
|---|---|---|
| FR-HERO-01 | Display the headline "Find, book and rent a car **Easily**", with "Easily" highlighted in the brand blue and an underline accent. | Must |
| FR-HERO-02 | Display the supporting text: "Get a car wherever and whenever you need it with your IOS and Android device." | Must |
| FR-HERO-03 | Display **Google Play** and **App Store** badges linking to the respective store listings. | Must |
| FR-HERO-04 | Display a hero image of a featured vehicle (blue sports car) over the decorative light-blue background shapes. | Must |
| FR-HERO-05 | Display a floating search bar at the bottom of the hero with: **Location** (text input, placeholder "Search your location"), **Pickup date** (date + time picker, example "Tue 15 Feb, 09:00"), **Return date** (date + time picker, example "Thu 16 Feb, 11:00"), and a **Search** button. | Must |
| FR-HERO-06 | Location input supports search with suggestions (autocomplete). | Should |
| FR-HERO-07 | Validate the search form: location required; pickup date/time cannot be in the past; return date/time must be after pickup. Show inline error messages. | Must |
| FR-HERO-08 | Submitting a valid search takes the user to the search results page with the selected parameters. | Must |
| FR-HERO-09 | Date fields show human-readable formatting (weekday, day, month, 24-hour time) and open a calendar/time picker on click or tap. | Should |

### 6.3 How It Work Section

**Business need:** Show that renting is simple.

| ID | Requirement | Priority |
|---|---|---|
| FR-HOW-01 | Display a section label "HOW IT WORK" and the heading "Rent with following 3 working steps". | Must |
| FR-HOW-02 | Display three steps, each with an icon, title, and description: (1) **Choose location** — find your best car; (2) **Pick-up date** — select your pick-up date and time to book your car; (3) **Book your car** — we deliver it directly to you. | Must |
| FR-HOW-03 | Display a horizontally scrolling carousel of partner/vehicle brand logos (Honda, Jaguar, Nissan, Volvo, Audi, Acura, and others). The carousel loops continuously and may be partially cut at the viewport edges. | Should |
| FR-HOW-04 | Pause the logo carousel on hover and respect the user's reduced-motion setting. | Should |
| FR-HOW-05 | Brand logos must be used only with the appropriate rights/permission (see Risks). | Must |

### 6.4 Why Choose Us Section

**Business need:** Differentiate Rentcars and justify the service.

| ID | Requirement | Priority |
|---|---|---|
| FR-WHY-01 | Display a section label "WHY CHOOSE US" and the heading "We offer the best experience with our rental deals". | Must |
| FR-WHY-02 | Display a feature image (silver sports car) with the decorative background shape on the left. | Must |
| FR-WHY-03 | Display four feature items, each with an icon, title, and description: **Best price guaranteed** — find a lower price and get 100% of the difference refunded; **Experience driver** — an experienced driver is available if the customer has none; **24 hour car delivery** — book anytime and the car is delivered directly; **24/7 technical support** — contact Rentcars support any time. | Must |
| FR-WHY-04 | The "Best price guaranteed" promise requires defined terms and conditions (eligibility, proof of lower price, refund process) before launch. | Must |
| FR-WHY-05 | On mobile, stack the image above the feature list. | Must |

### 6.5 Popular Rental Deals Section

**Business need:** Showcase high-demand vehicles and drive users into the booking flow.

| ID | Requirement | Priority |
|---|---|---|
| FR-DEAL-01 | Display a section label "POPULAR RENTAL DEALS" and the heading "Most popular cars rental deals". | Must |
| FR-DEAL-02 | Display vehicle cards in a four-column grid on desktop. Each card contains: vehicle image, name, star rating with review count, specs (passengers, transmission, air conditioning, doors), daily price, and a **Rent Now** button. | Must |
| FR-DEAL-03 | Initial featured vehicles (sample content from the design): see table below. | Must |
| FR-DEAL-04 | **Rent Now** takes the user to the vehicle detail / booking page for that vehicle, carrying any search parameters already selected. | Must |
| FR-DEAL-05 | **Show all vehicles** takes the user to the full vehicle listing page. | Must |
| FR-DEAL-06 | Vehicle data (name, image, rating, review count, specs, price) comes from a managed source (CMS or API), not hardcoded. | Should |
| FR-DEAL-07 | Prices display in a single configured currency with consistent number formatting. | Must |
| FR-DEAL-08 | Responsive layout: 4 columns on desktop, 2 on tablet, 1 on mobile (or a horizontal swipe). | Must |

**Sample vehicle content (from design):**

| Vehicle | Rating | Reviews | Passengers | Transmission | Air conditioning | Doors | Price / day |
|---|---|---|---|---|---|---|---|
| Jaguar XE L P250 | 4.8 | 2,436 | 4 | Auto | Yes | 4 | $1,800 |
| Audi R8 | 4.6 | 1,936 | 2 | Auto | Yes | 2 | $2,100 |
| BMW M3 | 4.5 | 2,036 | 4 | Auto | Yes | 4 | $1,600 |
| Lamborghini Huracan | 4.3 | 2,236 | 2 | Auto | Yes | 2 | $2,300 |

### 6.6 Testimonials Section

**Business need:** Build trust through social proof.

| ID | Requirement | Priority |
|---|---|---|
| FR-TEST-01 | Display a section label "TESTIMONIALS" and the heading "What people say about us?" with large decorative quotation marks in the background. | Must |
| FR-TEST-02 | Display a carousel of testimonial cards. Each card shows a customer photo, numeric rating (e.g., "5.0 stars") with star icons, a quote, customer name, and location (e.g., "Charlie Johnson — From New York, US"). | Must |
| FR-TEST-03 | The active card is centered and fully visible; adjacent cards are partially visible at the edges. | Should |
| FR-TEST-04 | Provide swipe/drag, and keyboard- and screen-reader-accessible navigation controls. | Must |
| FR-TEST-05 | Testimonials must be genuine, with customer consent for name and photo usage. | Must |

### 6.7 Download App Section

**Business need:** Move users onto the mobile app.

| ID | Requirement | Priority |
|---|---|---|
| FR-APP-01 | Display a section label "DOWNLOAD" and the heading "Download Rentcars App for **FREE**" (with "FREE" highlighted). | Must |
| FR-APP-02 | Display the supporting text "For faster, easier booking and exclusive deals." | Must |
| FR-APP-03 | Display Google Play and App Store badges linking to the store listings. | Must |
| FR-APP-04 | Display a phone mockup showing the app's vehicle detail screen. | Should |
| FR-APP-05 | Where possible, detect the user's device and prioritize the matching store badge. | Could |

### 6.8 Footer

**Business need:** Provide contact details, secondary navigation, and social channels.

| ID | Requirement | Priority |
|---|---|---|
| FR-FOOT-01 | Display the logo and contact details: address, phone number, and email. Phone and email are clickable (`tel:` / `mailto:`). | Must |
| FR-FOOT-02 | Display four link groups: **Our Product** (Career, Car, Packages, Features, Priceline); **Resources** (Download, Help Centre, Guides, Partner Network, Cruises, Developer); **About Rentcars** (Why choose us, Our Story, Investor Relations, Press Center, Advertise); **Follow Us** (Facebook, Instagram, YouTube icons). | Must |
| FR-FOOT-03 | Social icons open the official Rentcars profiles in a new tab. | Must |
| FR-FOOT-04 | Display the copyright line; the year must be generated dynamically. | Must |
| FR-FOOT-05 | Footer link destinations and the final list of links must be confirmed by the business (see Open Questions). | Must |

## 7. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-01 | Responsiveness | Fully usable on mobile (≥ 360 px), tablet, and desktop (≥ 1280 px); the design is shown at 1440 px desktop width, so mobile and tablet designs must be provided. |
| NFR-02 | Performance | Largest Contentful Paint ≤ 2.5 s on a mid-range mobile device over 4G; vehicle and hero images optimized (modern formats, lazy-loaded below the fold, explicit dimensions). |
| NFR-03 | Accessibility | Meet WCAG 2.1 AA: color contrast (note the light-gray body text and placeholder text), keyboard navigation, focus states, alt text, ARIA labels for carousels and icon-only links. |
| NFR-04 | SEO | Semantic HTML, a single H1, meta title/description, Open Graph tags, structured data for the organization and vehicle offers, a sitemap. |
| NFR-05 | Browser support | Latest two versions of Chrome, Safari, Firefox, and Edge; iOS Safari and Android Chrome. |
| NFR-06 | Security & privacy | HTTPS only; privacy policy and cookie consent where required; no sensitive data in URLs; validation of all input. |
| NFR-07 | Analytics | Track page views, search submissions, Rent Now clicks, Sign up clicks, app-badge clicks, and scroll depth. |
| NFR-08 | Localization | Currency, date/time format, and number format must be configurable; the content is English at launch. |
| NFR-09 | Maintainability | Reusable components (section label, card, button, carousel); design tokens for color, typography, and spacing. |
| NFR-10 | Availability | Target 99.9% uptime for the public site. |

## 8. Design & Branding Guidelines (Observed from Designs)

| Element | Observation |
|---|---|
| **Primary color** | Bright blue (used for the logo, primary buttons, section labels, and highlighted words); exact hex to be taken from the design file |
| **Secondary color** | Very light blue used for section-label pills, icon tiles, and background shapes |
| **Footer** | Dark navy background with white and light text |
| **Typography** | Geometric sans-serif that appears to be Poppins (to be confirmed); large dark-gray headings, mid-gray body text |
| **Section pattern** | Light-blue pill label above a large heading, then content |
| **Buttons** | Filled blue (primary), outlined (secondary, e.g., "Show all vehicles"), black store badges |
| **Cards** | White, rounded corners, soft shadow |
| **Decorative shapes** | Light-blue triangle/arrow shapes behind vehicle imagery |
| **Iconography** | Rounded, filled blue icons on light-blue tiles; outline icons for specs and footer |

## 9. Assumptions

1. The site is the public front door of a larger platform; authentication, search results, vehicle detail, and booking are delivered separately.
2. Content shown in the designs (vehicles, prices, testimonials, contact details) is placeholder and will be replaced with approved final content.
3. Mobile and tablet layouts will be provided by the design team.
4. Store listing URLs, social media profiles, and the final logo assets exist or will be provided.
5. The vehicle catalogue and availability data will be exposed through an API or CMS.
6. The launch language is English.

## 10. Constraints

- Brand assets, vehicle photography, and partner logos must be licensed for commercial use.
- The "Best price guaranteed" and "24-hour delivery" claims must be operationally and legally supportable before they go live.
- Delivery coverage and driver availability depend on regional operations.

## 11. Dependencies

- Final content, copy, and photography from marketing.
- Mobile and tablet UI designs.
- Backend/API for locations, vehicle listing, and pricing.
- Authentication service for Sign in / Sign up.
- Published Google Play and App Store listings.
- Analytics and cookie-consent tooling.

## 12. Risks

| ID | Risk | Impact | Mitigation |
|---|---|---|---|
| R-1 | Third-party car brand logos and vehicle imagery (Honda, Jaguar, Nissan, Volvo, Audi, Acura, Lamborghini, BMW) used without rights | Legal / trademark | Obtain permission or use licensed assets; legal review |
| R-2 | "Best price guaranteed" and "100% refund of the difference" create financial and legal exposure | Financial / legal | Define clear terms and conditions and a refund process |
| R-3 | "24-hour delivery" and "driver" promises that operations cannot meet | Customer trust | Align claims with operational capacity and coverage areas |
| R-4 | Placeholder testimonials, ratings, and review counts shown as real | Legal / trust | Use verified reviews only |
| R-5 | Missing mobile/tablet designs delay implementation | Schedule | Request responsive designs before development |
| R-6 | Contact data inconsistencies (see Section 13) reduce credibility | Brand | Resolve before launch |
| R-7 | Heavy imagery slows page load | Conversion / SEO | Image optimization and lazy loading |

## 13. Content & Design Review Findings

The following issues were found in the provided designs and should be corrected or confirmed before development.

| # | Section | Finding | Suggested action |
|---|---|---|---|
| 1 | Testimonials | Heading reads "What **peole** say about us?" | Fix typo → "people" |
| 2 | Popular deals | "**Passagers**" in vehicle specs | Fix → "Passengers" |
| 3 | Testimonials | Quote refers to "**caretall's** services", not Rentcars | Correct the brand name or replace the testimonial |
| 4 | How it work | "Choose your **and** find your best car" | Rewrite, e.g., "Choose your location and find your best car" |
| 5 | Why choose us | "**Experience** driver" | Change → "Experienced driver" |
| 6 | Hero | "**IOS**" | Change → "iOS" |
| 7 | Nav / section label | "How it work" | Consider "How it works" |
| 8 | Popular deals | Review counts use a dot as thousands separator ("2.436") while prices use a comma ("$1,800") | Use one consistent number format |
| 9 | Footer | Address is in Alaska, USA but the phone number uses the +603 (Malaysia) country code | Confirm the correct contact details |
| 10 | Footer | Email is a generic Gmail address | Consider a branded domain email |
| 11 | Footer | Links such as "Priceline" and "Cruises" do not match a car rental business | Confirm or remove |
| 12 | Footer | Copyright shows 2023 | Use a dynamic year |
| 13 | Popular deals | Daily prices ($1,600–$2,300) look like placeholders | Confirm real pricing and currency |
| 14 | Hero | Search bar has no vehicle-type, driver option, or delivery-address field although the site promotes drivers and delivery | Confirm whether these inputs are needed |
| 15 | Testimonials | The decorative quotation marks overlap the carousel; the cards are cut at the viewport edges | Confirm intended behavior at all breakpoints |

## 14. Acceptance Criteria (High Level)

1. All seven sections are implemented and match the approved designs at desktop, tablet, and mobile breakpoints.
2. Navigation links scroll to their sections; Sign in, Sign up, Rent Now, Show all vehicles, and store badges go to the correct destinations.
3. The search form validates input and passes location and dates to the results page.
4. Vehicle cards, testimonials, and contact details are loaded from the managed content source or configuration.
5. Both carousels (brands, testimonials) work with mouse, touch, and keyboard, and respect reduced-motion preferences.
6. The page meets the performance, accessibility, and SEO targets in Section 7.
7. Analytics events listed in NFR-07 are firing and verified.
8. All findings in Section 13 are resolved or formally accepted by the product owner.

## 15. Open Questions

1. Is this project only the marketing landing page, or does it include the full booking platform?
2. What are the destinations of "Become a renter", "Rent Now", and "Show all vehicles"?
3. Who supplies vehicle data — API, CMS, or manual entry — and how are ratings and review counts calculated?
4. What currency and regions will be supported at launch?
5. What are the terms of the "Best price guaranteed" policy?
6. How does the "Experience driver" option work (extra fee, selection at booking)?
7. What delivery area and hours apply to "24 hour car delivery"?
8. Are real customer testimonials available, and is consent in place?
9. What are the final contact details, social profiles, and footer link set?
10. Are there plans for multiple languages or markets?

## 16. Requirements Traceability

| Business objective | Related requirements |
|---|---|
| BO-1 Increase bookings | FR-HERO-05–09, FR-DEAL-02–05 |
| BO-2 Grow registered users | FR-NAV-05 |
| BO-3 Drive app installs | FR-HERO-03, FR-APP-01–05 |
| BO-4 Build trust | FR-WHY-01–04, FR-TEST-01–05 |
| BO-5 Promote popular vehicles | FR-DEAL-01–08 |
| BO-6 Attract vehicle owners | FR-NAV-04 |

## 17. Glossary

| Term | Meaning |
|---|---|
| BRD | Business Requirements Document |
| CTA | Call to action |
| Renter | The customer who rents a car (in the nav, "Become a renter" appears to refer to someone who offers cars for rent — to be confirmed) |
| Hero | The first, prominent section of the page |
| LCP | Largest Contentful Paint |
| WCAG | Web Content Accessibility Guidelines |

## 18. Approval

| Name | Role | Signature | Date |
|---|---|---|---|
| | Product Owner | | |
| | Marketing Lead | | |
| | Design Lead | | |
| | Engineering Lead | | |
| | QA Lead | | |
