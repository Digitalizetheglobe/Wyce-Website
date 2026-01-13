"use client";

const certificates = [
  {
    name: "Wyce EC Letter",
    pdf: "/images/certificates/Wyce EC Letter.pdf",
    shortName: "Wyce EC Letter"
  },
  {
    name: "Financial Express - Revision Public Notice",
    pdf: "/images/certificates/Financial Express - Revision Public Notice.pdf",
    shortName: "Financial Express - Revision Public Notice"
  },
  {
    name: "Loksatta - Revision Public Notice",
    pdf: "/images/certificates/Loksatta - Revision Public Notice.pdf",
    shortName: "Loksatta - Revision Public Notice"
  }
];

export default function CertificatesPage() {
  const handleCertificateClick = (pdfPath: string) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10  border-b border-white/20 pb-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">EC <span className="font-breathney text-[#b6a16b] ml-2 text-[20px]">CERTIFICATE</span></h1>

          <p className="text-gray-200 text-sm md:text-base">
            View our Environmental Clearance certificates and public notices.
            Because in every detail, Thoughtful is Beautiful.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Certificates Horizontal Scroll Container */}
          <div className="relative">
            {/* Scrollable Container */}
            <div className="overflow-x-auto scrollbar-hide pb-6">
              <div className="flex gap-6 md:gap-8 lg:gap-10 min-w-max px-4">
                {certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer flex-shrink-0"
                    onClick={() => handleCertificateClick(certificate.pdf)}
                  >
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden hover:border-[#B7AC88] transition-all duration-300 hover:shadow-lg hover:shadow-[#B7AC88]/20 w-[280px] md:w-[320px] lg:w-[360px]">
                      {/* PDF Preview Container */}
                      <div className="relative w-full h-[420px] md:h-[480px] bg-gray-900 overflow-hidden" style={{ overflow: 'hidden' }}>
                        <iframe
                          src={`${certificate.pdf}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
                          className="w-full h-full pointer-events-none border-0"
                          title={certificate.name}
                          loading="lazy"
                          style={{ 
                            overflow: 'hidden',
                            border: 'none',
                            margin: 0,
                            padding: 0
                          }}
                          scrolling="no"
                        />
                        {/* Fallback for browsers that don't support PDF in iframe */}
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="text-center p-6">
                            <svg
                              className="w-16 h-16 mx-auto mb-4 text-[#B7AC88]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-[#B7AC88] text-sm font-semibold">PDF Document</p>
                          </div>
                        </div>
                        {/* Overlay for better click indication */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#B7AC88]/90 text-black px-6 py-3 rounded-md font-semibold text-sm md:text-base">
                            Click to View PDF
                          </div>
                        </div>
                      </div>
                      
                      {/* Certificate Info */}
                      <div className="p-4 md:p-5 bg-[#1a1a1a]">
                        <h3 className="text-base md:text-lg font-semibold text-white mb-1 group-hover:text-[#B7AC88] transition-colors text-center">
                          {certificate.shortName}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
