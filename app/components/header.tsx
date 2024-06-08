import Link from "next/link";
import Icon, { IconName } from "./icon";

function Header({
  title,
  href,
  children,
  iconName,
  iconClassName,
}: Readonly<{
  title?: string;
  href: string;
  children?: React.ReactNode;
  iconName?: IconName;
  iconClassName?: string;
}>) {
  const iconNameFallback = iconName ?? "arrow-left";
  const classNameDefaut = "flex w-full gap-5 items-center";
  return (
    <div
      className={`${classNameDefaut} ${children ? "justify-between" : null}`}
    >
      {children || null}
      <Link
        href={href}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 transition-all"
      >
        <Icon
          name={iconNameFallback}
          className={`text-[#272727] ${iconClassName}`}
        />
      </Link>
      {!children ? <div className="text-xl font-semibold">{title}</div> : null}
    </div>
  );
}

export default Header;
