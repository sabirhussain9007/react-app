import React from "react";
import "./styles.css";

const Login = () => {
  return (
    
    <>
        <div>
      <table className="table2">
        <tbody>
          <tr>
            <td>
              <span id="Label1" className="label2">
                PAKISTAN BEVERAGE LIMITED
              </span>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  

    
    <div>

    
    <fieldset className="fieldset">
      <legend>{"Login"}</legend>
      <table className="table">
        <tbody>
          <tr>
            <td className="auto-style5" style={{ width: "90px" }}>
              <span className="label">User Name</span>
            </td>
            <td>
              <input
                id="txtUName"
                name="txtUName"
                type="text"
                className="input"
              />
            </td>
            <td> </td>
          </tr>
          <tr>
            <td className="auto-style5" style={{ width: "90px" }}>
              <span className="label">Password</span>
            </td>
            <td>
              <input
                id="txtPasswrod"
                name="txtPasswrod"
                type="password"
                className="input"
              />
            </td>
            <td> </td>
          </tr>
          <tr>
            <td className="auto-style5" style={{ width: "90px" }}>
              <input
                id="btnLogin"
                name="btnLogin"
                type="submit"
                defaultValue="Login"
                className="button"
              />
            </td>
            <td>
              <span className="label blue">Pre-Sale</span>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
    </div>
    </>
  );
}
export default Login;
