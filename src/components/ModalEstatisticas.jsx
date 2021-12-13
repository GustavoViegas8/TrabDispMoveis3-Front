import React from "react";
import { customStyles} from "../utils/utils";
import Modal from "react-modal";


export const ModalEstatisticas = ({ modalIsOpen, setModalIsOpen, data}) => {

  return (
    <>
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
          <h2>{data.Title}</h2>
          <hr />
          <p>Sinopse: {data.Synopsis}</p>
          <p>Genero: {data.Genre}</p>
          <p>Lançamento: {data.DayMonthYear}</p>
        </div>
      </Modal>
    </>
  );
};
