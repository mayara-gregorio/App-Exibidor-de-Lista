import { useEffect, useState } from "react"

type List = {
  id: number,
  name: string,
  nota: number
}

export function useList(){
  const [list, setList] = useState<List[]>([])

  useEffect(() => {
    const client = new WebSocket("ws://localhost:3000")

    client.onopen = () => {
      console.log("Conexão estabelecida com o servidor")
    }

    client.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setList(data)
    }
  }, [])

  return {list}
}