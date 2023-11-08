import { useCallback, useContext, useEffect, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { useParams } from "react-router-dom"
import { SocketContext } from "../context/socketContext"
import notificacion from './../assets/notificacion.wav'

const SAVE_INTERVAL_MS = 2000


const audio = new Audio(notificacion);

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block", "link", "video", "formula", "strike"],
  ["clean"],
]

export default function TextEditor() {
  
  const { id: documentId } = useParams()
  const { socket } = useContext(SocketContext)
  const [quill, setQuill] = useState()

  // useEffect(() => {
  
    // socket.on("user-joined", () => {
    //   audio.play(); // Reproducir el sonido al unirse un usuario
    // });
  
    // }, [])

  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return

    wrapper.innerHTML = ""
    const editor = document.createElement("div")
    wrapper.append(editor)
    
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    })
    
    q.disable()
    q.setText("Loading...")
    setQuill(q)
    
    // var toolbar = document.getElementsByClassName('ql-toolbar')
    // console.log(toolbar)
    // toolbar[0].appendChild(document.getElementById('si'))
  }, [])

  useEffect(() => {
    
    if (socket == null || quill == null) return

    socket.on("load-document", document => {
      console.log('Entro')
      quill.setContents(document)
      quill.enable()
    })

    socket.emit("get-document", documentId)
  
  }, [socket, quill, documentId])

  useEffect(() => {
    if (socket == null || quill == null) return

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents())
    }, SAVE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [socket, quill])

  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = delta => {
      quill.updateContents(delta)
    }
    socket.on("receive-changes", handler)

    return () => {
      socket.off("receive-changes", handler)
    }

  }, [socket, quill])

  useEffect(() => {
    
    if (socket == null || quill == null) return

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return
      socket.emit("send-changes", delta)
    }

    quill?.on("text-change", handler)

    return () => {
      quill?.off("text-change", handler)
    }

  }, [socket, quill])

  // useEffect(() => {
    
  //   if (socket == null || quill == null) return

  //   socket.on('user-connected', ( name ) => {
  //     console.log(name,' se ha conectado al documento')
  //   })

  // }, [socket])

  return (
    <>
      <div className="container" ref={wrapperRef}></div>
    </>
  )
  }