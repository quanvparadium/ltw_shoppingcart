import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

	const [customer, setCustomer] = useState({
		name: "Son"
	})

	const setUser = (user) => {
		setCustomer(user)
	}

	return (
		<AppContext.Provider
			value={{ customer, setUser }}
		>
			{children}
		</AppContext.Provider>
	)
}
export default AppProvider;
export const useAppContext = () => useContext(AppContext);