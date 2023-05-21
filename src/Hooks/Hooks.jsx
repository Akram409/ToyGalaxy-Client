import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | ToyGalaxy`;
    }, [title])
};

export default useTitle;