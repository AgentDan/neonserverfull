import {createContext, useContext, useEffect, useState} from "react"

const ConfiguratorContextRender = createContext()

export const ConfiguratorProviderRender = ({children}) => {
    // const [idProject, setIdProject] = useState(false)
    return (
        <ConfiguratorContextRender.Provider
            value={{
                // idProject,
                // setIdProject,
            }}
        >
            {children}
        </ConfiguratorContextRender.Provider>
    )
}

export const useConfiguratorRender = () => {
    return useContext(ConfiguratorContextRender);
}