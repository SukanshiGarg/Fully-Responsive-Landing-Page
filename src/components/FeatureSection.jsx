import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div class="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
            {" "}
            your code
          </span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-12 flex flex-col items-start"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 p-3 bg-neutral-900 text-orange-700 justify-center items-center rounded-full mb-4">
              {feature.icon}
            </div>

            {/* Text + Description */}
            <h5 className="text-xl font-semibold mb-2">{feature.text}</h5>
            <p className="text-neutral-400">{feature.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
