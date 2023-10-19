import { repeatComponents } from "@/utils/repeatComponents"
import * as S from "./styles"
import SubSectorTable from "../SubSectorTable"

const SectorTable = () => {
  return (
    <S.SectorTable>
      {repeatComponents((i) => (
        <SubSectorTable key={`sub-sector-table-${i}`} />
      ), 9)}
    </S.SectorTable>
  )
}

export default SectorTable