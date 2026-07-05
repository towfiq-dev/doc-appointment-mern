import { AppsContext } from './AppsContext';

const AppsContextProvider = ({children}) => {
  
  
  return (
    <AppsContext.Provider value={data}>
      {children}
    </AppsContext.Provider>
  );
};

export default AppsContextProvider;
