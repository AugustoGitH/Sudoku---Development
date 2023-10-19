import { createContext, ReactNode } from "react"

interface ITableContextValue {

}

export const TableContext = createContext({} as ITableContextValue)

interface ITableProviderProps {
  children: ReactNode
}

const TableProvider = ({ children }: ITableProviderProps) => {
  return (
    <TableContext.Provider value={{}}>
      {children}
    </TableContext.Provider>
  )
}


export default TableProvider