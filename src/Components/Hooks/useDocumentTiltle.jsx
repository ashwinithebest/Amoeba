import { useEffect } from 'react'

const useDocumentTiltle = (count) => {
    useEffect(()=>{
        document.title = `${count}-Ameoba `
    })
 
}

export default useDocumentTiltle