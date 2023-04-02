import "./style.css";
import { useNavigate } from "react-router-dom";
function Index() {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>RamadanQUIZ</h1>
      <h6 onClick={() => navigate(-1)}>back</h6>
    </nav>
  );
}

export default Index;
