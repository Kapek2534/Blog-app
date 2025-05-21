import { MainContent } from "../MainContent/MainContent";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { LightmodeSelector } from "../LightModeSelector/LightModeSelector";

export function Layout({ children }) {
  return (
    <>
      <MainContent>
        <TopBar>
          <Logo />
          <MainMenu />
          <div>
            <LightmodeSelector />
          </div>
        </TopBar>
        {children}
      </MainContent>
      <Footer />
    </>
  );
}
