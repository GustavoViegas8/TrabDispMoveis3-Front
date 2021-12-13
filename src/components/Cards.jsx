/* eslint-disable jsx-a11y/img-redundant-alt */
import { ModalEstatisticas } from "./ModalEstatisticas";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { likeMovie } from "../utils/utils";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const Cards = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user, getCardData } = useContext(DataContext);

  const addLike = async () => {
    await likeMovie(user, data.Id)
    getCardData()
  }

  return (
    <div
      className="text-center col-sm"
      style={{
        width: "280px",
        height: "auto",
        margin: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        alignItems: "center",
      }}
    >
      <img
        src={data.ImgName}
        style={{ height: "280px", width: "280px" }}
        alt="Capa do Filme"
      />
      <div className="card-body">
        <h3>{data.Title}</h3>
        <p>Likes: {data.CommentsData.length === 0 ? "Sem like" : data.CommentsData.length}</p>
        {user ? (
          <>
            <button
              onClick={() => setModalIsOpen(true)}
              className="btn btn-primary"
              type="submit"
              style={{marginRight: "10px"}}
            >
              Statics
            </button>
            <button
              onClick={() => addLike()}
              className="btn btn-warning"
              type="submit"
            >
              curtir
            </button>
          </>
        ) : null}
      </div>
      <ModalEstatisticas
        data={data}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
};
