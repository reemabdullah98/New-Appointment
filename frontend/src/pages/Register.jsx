import { useState } from "react";
//import { registerUser } from "../services/api"; // اضيفي هاد
 import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("⚠ Please fill all fields!");
      return;
    }

    try {
      setLoading(true);

      // ====== fetch (الاتصال بالسيرفر) ======
     // await registerUser({ name, email, password });

      alert("✅ Account registered successfully!");
      setName("");
      setEmail("");
      setPassword("");
      
      // navigate("/login");
    } catch (err) {
      alert(`❌ Registration failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      
      <button className="btn-primary" type="submit" disabled={loading}>
        {loading ? "Creating account..." : "Register"}
      </button>
    </form>
  );
}

export default Register;