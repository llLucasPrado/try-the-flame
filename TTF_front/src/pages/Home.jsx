import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import TitleBox from "../components/TitleBox";
import StartButton from "../components/StartButton";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/insight");
  };

  return (
    <div className="home">
      <div className="content">
        <TitleBox title="Try The Flame" />
        <StartButton text="Press to get insight" onClick={handleStart} />
      </div>
    </div>
  );
}
