import { useEffect, useState } from "react"

const Component = () =>{
    const[value, setValue] = useState(false)

    useEffect(() =>{
       console.log('El código a ejecutar')
    }, ListOfDependencies)
}