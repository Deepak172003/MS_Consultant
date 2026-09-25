import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Without this, navigating to a new page keeps the old page's scroll
// position — so clicking a link while scrolled down can land you on the
// footer of the new page instead of the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
