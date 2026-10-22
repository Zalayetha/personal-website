export const SITE_URL = "https://zaghy.my.id";
export const SITE_NAME = "Zaghy Zalayetha";
export const SITE_TITLE = "Zaghy Zalayetha | Software Engineer";
export const DEFAULT_DESCRIPTION =
  "Zaghy Zalayetha. Software Engineer based in Indonesia specializing in full-stack web platforms and cross-platform mobile apps.";
export const DEFAULT_OG_IMAGE = "/og-image.png";

export function parseISODate(str: string): string {
  try {
    const d = new Date(`1 ${str.trim()}`);
    if (!isNaN(d.getTime())) {
      return d.toISOString();
    }
  } catch {}
  return new Date().toISOString();
}

export function parseRFC822Date(str: string): string {
  try {
    const d = new Date(`1 ${str.trim()}`);
    if (!isNaN(d.getTime())) {
      return d.toUTCString();
    }
  } catch {}
  return new Date().toUTCString();
}

export function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
