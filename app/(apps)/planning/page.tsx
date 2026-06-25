"use client";
import { useBoundStore, BoundStoreState } from "@/store/useBoundStore";

export default function PlanningPage() {
  const addToCart = useBoundStore((state: BoundStoreState) => state.addToCart);

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() =>
                addToCart({
                  id: 1,
                  name: "สินค้าจำลอง",
                  price: 100,
                  quantity: 1,
                })
              }
            >
              เพิ่มสินค้าจำลอง
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
