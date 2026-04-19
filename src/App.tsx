//Vistualização de 5000 linhas
//semântica (com ARIA) 👌
//cutom hook 👌
//Abor Controller (bônus) -  Não é necessário pois o websocket é uma requisição contínua

import { GerarList } from "./components/TableList"

export default function App(){

  return(
    <div>
      <GerarList/>
    </div>
  )
}