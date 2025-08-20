import { useMemo } from "react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import { retrieveLaunchParams, useSignal, isMiniAppDark } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { routes } from "@/navigation/routes";

export function App() {
  const launchParams = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);

  const iosPlatforms = ["macos", "ios"];
  const isIosPlatform = iosPlatforms.includes(launchParams.tgWebAppPlatform);
  const platform = isIosPlatform ? "ios" : "base";

  return (
    <AppRoot appearance={isDark ? "dark" : "light"} platform={platform}>
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
