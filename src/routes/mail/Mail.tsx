import "./styles.css";
import Card from "../components/Card";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatIcon from '@mui/icons-material/Chat';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function App() {
  const messagesEndRef = useRef(null);
  const [chatOpened, setChatOpened] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]); // Provide initial value as an empty array
 
  const sendMessage = () => {
    setMessages([...messages, message])
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    setMessage("");
  }


  
  return (
    <div className="App">
      <div className="App">
        <div className="headerBackground">
          
          {!chatOpened ? (
            <>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <HelpOutlineIcon style={{ fontSize: "60px", color: "#ffffff" }} />
                <h2 style={{ color: "#f5f5f5" }}>Centro de Ayuda</h2>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <div style={{ color: "#f5f5f5" }}>¡Puedes comunicarte con Aquaplants por cualquier duda que tengas!</div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <ChatIcon style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
                <div style={{ color: "#f5f5f5" }}>Envía nuevos mensajes.</div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <HistoryIcon style={{ fontSize: "30px", color: "#ffffff", width: "30px" }} />
                <div style={{ color: "#f5f5f5" }}>Revisa tus consultas anteriores.</div>
              </div>
            </>
          ) : ( 
          <div><ArrowBack style={{ color: "white", fontSize: "30px"}} onClick={() => setChatOpened(false)}/></div>
          )}
        </div>
        
        {chatOpened ? (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100vh - 320px)", padding: "10px", boxSizing: "border-box"}}>
            <div style={{ display: "flex", height: "100%", overflowY: "auto", flexDirection: "column"}} ref={messagesEndRef}>
              {messages.map((msg) => (
                <TextField
                  id="outlined-multiline-flexible"
                  label="Franco Barría"
                  value={msg}
                  multiline
                  style={{marginTop: "10px"}}
                  inputProps={{ readOnly: true, style: { color: 'black' } }}
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                  }}
                  InputLabelProps={{ style: { color: 'black' } }}
                  disabled
                />
              ))}
            
            </div>
            <div style={{ display: "flex", gap: "20px", width: "auto", alignContent: "center", marginTop: "20px"}}>
              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                multiline
                rows={2}
                focused
                color="success"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                defaultValue=""
                style={{color: "#2a653b", width: "100%"}}
              />
              <SendIcon style={{ fontSize: "50px", color: "#2a653b", width: "30px", margin:"auto" }} onClick={() => sendMessage()} />
            </div>
          </div>
        ) : (
        <div className="wrapper">
          <Card>
            <h3 style={{ paddingBottom: "0", marginTop: "0", marginBottom: "0", textAlign: "center" }}>¿Necesitas ayuda?</h3>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginBottom: "0", margin: "0" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <LiveHelpIcon style={{ fontSize: "100px", color: "#2a653b", width: "70px" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold" }}>Cuentanos tu problema y nosotros te ayudamos.</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowCircleRightIcon style={{ fontSize: "50px", color: "#2a653b", width: "40px" }} onClick={() => setChatOpened(true)}/>
              </div>
            </div>
          </Card>
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Tus consultas:</h2>
          <Card>
            <div style={{ width: "90%", display: "flex", justifyContent: "space-around", marginBottom: "2.5%", margin: "0", border: "2px solid #CEEAD6", borderRadius: "10px", alignSelf: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <QuestionAnswerIcon style={{ fontSize: "40px", color: "#2a653b", width: "70px" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold" }}>Consulta 1</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowCircleRightIcon style={{ fontSize: "50px", color: "#2a653b", width: "30px" }} />
              </div>
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "space-around", marginBottom: "2.5%", margin: "0", border: "2px solid #CEEAD6", borderRadius: "10px", alignSelf: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <QuestionAnswerIcon style={{ fontSize: "40px", color: "#2a653b", width: "70px" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold" }}>Consulta 2</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowCircleRightIcon style={{ fontSize: "50px", color: "#2a653b", width: "30px" }} />
              </div>
            </div>
          </Card>
          <h2 style={{ color: "#444444", alignSelf: "flex-start", marginTop: "15px" }}>Historial:</h2>
          <Card>
            <p style={{ textAlign: "center" }}>Aquí encontrarás todas las consultas que has creado.</p>
          </Card>
        </div>)}
      </div>
    </div>
  );
}
