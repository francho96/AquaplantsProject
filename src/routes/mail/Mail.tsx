import "./styles.css";
import Card from "../components/Card";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatIcon from '@mui/icons-material/Chat';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export default function App() {

  return (
    <div className="App">
      <div className="App">
        <div className="headerBackground">
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
        </div>
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
                <ArrowCircleRightIcon style={{ fontSize: "50px", color: "#2a653b", width: "40px" }} />
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
        </div>
      </div>
    </div>
  );
}
