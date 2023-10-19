
import { repeatComponents } from "@/utils/repeatComponents"
import SectorTable from "./components/SectorTable"
import * as S from "./styles"



const Table = () => {

  return (
    <S.Table>
      {repeatComponents((i) => (
        <SectorTable key={`sector-table-${i}`} />
      ), 9)}
    </S.Table>
  )
}


export default Table