// app/(apps)/layout.tsx

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
        {children} {/* 👈 สำคัญมาก! บรรทัดนี้จะนำเนื้อหาของหน้า planning, dashboard และหน้าอื่นๆ มาแสดงผลออโต้ */}
      </main>
    </div>
  );
}
