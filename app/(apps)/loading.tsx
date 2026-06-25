// app/(apps)/loading.tsx
export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        {/* ใช้ Spinner ของ Bootstrap */}
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="mt-3 text-secondary">กำลังโหลดข้อมูล...</h5>
      </div>
    </div>
  );
}
