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
// * 4. Add properly working links to the MainNavigation
// * 5. Ensure that the links in MainNavigation receive an "active" class when active
// * 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// * 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LayOut from './layout/LayOut';
import LayOut2 from './layout/LayOut2';
import EventsPage, { loader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage, { loader as loaderEventDetail } from './pages/EventDetailPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';
import { action as eventAction } from './components/EventForm'
import NewsletterPage, { action as newsLetterAction } from './pages/NewsLetter';

function App() {

  const routes = [
    {
      path: '/',
      element: <LayOut/>,
      errorElement: <ErrorPage/>,
      children: [ //* --> /...
        // { path: '', element: <HomePage/>},
        { index: true, element: <HomePage/>},
        {
          path: 'events',
          element: <LayOut2/>,
          children: [ //* --> /events/...
            {
              index: true,
              element: <EventsPage/>,
              loader: loader
            },
            {
              path: ':id', //* Nested routes --> la ruta /:id se define como un "wrapper", se le asigna el loader, y asi disponibiliza la data a todos sus children
              loader: loaderEventDetail,
              id: 'event-detail',
              children: [
                {
                  index: true,
                  element: <EventDetailPage/>,
                },
                {
                  path: 'edit',
                  element: <EditEventPage/>,
                  action: eventAction
                },

              ]
            },
            { path: 'new',
              element: <NewEventPage/>,
              action: eventAction
            },
          ]
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsLetterAction,
        },
      ],
      // errorElement: <ErrorPage/>
    },
  ]

  const router = createBrowserRouter(routes)

  return (
    // <ErrorBoundary>
      <RouterProvider router={router}/>
    // </ErrorBoundary>
  )

}

export default App;
