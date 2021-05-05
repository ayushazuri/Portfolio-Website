import "./index.scss";

import CertificateCard from "../../components/CertificateCards";
import React from "react";
import { certifications } from "../../portfolio";

const Certification = () => {
	return (
		<div className="certification">
			<h1>Courses and Certifications</h1>
			<div className="certification__cards">
				{certifications.map((certificate, index) => {
					return <CertificateCard key={index} certificate={certificate} />;
				})}
			</div>
		</div>
	);
};

export default Certification;
