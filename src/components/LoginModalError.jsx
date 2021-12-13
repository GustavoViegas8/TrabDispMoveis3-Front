/* eslint-disable jsx-a11y/anchor-is-valid */
export const LoginModalError = () => {
  return (
    <div className="alert alert-dismissible alert-danger mt-3">
      <strong>Erro </strong>
      <a  className="alert-link" style={{textDecoration: "none"}}>
       E-mail ou Senha
      </a>
      <a> incorretos.</a>
    </div>
  );
};
