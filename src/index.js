import {
  createIcons,
  House,
  FolderKanban,
  UserPen,
  Sprout,
  Link,
  FingerprintPattern,
  ChartScatter,
} from "lucide";
import Typed from "typed.js";
createIcons({
  icons: {
    House,
    FolderKanban,
    UserPen,
    Sprout,
    Link,
    FingerprintPattern,
    ChartScatter,
  },
});

const nameTextRotator = new Typed("#nameTextRotator", {
  strings: ["I’m Zaghy Zalayetha."],
  typeSpeed: 50,
  showCursor: false,
});

const taglineTextRotator = new Typed("#taglineTextRotator", {
  strings: ["^1000 I Help Businesses and Founders Build Software That Works."],
  typeSpeed: 50,
  showCursor: false,
});
