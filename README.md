# frontend-angular-assesment
Angular frontend technical test focused on component communication, HTTP services, and responsive UI implementation using TypeScript and SCSS.

## Installation & Execution

Install dependencies:

>bash
npm install
>run the development server
ng serve

## Environment

- Node.js: `v25.9.0`
- Angular CLI: `v21.2.12`
- Angular: `21.2.14`
- npm: `11.12.1`

## Technical Notes

The project was developed using modern Angular standalone components and SCSS without relying on external UI libraries.

Although the assessment suggested Angular 17 as the ideal version, the implementation was completed using Angular 21, which maintains compatibility with the requested architectural approach and standalone component structure.

Node.js version `25.9.0` was used during development. While functional for this assessment, Angular officially recommends using an LTS Node.js version for production environments.

## Architecture

The application was built using standalone Angular components with a clear separation of responsibilities:

- `AppComponent` handles the main layout and overall application structure.
- `BookingListComponent` displays the list of available gym classes dynamically as cards.
- `BookingDetailComponent` displays the details of the selected booking and allows users to simulate a reservation.

Component communication was implemented using `@Input()` and `@Output()` since the application state is simple and localized between parent and child components. This approach keeps the architecture clean, readable, and easy to maintain.

## Data Modeling

A strongly typed `Booking` interface was implemented to ensure consistency and type safety across the application.

The booking data is currently mocked inside `BookingService` using an `Observable<Booking[]>` with RxJS `of()`, simulating a REST API response while keeping the architecture ready for future backend integration.

Each booking contains:

- `id`
- `className`
- `instructor`
- `schedule`
- `availableSpots`

The dynamic booking list and detail view are rendered directly from this mocked data source, allowing the application structure to scale easily toward real database or API integrations in the future.

## UI & Styling

The UI was built entirely with semantic HTML and pure SCSS without using external UI libraries such as Angular Material, Bootstrap, or TailwindCSS.

The application layout was designed using Flexbox and includes responsive behavior for screens larger and smaller than 768px, ensuring a clean and accessible user experience across different devices.

Reusable card-based components, spacing consistency, hover states, and visual hierarchy were implemented to maintain a modern and readable interface.

## State Management & Rendering

The application uses Angular structural directives such as `*ngFor` and `*ngIf` for dynamic rendering and conditional UI states.

- `*ngFor` is used to render booking cards dynamically from the mocked data source.
- `*ngIf` is used to conditionally display the booking detail card only when a class is selected.

This approach keeps the UI reactive and aligned with Angular best practices.

## Reservation Flow

Users can select a gym class from the booking list by clicking the "Ver más" button.

The selected booking is emitted from `BookingListComponent` to `AppComponent` using `@Output()`, and then passed down to `BookingDetailComponent` using `@Input()`.

This creates a clean parent-child communication flow while maintaining component independence and scalability.

## Notes & Improvements

The application architecture, component communication, and dynamic rendering requirements were fully implemented using Angular standalone components, typed interfaces, and RxJS observables.

For simplicity and development speed during the assessment, booking data was mocked directly through a strongly typed `Booking` interface and exposed through a service returning an `Observable<Booking[]>`.

Because the data source is locally mocked and resolved instantly, visual asynchronous states such as:

- Loading state
- Error state
- Empty state

were not fully implemented in this version of the application.

A future improvement would be integrating `HttpClient` with a mocked REST endpoint (`GET /bookings`) or local JSON source to simulate real asynchronous API behavior and fully support those UI states.
