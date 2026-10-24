export default function UserList({ info }) {
  return (
    <>
      <div className="card mb-3" style={{ borderRadius: "15px" }}>
        <div className="card-body p-4">
          <div className="d-flex">
            <div className="flex-shrink-0">
              <img
                src="https://randomuser.me/api/portraits/women/64.jpg"
                alt="Profile Image"
                className="rounded-circle shadow-sm"
                style={{ width: "120px" }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">{info.name}</h5>
              <p className="text-muted mb-2">{info.email}</p>
              {/* <p className="text-muted mb-2">{info.address.city}</p> */}
              <p className="mb-3">
                Passionate about creating intuitive and beautiful digital
                experiences.
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary btn-sm">
                  <i className="fas fa-envelope me-1"></i>Contact
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-user-plus me-1"></i>Follow
                </button>
              </div>
              <div className="mt-3 d-flex gap-3">
                <i className="fab fa-twitter text-primary"></i>
                <i className="fab fa-linkedin text-primary"></i>
                <i className="fab fa-dribbble text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
