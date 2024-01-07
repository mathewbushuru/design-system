import useTheme from "@/hooks/use-theme";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
    <button onClick={() => setTheme("light")}>Light mode</button>
    <button onClick={() => setTheme("dark")}>Dark mode</button>
    </>
  );
}
