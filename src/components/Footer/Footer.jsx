import { FaPaw } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-10">
      <nav>
        <div className="flex items-center gap-3 mb-5 text-xl">
          <span className="text-4xl">
            <FaPaw></FaPaw>
          </span>
          <p className="text-[#9399A2] text-[2rem]">Peddy</p>
        </div>
        <a className="link link-hover">
          Location: av. Washington 165, NY CA 54003
        </a>
        <a className="link link-hover">Phone: +31 85 964 47 25</a>
        <a className="link link-hover"> Email: info@yourdomain.com</a>
        <a className="link link-hover">Openings hours: 9.00 AM - 5.00 PM</a>
        <div className="flex gap-4 items-center mt-3">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/twitterx--v2.png"
            alt=""
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="youtube-play"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/96/instagram-new.png"
            alt="instagram-new"
          />
        </div>
      </nav>
      <nav>
        <h6 className="footer-title mb-4 font-Inter">Useful Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Animals</a>
        <a className="link link-hover">Foundation</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title mb-4 font-Inter">Drop a Message</h6>
        <label className="input input-bordered bg-[#9399A2] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow placeholder:text-[#C3C9D0]"
            placeholder="Email"
          />
        </label>
        <button className="text-white font-semibold text-[20px] btn bg-primary border-none hover:bg-primary w-full mt-4">
          Subscribe
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
