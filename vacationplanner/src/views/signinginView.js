import logo from "./logo.png";
function SigningView(props) {
  return (
    <div className="signingViewParent">
      <h1>
        <img src={logo} className="logo" alt="" />
        <logo />
        <button className="signingBtns" onClick={console.log("log in!")}>
          Sign in
        </button>
      </h1>
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
      </h2>
    </div>
  );
}
export default SigningView;
