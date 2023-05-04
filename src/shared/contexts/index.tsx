import React, { createContext } from "react";

interface ContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
    openDialog: boolean;
    setOpenDialog: (openDialog: boolean) => void;
}

const Context = createContext<ContextType>({} as ContextType);

interface ProviderProps {
  children: JSX.Element;
}

const Provider: React.FC<ProviderProps> = ({ children }): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const setOpenValue = (open: boolean) => setOpen(open);
  const [openDialog, setOpenDialog] = React.useState(false);
  const setOpenDialogValue = (openDialog: boolean) => setOpenDialog(openDialog);

  return (
    <Context.Provider value={{ open, setOpen: setOpenValue, openDialog, setOpenDialog: setOpenDialogValue }}>
      {children}
    </Context.Provider>
  );
};

const useContext = () => {
    return React.useContext(Context);
}
export { Provider, useContext };