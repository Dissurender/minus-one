import Nav from "../components/nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl">Welcome to the Home Page!</h1>
        <p className="text-lg">This is a simple home page.</p>
      </div>
    </>
  );
}

export default Home;
