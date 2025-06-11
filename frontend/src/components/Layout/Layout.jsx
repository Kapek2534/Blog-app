import { MainContent } from "../MainContent/MainContent";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { IconMenu } from "../IconMenu/IconMenu";
import { AnimatePresence } from "motion/react";
import { OutletWrapper } from "../OutletWrapper/OutletWrapper";

import { useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();

  return (
    <>
      <MainContent>
        <TopBar>
          <Logo />
          <MainMenu />
          <div>
            <IconMenu />
          </div>
        </TopBar>
        <AnimatePresence mode="wait" initial={false}>
          <OutletWrapper key={location.pathname} />
        </AnimatePresence>
      </MainContent>
      <Footer />
    </>
  );
}
