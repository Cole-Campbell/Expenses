import React from "react";

type PageViewLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const PageViewLayout = ({
  children,
  title,
  subtitle
}: PageViewLayoutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      <hr />
      <div>{children}</div>
    </div>
  );
};
