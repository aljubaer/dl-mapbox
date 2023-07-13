import PrimarySearchAppBar from "./components/appbar";
import CMap from "./components/map";
import SecondaryAppBar from "./components/appbar/secondary-nav";

export default function Home() {
  return (
    <div className="container flex justify-center align-middle mx-auto bg-white min-h-screen">
      <div className="w-screen">
        <PrimarySearchAppBar />
        <SecondaryAppBar />
        <div className="w-full my-1 flex justify-center align-middle">
          <CMap />
        </div>
      </div>
    </div>
  );
}
