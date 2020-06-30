import React from "react";

export default function Counts() {

	return (
		<>
			<section id="counts" className="counts">
				<div className="container">
					<div className="row">
						<div
							className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
							data-aos="fade-right"
							data-aos-delay="150">
							<img
								src="assets/img/happy-church.png"
								alt=""
								className="img-fluid"
							/>
						</div>

						<div
							className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
							data-aos="fade-left"
							data-aos-delay="300">
							<div className="content d-flex flex-column justify-content-center">
								<div className="row">
									<div className="col-md-6 d-md-flex align-items-md-stretch">
										<div className="count-box">
											<i className="icofont-university"></i>
											<span data-toggle="counter-up">72</span>
											<p>
												<strong>Years of impact!</strong> since 1948, SCM UCI
												(now UI) has positively impacted thousands of students
												and youths in and around the University of Ibadan.
											</p>
										</div>
									</div>

									<div className="col-md-6 d-md-flex align-items-md-stretch">
										<div className="count-box">
											<i className="icofont-clock-time"></i>
											<span data-toggle="counter-up">32</span>
											<p>
												<strong>Years of strong Alumni support!</strong> the SCM
												UI alumni network has been a huge support for the branch
												since 1988!
											</p>
										</div>
									</div>

									<div className="col-md-6 d-md-flex align-items-md-stretch">
										<div className="count-box">
											<i className="icofont-users-social"></i>
											<span className="students" data-toggle="counter-up">
												25,000
											</span>
											<p>
												<strong>Graduates of SCM UI!</strong> over the years,
												SCM UI has produced numerous high-flying professionals
												and staunch believers to the world!
											</p>
										</div>
									</div>

									<div className="col-md-6 d-md-flex align-items-md-stretch">
										<div className="count-box">
											<i className="icofont-people"></i>
											<span className="people" data-toggle="counter-up">
												15
											</span>
											<p>
												<strong>Annual special programmes!</strong> highly
												impactful programmes are meticulously planned every
												year, strategic for Kingdom advancement and societal
												transformation!
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
