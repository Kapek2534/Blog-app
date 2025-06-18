import { MainContent } from "../MainContent/MainContent";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { IconMenu } from "../IconMenu/IconMenu";
import { AnimatePresence } from "motion/react";
import { OutletWrapper } from "../OutletWrapper/OutletWrapper";

import { LightmodeContext } from "../../contexts/LightmodeContext";

import { useLocation } from "react-router-dom";
import { useState } from "react";

export function Layout() {
  const location = useLocation();

  const [isDark, setIsDark] = useState(false);

  return (
    <LightmodeContext.Provider value={[isDark, setIsDark]}>
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
    </LightmodeContext.Provider>
  );
}
