import { Link } from "react-router-dom";
import banner from "/sb-banner.png";

export default function Intro() {
  return (
    <main>
      {/* Landing page  */}
      <div className="container w-screen flex flex-col items-center mx-5 my-10 lg:flex-row lg:justify-between">
        <img
          src={banner}
          alt="pebbles on the beach"
          sizes="100vw"
          className="px-6 mb-10 w-full h-auto lg:w-1/2"
        />
        <div className=" flex flex-col items-center">
          <h1 className="font-semibold text-4xl text-center mx-20 ">
            Start your spiritual journey with us
          </h1>
          <p className="mx-20 my-5 text-center text-gray-600 lg:text-sm ">
            Expert facilitators of the religious service you might need are
            right around the corner! Connect with them, discover their
            expertise, browser their reviews & recommendations, and view their
            availability & book for their service!
          </p>
          <Link className=" text-center w-40" href="#">
            Register now{" "}
          </Link>
        </div>
      </div>
    </main>
  );
}
