import axios from "axios";

const Phonepe = ({ amount }) => {
  const handlePayment = () => {
    const date = Date.now();
    const user = JSON.parse(localStorage.getItem("user"));
    const userName = user?.user?.name;

    // Send a request to the server to initiate the payment
    axios
      .post('http://localhost:5000/checkout', {
        amount,
        userId: user?.user?._id,
        userName: userName,
        createdAt: date
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <button className="d-flex m-auto mt-3" onClick={() => handlePayment()}>Pay Now</button>
    </div>
  )
}

export default Phonepe;
