import "./App.css";
import Toast from "./component/Toast";
import { useState } from "react";
import deleteBtn from "./assets/delete.svg";
import warningBtn from "./assets/iicon.svg";
import crossBtn from "./assets/cross.svg";

function App() {
  const [showToast, setShowToast] = useState(false);

  const iconMap = {
    notification: warningBtn,
    delete: deleteBtn,
  };

  const handleButtonClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <div className="page">
        <div className="text-area">
          <h1 style={{ fontSize: "70px", marginBottom: "30px" }}>Toast</h1>
          <p>
            Toast messages are an effective way to communicate with users in a
            timely manner without interrupting their tasks. They help improve
            the user experience by providing valuable feedback and information
            in a clear and concise manner. Additionally, they can be customized
            to match the visual style of the application and can include
            interactive elements such as action buttons or links for further
            user engagement. Overall, toast messages play a vital role in
            enhancing the usability and effectiveness of web and mobile
            applications.
          </p>
          <button className="btn" onClick={handleButtonClick}>
            Click me
          </button>
        </div>
      </div>
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            marginBottom: "16px",
          }}
        >
          <Toast type="default" editText="Message here" closeAction={true} />
        </div>
      )}
    </>
  );
}

export default App;
