import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Page({ showMenu, setShowMenu }: MenuProps) {
  return (
    <div className="absolute left-0 w-full h-screen bg-gray-300 -top-10">
      <X
        className="absolute top-3 right-3"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="m-5">sidebar under construction...</div>
    </div>
  );
}
