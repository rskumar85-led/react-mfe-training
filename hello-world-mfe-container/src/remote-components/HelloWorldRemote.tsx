import { useEffect, useRef } from 'react'
import {mount} from 'helloWorldContainerKey/HelloWorldComponent'
const HelloWorldRemote = (): JSX.Element =>{
    
const helloWorldDiv = useRef<HTMLDivElement>(null)

  useEffect( () => {
    mount(helloWorldDiv.current)
  }, [])

 return   <div ref={helloWorldDiv}></div>}

export default HelloWorldRemote

