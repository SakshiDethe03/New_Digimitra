import { jsPDF } from "jspdf";

export function generateCertificatePdf(userName: string, courseTitle: string): Blob {
  const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const centerX = pageWidth / 2;

  doc.setDrawColor(44, 62, 80);
  doc.setLineWidth(3);
  doc.rect(20, 20, pageWidth - 40, pageHeight - 40);
  doc.setLineWidth(1);
  doc.rect(28, 28, pageWidth - 56, pageHeight - 56);

  doc.setFont("times", "bold");
  doc.setFontSize(40);
  doc.setTextColor(44, 62, 80);
  doc.text("Certificate of Completion", centerX, 130, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text("This is to certify that", centerX, 190, { align: "center" });

  doc.setFont("times", "bolditalic");
  doc.setFontSize(32);
  doc.setTextColor(44, 62, 80);
  doc.text(userName, centerX, 240, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text("has successfully completed the course", centerX, 290, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(39, 174, 96);
  doc.text(courseTitle, centerX, 340, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, centerX, 400, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text("Digimitra - Basic Computer Education", centerX, pageHeight - 60, { align: "center" });

  return doc.output("blob");
}
