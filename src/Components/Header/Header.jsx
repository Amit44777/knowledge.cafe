import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center my-4 border-b-2 mb-8">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="mb-8" src={profile} alt="" />
    </header>
  );
};

export default Header;
