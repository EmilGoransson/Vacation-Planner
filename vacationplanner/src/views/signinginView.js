function SigningView(props) {
  return (
    <div>
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Vacation Planner
        <button className="signingBtns" onClick={console.log("log in!")}>
          Sign in
        </button>
      </h1>
    </div>
  );
}
export default SigningView;
