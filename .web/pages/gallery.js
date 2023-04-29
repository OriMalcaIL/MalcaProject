import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, isTrue, updateState, uploadFiles} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Center, Container, Heading, Image, useColorMode} from "@chakra-ui/react"
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
<Center sx={{"minHeight": "100vh", "display": "flex", "flexDirection": "column", "justifyContent": "center", "bgColor": "gray.50"}}><Container sx={{"display": "flex", "flexDirection": "column", "align-items": "center", "bgColor": "white", "padding": "2em", "shadow": "lg", "borderRadius": "lg", "gap": "10px"}}><Heading sx={{"align": "center"}}>{`גלריית עבודות`}</Heading>
<Container sx={{"width": "80%", "display": "flexFlow", "gap": "1em", "margin": "2em", "justifyContent": "center"}}><Container><Image src="https://picsum.photos/300/203"
sx={{"object-fit": "cover"}}/></Container>
<Container><Image src="https://picsum.photos/300/202"
sx={{"object-fit": "cover"}}/></Container>
<Container><Image src="https://picsum.photos/300/201"
sx={{"object-fit": "cover"}}/></Container>
<Container><Image src="https://picsum.photos/300/200"
sx={{"object-fit": "cover"}}/></Container></Container></Container>
<NextHead><title>{`Pynecone App`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></Center>
)
}