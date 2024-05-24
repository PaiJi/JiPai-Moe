import { ContainerStyle } from "@utils/define";
import lightenColor from "@utils/lightenColor";
import clsx from "clsx";

export default function QuickLink({
  primaryColor,
  icon,
  href,
}: {
  primaryColor: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href}>
      <div
        className={clsx(
          "p-6 h-full group transition hover:drop-shadow-2xl",
          ContainerStyle
        )}
        style={{ backgroundColor: lightenColor(primaryColor, 0.1) }}
      >
        <div
          className="text-3xl leading-3 text-center h-full items-center flex justify-center group-hover:scale-150 transition-all"
          style={{ color: primaryColor }}
        >
          {icon}
        </div>
      </div>
    </a>
  );
}
