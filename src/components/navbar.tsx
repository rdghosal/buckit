import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="logo">buckit</div>
      <Link href={"/"}>Log out</Link>
    </div>
  );
};

export default Navbar;
