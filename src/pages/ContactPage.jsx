const ContactPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14  max-w-[1300px] mx-auto py-8 text-left ">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[34px] tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px]  text-cener leading-normal">
          Contact Us
        </h2>
        <p className="text-sm text-gray-dark mb-6 mt-2 text-pretty">Get in touch and let&apos; talk </p>
        <div className="mt-4 flex items-cente flex-col gap-1">
          <p className="font-medium">Mailing Address:</p>
          <div>
            <p>8 The Green, Suite R</p>
            <p>Dover, DE 19901</p>
          </div>
        </div>

        <div className="mt-4 flex items-cente flex-col">
          <p className="font-medium">Email:</p>

          <a href="mailto:help@homerevampexpert.com" className="text-blue-600">
            help@homerevampexpert.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
