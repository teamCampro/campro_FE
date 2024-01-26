function layout({ children }: { children: React.ReactNode }) {
  return <body suppressHydrationWarning={true}>{children}</body>;
}

export default layout;
