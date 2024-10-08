// Challenge / Exercise

// * 1. Add five new (dummy) page components (content can be simple <h1> elements)
// *  - HomePage
// *   - EventsPage
// *   - EventDetailPage
// *   - NewEventPage
// *   - EditEventPage
// * 2. Add routing & route definitions for these five pages
// *   - / => HomePage
// *   - /events => EventsPage
// *   - /events/<some-id> => EventDetailPage
// *   - /events/new => NewEventPage
// *   - /events/<some-id>/edit => EditEventPage
// * 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LayOut from './layout/LayOut';
import EventsPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';

function App() {

  const routes = [
    {
      path: '/',
      element: <LayOut/>,
      children: [
        { path: '/', element: <HomePage/>},
        { path: '/events', element: <EventsPage/>},
        { path: '/events/new', element: <NewEventPage/>},
        { path: '/events/:id', element: <EventDetailPage/>},
        { path: '/events/:id/edit', element: <EditEventPage/>},
      ],
      // errorElement: <ErrorPage/>
    }
  ]

  const router = createBrowserRouter(routes)

  return <div>
    <LayOut/>
  </div>;
}

export default App;
