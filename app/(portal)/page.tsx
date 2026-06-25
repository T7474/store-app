import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <div className="d-flex justify-content-center">
              <h3>Material Management Application</h3>
            </div>
          </div>
        </div>
        <div className="row my-3">
          {/* APP 1 */}
          <div className="col-2">
            <Link href={"/planning"} className="text-decoration-none">
              <div className="card shadow">
                <div className="card-body ">
                  <div className="d-flex justify-content-center">
                    <Image
                      src="/icons/planning.png"
                      alt="Planning"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <h5 className="card-title d-flex justify-content">
                      Planning
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* END of APP 1 */}
        </div>
      </div>
    </>
  );
}
