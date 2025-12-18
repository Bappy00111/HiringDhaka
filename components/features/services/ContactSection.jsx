import IconMapper from "@/components/ui/IconMapper";

export default function ContactSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="md:container mx-auto">
        <div className="md:max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hd-navy mb-4 title-text">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-hd-red mx-auto mb-4 btn-bg"></div>
            <p className="text-lg text-gray-600">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          {/* Contact Card */}
          <div className="md:max-w-2xl mx-auto mb-12">
            <div className="bg-[#0A2342] rounded-2xl p-6 lg:p-8 text-white text-center">

              {/* Icon */}
              <div className="w-20 h-20 btn-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconMapper name="handshake" size={38} />
              </div>

              <h3 className="text-2xl font-bold mb-4">Let's Talk Business</h3>

              <p className="text-white/90 mb-8">
                Connect with our team to explore how we can drive your business forward with our comprehensive solutions.
              </p>

              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Email */}
                <div className="flex items-center md:justify-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <IconMapper name="email" size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white/80 text-sm">Email</p>
                    <p className="font-semibold text-lg">collab@hiringdhaka.com</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center  md:justify-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <IconMapper name="whatsapp" size={22} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white/80 text-sm">WhatsApp</p>
                    <p className="font-semibold text-lg">+880 1779 228800</p>
                  </div>
                </div>
              </div>

              {/* Social Media Buttons */}
              <div className="flex space-x-4 justify-center">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/hiringdhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-hd-red/10 p-2 rounded-full transition-colors border border-hd-red/30 text-hd-navy hover:text-hd-red flex items-center justify-center group"
                  style={{ width: 48, height: 48 }}
                >
                  <IconMapper
                    name="facebook"
                    size={22}
                    className="group-hover:scale-110 transition-transform title-text"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801779228800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-hd-red/10 p-2 rounded-full transition-colors border border-hd-red/30 text-hd-navy hover:text-hd-red flex items-center justify-center group"
                  style={{ width: 48, height: 48 }}
                >
                  <IconMapper
                    name="whatsapp"
                    size={22}
                    className="group-hover:scale-110 transition-transform title-text"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/hiringdhaka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-hd-red/10 p-2 rounded-full transition-colors border border-hd-red/30 text-hd-navy hover:text-hd-red flex items-center justify-center group"
                  style={{ width: 48, height: 48 }}
                >
                  <IconMapper
                    name="linkedin"
                    size={22}
                    className="group-hover:scale-110 transition-transform title-text"
                  />
                </a>

                {/* Email */}
                <a
                  href="mailto:collab@hiringdhaka.com"
                  className="bg-white hover:bg-hd-red/10 p-2 rounded-full transition-colors border border-hd-red/30 text-hd-navy hover:text-hd-red flex items-center justify-center group"
                  style={{ width: 48, height: 48 }}
                >
                  <IconMapper
                    name="email"
                    size={22}
                    className="group-hover:scale-110 transition-transform title-text"
                  />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
