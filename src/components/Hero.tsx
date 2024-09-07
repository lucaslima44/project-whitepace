export function Hero() {
  return (
    <div className="flex w-full py-20 px-4 flex-col justify-center items-center gap-[60px] bg-primary self-stretch bg-[url('/element.png')]">
      <div className="gap-6 flex flex-col justify-center items-center ">
        <h4 className="text-4xl text-center text-white font-bold tracking-[-0.72px]">
          Get More Done with whitepace
        </h4>
        <p className="text-center text-white text-lg leading-[30px] tracking-[-0.36px]">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
      </div>

      <button className="text-white text- rounded-sm bg-[#4F9CF9] gap-[10px] flex items-center py-5 px-10">
        Try TasKey Free
      </button>

      <img
        src="/image-container.png"
        alt="imagem container"
        className="w-[286px] h-[191px]"
      />
    </div>
  );
}
