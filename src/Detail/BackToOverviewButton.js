import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function BackToOverview({ memberId }) {
  const navigate = useNavigate();

  const handleBackToOverview = () => {
    navigate("/");
  };

  return (
    <>
      <Button variant="warning" onClick={handleBackToOverview}>
        Zpět na hlavní stránku
      </Button>
    </>
  );
}

export default BackToOverview;
