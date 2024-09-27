const WhyTypio = () => {
  return (
    <>
      <div className="min-h-screen bg-looper-pattern bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-center items-center ">
            <div className="flex-1 space-y-5">
              <h1 className="text-7xl text-center font-semibold  bg-gradient-to-r from-[#60aef8] via-[#f46692] to-[#f3a562] bg-clip-text text-transparent">
                Why typio?
              </h1>
              <p className="text-2xl text-center font-medium">
                Whether you're a beginner looking to improve your typing
                accuracy or a seasoned pro aiming to boost your speed, our
                platform is designed to help you grow at your own pace.
              </p>
            </div>
            <div className="flex-1">
              <img src="/images/question.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyTypio;
