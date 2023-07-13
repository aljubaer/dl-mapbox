import NavAnalyze from "../navoptions/analyze";
import NavFields from "../navoptions/fields";
import NavWater from "../navoptions/water";

export default function SecondaryAppBar() {
  return (
    <>
      <div className="w-full flex justify-around h-12 bg-slate-500 text-slate-200 font-bold">
        <div className="w-1/3 h-full flex justify-between align-middle">
          <NavFields />
          <NavWater />
          <NavAnalyze />
        </div>
      </div>
    </>
  );
}
