import { createContext, useState, useEffect } from "react";

type TTheme = "dark" | "light";
type TVersion = "v1" | "v2";

type TThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: TTheme;
  defaultVersion?: TVersion;
  storageKey?: string;
};

type TThemeProviderState = {
  theme: TTheme;
  version: TVersion;
  setTheme: (theme: TTheme) => void;
  setVersion: (version: TVersion) => void;
};

const initialState: TThemeProviderState = {
  theme: "light",
  version: "v2",
  setTheme: () => null,
  setVersion: () => null,
};

export const ThemeProviderContext =
  createContext<TThemeProviderState>(initialState);

export default function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultVersion = "v2",
  storageKey = "mb-design-system-theme",
  ...props
}: TThemeProviderProps) {
  const [theme, setTheme] = useState<TTheme>(
    () => (localStorage.getItem(storageKey) as TTheme) || defaultTheme,
  );

  const [version, setVersion] = useState(defaultVersion);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark", "v1", "v2");

    root.classList.add(theme);
    root.classList.add(version);
  }, [theme, version]);

  const value = {
    theme,
    version,
    setTheme: (theme: TTheme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    setVersion: (version: TVersion) => setVersion(version),
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
