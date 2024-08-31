import QRCode from "qrcode";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return alert("Enter a text or a url!");
    }

    QRCode.toDataURL(text)
      .then((url) => {
        setImg(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="bg-[#D6EAE8] p-5 flex flex-col items-center w-full md:w-[500px] gap-5 rounded-3xl">
      <h1 className="md:text-4xl text-xl">QR CODE GENERATOR</h1>
      <form onSubmit={handleSubmit} className="w-full flex justify-between">
        <input
          className="w-[80%] bg-[#C3DFD8] border border-[#17103B] pl-3 focus:outline-none rounded-3xl"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className="bg-[#FFA593] px-2 py-1 rounded-3xl cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      {img && <img height={250} width={250} src={img} className="rounded-3xl" alt="qr-code" />}
    </main>
  );
};

export default App;
