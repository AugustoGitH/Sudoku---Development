import * as S from "./styles"
import { ReactNode } from "react"

interface IVoidProps {
  children: ReactNode
}

const Void = ({ children }: IVoidProps) => {
  return (
    <S.Void>
      {children}
    </S.Void>
  )
}

export default Void