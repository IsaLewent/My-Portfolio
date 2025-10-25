import { Particles } from "../components/Particles";

const Contact = () => {
  return (
    <section className="relative flex items-center c-space min-h-screen mt-10 md:mt-15" id="contact">
      <Particles
        className="absolute inset-0 z-9"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white rounded-2xl bg-primary z-10">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Lets Talk</h2>
          <p className="subtext">
            Whether you're looking to build a new website,improve your existing
            platform , or bring a unique projext to life, I'm here to help for
            you.
          </p>
        </div>
        <div>
          <form className="w-full">
            <div className="mb-5 ">
              <label htmlFor="name" className="field-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="field-input field-input-focus"
                placeholder="Isa"
                required
                autoComplete="name"
                
              />
            </div>
            <div className="mb-5 ">
              <label htmlFor="name" className="field-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="field-input field-input-focus"
                placeholder="isalevent1242@gmail.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-5 ">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                type="text"
                rows="5"
                id="message"
                name="message"
                className="field-input field-input-focus"
                placeholder="Hello..."
                required
                autoComplete="message"
              />
            </div>
            <button className="w-full px1 py3 text-lg text-center rounded-lg cursor-pointer bg-radial from-lavender to-royal hover-animation">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
