import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import ComplianceHero from "./components/ComplianceHero";
import CPAComplianceGrid from "./components/CPAComplianceGrid";
import PHCPComplianceGrid from "./components/PHCPComplianceGrid";
import ComplianceCommitment from "./components/ComplianceCommitment";

export default function Compliance() {
  return (
    <>
      <Navbar />
      <main>
        <ComplianceHero />
        <CPAComplianceGrid />
        <PHCPComplianceGrid />
        <ComplianceCommitment />
      </main>
      <Footer />
    </>
  );
}
