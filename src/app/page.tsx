import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/036/594/488/non_2x/ai-generated-dental-clinic-advertisment-background-with-copy-space-free-photo.jpg)`,
        }}
        className="bg-cover bg-left bg-white rounded-2xl w-full h-[400px] md:h-[540px]"
      >
        <div className="p-5 sm:pl-16 pt-20 md:pt-28">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ">
            
            Your Dream
          </h1>
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl  lg:text-8xl font-bold flex items-center gap-3">
            
            Smile
            <div
              style={{
                backgroundImage: `url(https://www.dentalclinicdelhi.com/wp-content/uploads/2017/09/Kids-Dentist.jpg)`,
              }}
              className="bg-cover bg-center shadow-2xl border-2 border-red-50 hover:border-black cursor-pointer bg-white rounded-full w-[200px] h-[60px] sm:w-[250px] sm:h-[65px]"
            ></div>
            is
          </h1>
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl  lg:text-8xl font-bold">
            our Care
          </h1>
          <Link href="/contact" >
          <button className="bg-black hover:bg-transparent hover:text-black hover:border-black hover:border-2 px-20 py-5 font-semibold text-sm text-white rounded-full mt-3">
            Book Appointment
          </button>
          </Link>
        </div>
      </div>

      {/* About Section  */}
      <div className="bg-white w-full my-5 rounded-2xl flex-wrap md:flex-nowrap flex items-center justify-between gap-16 p-8">
        <div className=" flex flex-col gap-5 w-full lg:w-1/2">
          <h1 className="text-4xl sm:5xl lg:text-6xl font-semibold">
            Clrafting <br />
            Healthy Smiles <br /> One Service at <br /> a Time
          </h1>
          <p className="sm:w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe
            vero debitis laboriosam voluptates doloremque provident praesentium
            nostrum? Est fuga quas adipisci totam doloremque quo perspiciatis
            expedita, amet sint enim.
          </p>
          <div>
            <Link href='/about'>
            <button className="border-2 border-black px-16 sm:px-20 py-3 sm:py-5 font-semibold text-sm hover:bg-black hover:text-white duration-300 text-black rounded-full">
              About Clinic
            </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(https://avitahealth.in/wp-content/uploads/2023/07/1-2.png)`,
          }}
          className="bg-cover bg-center bg-white rounded-2xl h-[350px] lg:h-[500px] w-full lg:w-1/2 "
        ></div>
      </div>

      {/* services section  */}

      <div className="bg-black w-full my-5 rounded-2xl flex flex-col gap-16 p-8">
        <div className="flex-wrap lg:flex-nowrap flex justify-between gap-5 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Elevating Oral Health <br />
            with Personalized <br />
            Service
          </h1>
          <div className="lg:pl-56">
            <p className="text-[11px] sm:text-[12px] text-white sm:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              <br />
              saepe vero debitis laboriosam voluptates doloremque provident
              <br />
              praesentium nostrum? Est fuga quas adipisci totam doloremque
              <br />
              perspiciatis expedita, amet sint enim.
            </p>

            <Link href='/service'>
            <button className="border-[1px] border-white px-7 py-2 font-semibold text-[8px] hover:bg-white hover:text-black duration-300 text-white rounded-full mt-3">
              All Services
            </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-[400px] rounded-2xl relative bg-blue-100 p-5 flex flex-col gap-4">
            <button className="bg-black text-white rounded-full h-8 sm:h-12 w-8  sm:w-12 absolute top-3 sm:top-2 right-3">
              --
            </button>
            <h1 className=" text-3xl sm:text-4xl font-semibold">General dentistry</h1>
            <p className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non
              reprehenderit asperiores veniam a, sapiente qui vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
            <div>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit amet conser adiping elit.
              </li>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit amet consectetur elit.
              </li>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit consectetur adipisicing elit.
              </li>
            </div>
          </div>
          <div className="w-[400px] rounded-2xl relative bg-green-200 p-5 flex flex-col gap-4">
            <button className="bg-black text-white rounded-full h-8 sm:h-12 w-8  sm:w-12 absolute top-3 sm:top-2 right-3">
              --
            </button>
            <h1 className=" text-3xl sm:text-4xl font-semibold">Cosmetic <br /> dentistry</h1>
            <p className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non
              reprehenderit asperiores veniam a, sapiente qui vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
            <div>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit amet conser adiping elit.
              </li>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit amet consectetur elit.
              </li>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit consectetur adipisicing elit.
              </li>
            </div>
          </div>
          <div className="w-[400px] rounded-2xl relative bg-yellow-100 p-5 flex flex-col gap-4">
            <button className="bg-black text-white rounded-full h-8 sm:h-12 w-8  sm:w-12 absolute top-3 sm:top-2 right-3">
              --
            </button>
            <h1 className=" text-3xl sm:text-4xl font-semibold"> Restorative <br /> dentistry</h1>
            <p className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non
              reprehenderit asperiores veniam a, sapiente qui vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
            <div>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit amet conser adiping elit.
              </li>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit amet consectetur elit.
              </li>
              <li className="text-[11px] sm:text-[12px] font-semibold text-slate-800">
                Lorem ipsum dolor sit consectetur adipisicing elit.
              </li>
            </div>
          </div>
          
         
        </div>
      </div>

      {/* Quality Section  */}

      <div className="bg-white w-full my-5 rounded-2xl flex flex-col gap-16 p-8">
        <div className=" flex flex-wrap md:flex-nowrap justify-between gap-5 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black">
            Modern Dentistry <br />
            With a Personal <br />
            Touch
          </h1>
          <div className=" md:pl-56">
            <p className="text-[11px] sm:text-[12px] text-black text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              <br />
              saepe vero debitis laboriosam voluptates doloremque provident
              <br />
              praesentium nostrum? Est fuga quas adipisci totam doloremque
              <br />
              perspiciatis expedita, amet sint enim.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-full">
              <div className="flex flex-col justify-center gap-10 p-5 rounded-2xl bg-black text-white ">
                <h1 className="text-3xl font-semibold">
                  Innovation technology
                </h1>
                <p className="text-[12px] font-semibold text-zinc-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  dolorum dicta tempora, quod corporis facere placeat minima
                  laudantium commodi natus rerum corrupti, sunt ea sit tenetur
                  facilis ducimus. Accusamus illum explicabo vero aliquid
                  quaerat recusandae.
                </p>
              </div>
              <div
                style={{
                  backgroundImage: `url(https://drlgreenwald.com/wp-content/uploads/2017/02/Depositphotos_13597866_l-2015-480x170.jpg)`,
                }}
                className=" bg-bottom bg-cover hidden md:flex items-center justify-center bg-blue-500 text-white rounded-2xl col-span-2"
              ></div>
              <div
                style={{
                  backgroundImage: `url(https://heritageoralsurgery.com/wp-content/uploads/2021/10/close-up-dental-implant-model-hands-dentist-holding-implant_35-1210x423.jpeg)`,
                }}
                className=" bg-center bg-cover hidden md:flex items-center justify-center bg-blue-500 text-white rounded-2xl col-span-2"
              ></div>

              <div className="flex items-center justify-center  text-white rounded">
                <div className="flex flex-col justify-center gap-10 p-5 rounded-2xl bg-yellow-200 text-white ">
                  <h1 className="text-3xl font-semibold text-black">
                    Comfortable and coziness
                  </h1>
                  <p className="text-[12px] font-semibold text-zinc-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dolorum dicta tempora, quod corporis facere placeat minima
                    laudantium commodi natus rerum corrupti, sunt ea sit tenetur
                    facilis ducimus. Accusamus illum explicabo vero aliquid
                    quaerat recusandae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* review section  */}

      <div className="bg-black w-full my-5 rounded-2xl flex flex-col gap-16 p-8">
        <div className=" flex justify-between gap-5 ">
          <div>
            <h3 className="text-[12px] sm:text-sm text-zinc-300 font-semibold pb-10">Happy Smiles</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Patients Gave<br />
              Lots of Love 
            </h1>
          </div>
         
        </div>
        <div className="flex flex-wrap items-center sm:items-start justify-center sm:justify-start gap-5">
          <div className="w-[300px] lg:w-[285px] rounded-2xl bg-blue-100 p-5 flex flex-col gap-10">   
            <div className="flex items-center gap-5">
              <div className="bg-center bg-cover bg-black rounded-2xl w-20 h-20"></div>
              <div className="">
                <h1 className="font-semibold text-lg sm:text-xl">Alice Thompson</h1>
                <p className="font-medium text-[12px] sm:text-[14px]">Software Developer</p>
              </div>
            </div>
            <p className="text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet conctetur adipis elit. Esse non
              renderit aspores veniam a, sapiente quikd  vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
           
          </div>
          <div className="w-[300px] rounded-2xl bg-red-100 p-5 flex flex-col gap-10">   
            <div className="flex items-center gap-5">
              <div className="bg-center bg-cover bg-black rounded-2xl w-20 h-20"></div>
              <div className="">
                <h1 className="font-semibold text-lg sm:text-xl">Alice Thompson</h1>
                <p className="font-medium text-[12px] sm:text-[14px]">Software Developer</p>
              </div>
            </div>
            <p className="text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet conctetur adipis elit. Esse non
              renderit aspores veniam a, sapiente quikd  vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
           
          </div>
          <div className="w-[300px] rounded-2xl bg-blue-100 p-5 flex flex-col gap-10">   
            <div className="flex items-center gap-5">
              <div className="bg-center bg-cover bg-black rounded-2xl w-20 h-20"></div>
              <div className="">
                <h1 className="font-semibold text-lg sm:text-xl">Alice Thompson</h1>
                <p className="font-medium text-[12px] sm:text-[14px]">Software Developer</p>
              </div>
            </div>
            <p className="text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet conctetur adipis elit. Esse non
              renderit aspores veniam a, sapiente quikd  vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
           
          </div>
          <div className="w-[300px] rounded-2xl bg-red-100 p-5 flex flex-col gap-10">   
            <div className="flex items-center gap-5">
              <div className="bg-center bg-cover bg-black rounded-2xl w-20 h-20"></div>
              <div className="">
                <h1 className="font-semibold text-lg sm:text-xl">Alice Thompson</h1>
                <p className="font-medium text-[12px] sm:text-[14px]">Software Developer</p>
              </div>
            </div>
            <p className="text-[12px] font-semibold text-slate-800">
              Lorem ipsum dolor sit amet conctetur adipis elit. Esse non
              renderit aspores veniam a, sapiente quikd  vel blanditiis
              obcaecati modi numquam laboriosam.
            </p>
           
          </div>
        
          
        </div>
      </div>
    </>
  );
}
