import "./globals.css";
import { Card } from "@/components/ui/card";
import Line from "@/components/Line"

export default function Home() {

  return (
    <>
      <div className="bg-kai-bgblack w-full h-full text-white">
        <div className="flex  justify-center h-full mt-[51px] lg:mt-[60px]">
          <div
            className="md:max-w-[450px] lg:min-w-[750px] lg:max-w-[750px] py-8 flex flex-col justify-center sm:justify-center items-center"
          >
            <div className="flex justify-start w-full">
              <img src="/yo.png" className="w-[60px] h-[60px] rounded-full shadow-xl" alt="yo" />
            </div>
            <div className="h-fit w-full mx-4 text-start dark:text-white flex-col">
              <div className="my-2.5">
                <h1 className="text-3xl underline">
                  <b>Hey! soy Maximo </b>
                </h1>
                <p
                  className="text-xl max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]"
                >
                  +2 años de experiencia. <b className="text-kai-button"
                  >Developer ux/ui Front-end
                  </b> de Buenos Aires, Argentina. Especializado en el desarrollo
                  de aplicaciones web únicas.
                </p>
              </div>
              <div className="flex maw-w-[400px] md: lg: ">

                <button
                  className="bg-transparent mr-2 mb-2 px-2.5 py-1.5
text-white font-medium text-center
justify-center inline-flex items-center flex-row
rounded-lg border gap-x-2 opacity-90
cursor-pointer hover:bg-kai-hover hover:text-white
hover:opacity-100 hover:bg-black-600
hover:scale-110 hover:shadow-lg
dark:focus:ring-black-300
focus:ring-2 focus:outline-none focus:ring-black-30
transition-all duration-200 ease-in-out scale-90"
                >
                  <a href="" className="flex text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                    ><path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"></path><path
                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                      ></path><path d="M8 11l0 5"></path><path
                        d="M8 8l0 .01"></path><path d="M12 16l0 -5"
                        ></path><path d="M16 16v-3a2 2 0 0 0 -4 0"
                        ></path></svg>
                    Linkedin
                  </a>
                </button>
                <button
                  className="bg-transparent mr-2 mb-2 px-2.5 py-1.5
text-white font-medium text-center
justify-center inline-flex items-center flex-row
rounded-lg border gap-x-2 opacity-90
cursor-pointer hover:bg-kai-hover hover:text-white
hover:opacity-100 hover:bg-black-600
hover:scale-110 hover:shadow-lg
dark:focus:ring-black-300
focus:ring-2 focus:outline-none focus:ring-black-30
transition-all duration-200 ease-in-out scale-90"
                >
                  <a href="" className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                    Github
                  </a>
                </button>
                <button
                  className="bg-transparent mr-2 mb-2 px-2.5 py-1.5
text-white font-medium text-center
justify-center inline-flex items-center flex-row
rounded-lg border gap-x-2 opacity-90
cursor-pointer hover:bg-kai-hover hover:text-white
hover:opacity-100 hover:bg-black-600
hover:scale-110 hover:shadow-lg
dark:focus:ring-black-300
focus:ring-2 focus:outline-none focus:ring-black-30
transition-all duration-200 ease-in-out scale-90"
                >
                  <a href="" className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                    Instagram
                  </a>
                </button>

              </div>
            </div>
          </div>
        </div>

        <div id="EXP">
          <Line />

        </div>

        <div className="w-full ">
          <div className="w-full flex flex-col items-center">
            <div className="flex md:max-w-[450px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]">
              <h3
                className=" underline text-xl"
              >
                <b>Mis Proyectos:</b>
              </h3>
            </div>
            <div
              className="w-fit flex flex-col md:flex-row lg:flex-row md:max-w-[500px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]"
            >
              <Card className="shadow-lg my-4   w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110">
                <a target="_blank" className="flex flex-col" href="https://lively-zabaione-6127f6.netlify.app/">
                  <img src="/designsystem.png" className="h-[130px] w-fit rounded-xl z-10 " alt="" />

                </a>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
