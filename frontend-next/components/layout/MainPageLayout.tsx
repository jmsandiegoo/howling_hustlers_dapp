import Navbar from "../navbar/Navbar";

interface MainPageLayoutProps {
  children: React.ReactNode;
}

const MainPageLayout = ({ children }: MainPageLayoutProps) => {
  return (
    <div>
      <header></header>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainPageLayout;
