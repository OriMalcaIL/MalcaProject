import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, isTrue, updateState, uploadFiles} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Container, Image, Input, VStack, useColorMode} from "@chakra-ui/react"
import NextHead from "next/head"

const PING = "http://localhost:8000/ping"
const EVENT = "ws://localhost:8000/event"
const UPLOAD = "http://localhost:8000/upload"
export default function Component() {
const [index_state, setIndex_state] = useState({"is_hydrated": false, "events": [{"name": "index_state.hydrate"}], "files": []})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const socket = useRef(null)
const { isReady } = router;
const { colorMode, toggleColorMode } = useColorMode()
const Event = events => setIndex_state({
  ...index_state,
  events: [...index_state.events, ...events],
})
const File = files => setIndex_state({
  ...index_state,
  files,
})
useEffect(() => {
  if(!isReady) {
    return;
  }
  if (!socket.current) {
    connect(socket, index_state, setIndex_state, result, setResult, router, EVENT, ['websocket', 'polling'])
  }
  const update = async () => {
    if (result.state != null) {
      setIndex_state({
        ...result.state,
        events: [...index_state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(index_state, setIndex_state, result, setResult, router, socket.current)
  }
  update()
})

return (
<Center><VStack><Breadcrumb separator=">"
sx={{"color": "rgb(255,255,255)", "fontSize": "40px"}}><BreadcrumbItem><BreadcrumbLink sx={{"href": "#"}}>{`Home`}</BreadcrumbLink></BreadcrumbItem>
<BreadcrumbItem><BreadcrumbLink sx={{"href": "#"}}>{`Docs`}</BreadcrumbLink></BreadcrumbItem>
<BreadcrumbItem><BreadcrumbLink sx={{"href": "#"}}>{`Breadcrumb`}</BreadcrumbLink></BreadcrumbItem></Breadcrumb>
<Container sx={{"textAlign": "center", "bg": "white", "padding": "4em", "shadow": "lg", "borderRadius": "lg", "maxWidth": "800px", "width": "100%"}}><Image src="https://shorturl.at/bmMOQ"
sx={{"width": "700px", "height": "300px"}}/>
<Input placeholder="Name"
sx={{"align": "center"}}
type="text"/>
<Input placeholder="Email"
sx={{"align": "center"}}
type="text"/>
<Input placeholder="Phone Number"
sx={{"align": "center"}}
type="text"/></Container></VStack>
<Image src="https://shorturl.at/ilWY6"
sx={{"background-size": "cover", "background-position": "center", "width": "100%", "height": "100vh", "display": "flex", "justify-content": "center", "align-items": "center", "position": "absolute", "top": "0", "left": "0", "zIndex": "-1"}}/>
<NextHead><title>{`Malca Plus 2000`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></Center>
)
}