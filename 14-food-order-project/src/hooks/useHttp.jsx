import React, { useCallback, useEffect, useState } from 'react'

const sendHttpRequest = async (url, config) => {
    const res = await fetch(url, config)
    const resData = await res.json()

    if(!res.ok){
        throw new Error(resData.message ?? 'Algo salio mal')
    }

    return resData
}

const useHttp = (url, config, initialData) => {

  const [ data, setData ] = useState(initialData)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState()

  const sendRequest = useCallback(async (data) => {
    setLoading(false)

    try {
        const resData = await sendHttpRequest(url, {...config, body:data})
        setData(resData)
    } catch (error) {
        setError(error.message ?? 'Algo no esta bien')
    }

    setLoading(false)
  },[url, config])

  useEffect(()=>{
    if(config && (config.method === 'GET' || !config.method || !config)){
        sendRequest()
    }
  },[sendRequest,config])

  return {
    data,
    loading,
    error,
    sendRequest
  }
}

export default useHttp