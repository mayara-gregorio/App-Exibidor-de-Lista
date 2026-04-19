import { useList } from "../hooks/useList"
import { List, type RowComponentProps } from "react-window"
import React from "react"

type RowProps = {
  list : {
    id: number,
    name: string,
    nota: number
  }[]
}

//Adicionando memo
//const Row = React.memo(

function Row({index, style, ariaAttributes, list} : RowComponentProps<RowProps>){
  const item = list[index]
  return(
      <div style={{...style, display: "flex", gap: "1rem", padding: "0 0.5rem"}} {...ariaAttributes}>
        <p style={{width: "60px"}}>{item.id}</p>
        <p style={{flex: 1}}>{item.name}</p>
        <p style={{width: "60px"}}>{item.nota}</p>
    </div>
  )
}


export function GerarList(){
  const {list} = useList()
  return(
    <div style={{display: "flex", flexDirection: "column", height:"50vh", borderBottom: "1px solid #ccc"}}>
        <div style={{display: "flex", gap: "1rem", padding: "0 0.5rem"}}>
            <span style={{width: "60px", fontWeight: "bold"}}>ID</span>
            <span style={{flex: 1, fontWeight: "bold"}}>Nome do Aluno</span>
            <span style={{width: "60px", fontWeight: "bold"}}>Nota</span>
        </div>
        <List
        //como chamar o Row depois do memo?
          rowComponent={Row}
          rowCount={list.length}
          rowHeight={35}
          rowProps={{list}}
        
        />
    </div>
  )
}