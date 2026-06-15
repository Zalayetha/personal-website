interface SocialLinksProps {
  linkedin: string;
  github: string;
}

export function SocialLinks({ linkedin, github }: SocialLinksProps) {
  return (
    <div className="flex flex-row min-h-12 gap-4 lg:justify-start justify-center">
      <a href={linkedin} target="_blank">
        <img src="assets/mdi_linkedin.png" alt="LinkedIn" width="32" />
      </a>
      <a href={github} target="_blank">
        <img src="assets/mdi_github.png" alt="GitHub" width="32" />
      </a>
    </div>
  );
}
