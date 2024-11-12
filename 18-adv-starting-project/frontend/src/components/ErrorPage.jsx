import React from 'react'
import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()

    let title = 'Ocurrió un error'
    let message = 'Por favor intentá nuevamente'

    console.log('asd error',error)

    error.status === 500 && (message = JSON.parse(error.data).message)
    error.status === 404 && (message = 'Could not find'); (title = 'Asd')

  return (
    <div>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </div>
  )
}

export default ErrorPage