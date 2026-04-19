import { useList } from "../hooks/useList"

export function GerarList(){
  const {list} = useList()

  return(
    <div>
      <table style={{border: '1px solid black'}} role="grid" aria-label="Notas de Alunos">
        <thead>
          <tr>
            <th style={{border: '1px solid black'}}>Id do Aluno</th>
            <th style={{border: '1px solid black'}}>Nome do Aluno</th>
            <th style={{border: '1px solid black'}}>Nota do Aluno</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td style={{border: '1px solid black'}}>{item.id}</td>
              <td style={{border: '1px solid black'}}>{item.name}</td>
              <td style={{border: '1px solid black'}}>{item.nota}</td>
            </tr>
          ))} 
          </tbody>
      </table>
    </div>
  )
}