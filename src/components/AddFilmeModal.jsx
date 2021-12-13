import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { customStyles, getToken } from "../utils/utils";
import Modal from "react-modal";

export const AddFilmeModal = ({ modalIsOpen, setModalIsOpen }) => {
  const { user, getCardData } = useContext(DataContext);

  const handleUploadFile = () => {
    const ImgName = document.getElementById("ImgName").value;
    const Synopsis = document.getElementById("Synopsis").value;
    const Genre = document.getElementById("Genre").value;
    const Title = document.getElementById("Title").value;
    const DayMonthYear = document.getElementById("DayMonthYear").value;
     axios.post(`http://localhost:5000/Movies/${user}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getToken()}`,
      },
      ImgName,
      Synopsis,
      Genre,
      Title,
      DayMonthYear
    }).then(()=> getCardData());
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="form-group text-center" style={{ minWidth: "450px" }}>
        <button
          onClick={() => setModalIsOpen(false)}
          className="btn-close position-absolute"
          style={{ marginLeft: "40%" }}
        />
        <h2>Cadastrar Filme</h2>
        <hr />
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="Synopsis"
              placeholder="Sinopse:"
              required
            />
            <label>Sinopse:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="Genre"
              placeholder="Genero:"
              required
            />
            <label>Genero:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="Title"
              placeholder="Titulo:"
              required
            />
            <label>Titulo:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="DayMonthYear"
              placeholder="Lançamento:"
              required
            />
            <label>Lançamento:</label>
          </div>
          <div className="form-floating mb-3">
          <input
              type="text"
              className="form-control"
              id="ImgName"
              placeholder="Lançamento:"
              required
            />
            <label>Imagem:</label>
          </div>
        </form>
        <hr />
        <button onClick={handleUploadFile} className="btn btn-success">
          Enviar
        </button>
      </div>
    </Modal>
  );
};
