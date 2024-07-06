import { Button, Container, Footer, Header } from "../../component";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact-us.css";
import emailjs from "emailjs-com";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ContactScreen() {
  const [descricaoContato, setDescricaoContato] = useState("");
  const description = useParams();

  function navigateToFacebook() {
    window.open(
      "https://www.facebook.com/construaltoimobiliaria/?locale=pt_BR",
      "_blank"
    );
  }

  useEffect(() => {
    setDescricaoContato(description || "");
  }, [description]);

  async function sendEmail(e) {
    try {
      e.preventDefault();
      await emailjs.sendForm(
        "service_syu4zfc",
        "template_ulb8ofb",
        e.target,
        "Lpytyqsmvd8BWTEaf"
      );
      toast.success("Email enviado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar seu email", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    e.target.reset();
  }

  return (
    <div className="body">
      <Header />
      <div className="background">
        <div className="infos">
          <Container className="space">
            <div className="infos_content">
              <div className="infos_content_icon">
                <div className="icon">
                  <BsTelephone />
                </div>
                <div className="infos_content_text">
                  <div className="box-text">
                    <span className="title">LIGUE PARA NÓS</span>
                    <span className="description">(51) 99674-5902</span>
                  </div>
                </div>
              </div>
              <div className="infos_content_icon">
                <div className="icon">
                  <CiLocationOn />
                </div>
                <div className="box-text">
                  <span className="title">LOCALIZAÇÃO</span>
                  <span className="description">
                    Av AJ Renner, 209, sala 05, Alto Feliz, RS, Brasil
                  </span>
                </div>
              </div>
              <div className="infos_content_icon">
                <div className="icon">
                  <LiaBusinessTimeSolid />
                </div>
                <div className="box-text">
                  <span className="title">HORÁRIO COMERCIAL</span>
                  <span className="description">Das 8h às 18h</span>
                </div>
              </div>
              <div
                className="infos_content_icon cursor-pointer"
                onClick={navigateToFacebook}
              >
                <div className="icon">
                  <BsFacebook />
                </div>
                <div className="box-text center">
                  <span className="title">SIGA-NOS</span>
                </div>
              </div>
            </div>
            <div className="form">
              <form className="form_infos" onSubmit={sendEmail}>
                <h1>CONTATE-NOS</h1>
                <TextField
                  id="standard-basic"
                  label="Informe seu nome"
                  variant="standard"
                  fullWidth
                  name="nome_contato"
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Informe seu telefone"
                  variant="standard"
                  fullWidth
                  name="telefone"
                  required
                />
                <TextField
                  id="standard-textarea"
                  label="Descreva o assunto"
                  multiline
                  variant="standard"
                  maxRows={5}
                  fullWidth
                  name="descricao"
                  value={descricaoContato.description}
                  onChange={(e) => setDescricaoContato(e.target.value)}
                  required
                />

                <Button text="Enviar" styleSecundary="button-secondary" />
              </form>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
