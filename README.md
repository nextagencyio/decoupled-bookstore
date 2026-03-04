# Decoupled Bookstore

An independent bookstore website starter template for Decoupled Drupal + Next.js. Built for indie bookshops, used book stores, literary communities, and book-loving businesses.

![Decoupled Bookstore Screenshot](docs/screenshot.png)

## Features

- **Books** - Display your catalog with author, genre, price, ISBN, page count, and staff favorite badges
- **Events** - Promote author readings, signings, workshops, storytime sessions, and book club meetings
- **Staff Picks** - Personal recommendations from your staff with reviews and reviewer profiles
- **Modern Design** - Clean, accessible UI optimized for bookstore and literary content

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-bookstore my-bookstore
cd my-bookstore
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My Bookstore"
```

Note the space ID returned. Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero, stats (40,000+ titles in stock, 38 years open, 200+ events per year, 8 book clubs), and visit CTA
- 5 books: The Midnight Library, Project Hail Mary, Educated, Piranesi, Atomic Habits
- 3 events: Summer Author Reading Series, Saturday Morning Storytime, Creative Writing Workshop
- 3 staff picks with personal reviews from Elena, Marcus, and Jasmine
- 2 static pages: About Turning Pages, Contact Us

</details>

## Content Types

### Book
- **author**: Book author name
- **genre**: Genre classification (Literary Fiction, Science Fiction, Memoir, etc.)
- **price**: Retail price
- **isbn**: ISBN identifier
- **publisher**: Publishing house
- **page_count**: Number of pages
- **staff_favorite**: Whether marked as a staff favorite
- **image**: Cover image

### Event
- **event_date**: Date and time of the event
- **location**: Venue within the bookstore
- **event_type**: Category (Author Reading, Children's Event, Workshop)
- **is_free**: Whether admission is free
- **image**: Event promotional image

### Staff Pick
- **book_title**: Title of the recommended book
- **book_author**: Author of the recommended book
- **reviewer_name**: Name of the staff member
- **reviewer_role**: Staff member's role at the store
- **image**: Associated image

### Homepage
- **hero_title**: Main headline (e.g., "Discover Your Next Great Read")
- **hero_subtitle**: Tagline (e.g., "Independent Bookstore Since 1987")
- **hero_description**: Welcome message
- **stats_items**: Key statistics (titles, years, events, book clubs)
- **featured_items_title**: Section heading for staff picks
- **cta_title / cta_description**: Visit call-to-action block

### Basic Page
- General-purpose static content pages (About, Contact, etc.)

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/bookstore-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend.

### Enable Demo Mode

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-bookstore)

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
