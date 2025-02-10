import Slider from "react-slick";
import Logo from "./assets/logo.png";
import Testimonial1 from "./assets/slider/1.jpg";
import Testimonial2 from "./assets/slider/2.jpg";
import Testimonial3 from "./assets/slider/3.jpg";
import Testimonial4 from "./assets/slider/4.jpg";
import Testimonial5 from "./assets/slider/5.jpg";
import Testimonial6 from "./assets/slider/6.jpg";
import Testimonial7 from "./assets/slider/7.jpg";
import Testimonial8 from "./assets/slider/8.jpg";
import threeHundred from "./assets/slider/three-hundred.png";
import features1 from "./assets/features/1.png";
import features2 from "./assets/features/2.png";
import features3 from "./assets/features/3.png";
import features4 from "./assets/features/4.png";
import features5 from "./assets/features/5.png";
import step1 from "./assets/steps/1.png";
import step2 from "./assets/steps/2.png";
import step3 from "./assets/steps/3.png";
import step4 from "./assets/steps/4.png";
import footerBg from "./assets/footer-bg.png";
import rubbleIcon from "./assets/rubble.png";
import appScreens from "./assets/app-screens.png";

import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";
import triangle from "./assets/triangle.png";
import trainer1 from "./assets/trainer1.png";
import trainer2 from "./assets/trainer2.png";
import trainer3 from "./assets/trainer3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomArrowProps {
  className?: string;
  onClick?: () => void;
}

const CustomPrevArrow = ({ className, onClick }: CustomArrowProps) => (
  <img
    src={leftArrow}
    alt="prev"
    className={`${className} !w-[40px] !h-[40px] lg:!w-[80px] lg:!h-[80px] !z-10 transform translate-x-[0] sm:translate-x-[-4px] lg:hover:opacity-60 transition-all`}
    onClick={onClick}
  />
);

const CustomNextArrow = ({ className, onClick }: CustomArrowProps) => (
  <img
    src={rightArrow}
    alt="next"
    className={`${className} !w-[40px] !h-[40px] lg:!w-[80px] lg:!h-[80px] !z-10 transform translate-x-[0] sm:translate-x-[4px] lg:hover:opacity-60 transition-all`}
    onClick={onClick}
  />
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />, // Кастомная стрелка "Назад"
  nextArrow: <CustomNextArrow />, // Кастомная стрелка "Вперёд"
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10px",
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "10px", // Уменьшите значение для большего расстояния на этом разрешении
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "10px", // Уменьшите значение для большего расстояния на этом разрешении
      },
    },
  ],
};

const apply = () => {
  window.location.href = "https://t.me/FitGuid_bot";
};

const App = () => {
  return (
    <div className="max-w-[1700px] mx-auto">
      <main className="w-full bg-none lg:bg-[url('./assets/main-bg.png')] md:bg-contain md:bg-no-repeat md:bg-[right_70px_-40px] 2xl:bg-[url('./assets/main-bg-full.png')] 2xl:bg-[length:800px] lg:bg-[right_-30px] 2xl:bg-[right_30px] pb-[60px] lg:pb-[150px] xl:pb-[170px] 2xl:pb-[177px] relative">
        <div className="triangle hidden lg:block absolute bottom-[-60px] left-0 z-10">
          <img
            src={triangle}
            className="w-[220px] 2xl:w-[250px]"
            alt="triangle"
          />
        </div>
        <div className="main-layout">
          <header className="w-full">
            <div className="container max-w-[95%] lg:max-w-[90%] mx-auto my-[30px] lg:my-[50px]">
              <img src={Logo} alt="FitMentor Logo" className="w-60 mb-4" />
            </div>
          </header>
          <div className="container max-w-[95%] lg:max-w-[90%] mx-auto mt-10 lg:mt-20">
            <div className="main-content w-full flex">
              <div className="xl:max-w-[605px] md:max-w-[490px] max-w-full">
                <h1 className="text-[39px] sm:text-[43px] md:text-[60px] xl:text-[74px] font-medium text-gray-900 mb-6 leading-13 md:leading-19">
                  Приведи себя <br /> в лучшую форму своей жизни!
                </h1>
                <p className="text-[#000] mt-2 text-[18px] lg:text-[19px] xl:text-[23px] my-3 font-[400]">
                  Преобразуйте фитнес и питание через персональные
                  онлайн-тренировки: чаты с тренером, живые видео и приложение
                  для ваших целей.
                </p>
                <button
                  onClick={apply}
                  className="cursor-pointer transform lg:translate-x-[120px] mt-3 lg:mt-5 px-10 lg:px-15 py-4 lg:py-6 bg-[#6F3DDE] text-white rounded-full shadow-lg hover:opacity-90 font-medium text-[26px] lg:text-[35px] bg-clip-border gradient-button"
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="min-h-screen flex flex-col items-center main-layout">
        <div className="container max-w-[95%] lg:max-w-[90%] mx-auto">
          <section className="py-7 px-4 lg:py-10 lg:mt-[-120px] 2xl:mt-[-50px] bg-white rounded-[50px] w-full lg:w-[95%] mx-auto relative mt-[-25px] white-plaque border-4 border-[#e6e6e6]">
            <div className="flex flex-row lg:flex-row items-center justify-center">
              <img src={rubbleIcon} className="w-12 lg:w-20 mr-5" alt="" />
              <h2 className="text-xl font-bold flex flex-col text-center">
                <span className="text-[15px] sm:text-[17px] lg:text-[25px]">
                  {" "}
                  Месяц тренировок с тренером{" "}
                </span>
                <span className="text-gray-900 text-[30px] sm:text-[35px] lg:text-[50px] leading-10">
                  по цене одной!
                </span>
              </h2>
            </div>
          </section>
          <section className="mt-8 w-full">
            <h3 className="text-[30px] lg:text-[50px] font-semibold text-[#353532] mt-6 text-center leading-10 lg:leading-16">
              Как вы будете работать <br className="hidden md:block" /> со своим
              тренером:
            </h3>

            <div className="flex gap-10 lg:gap-5 mt-15 lg:mt-20 flex-wrap justify-center">
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-full sm:w-[70%] md:w-[48%] lg:w-[23%] xl:w-[23%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">1</span>
                  <img src={step1} alt="" className="w-[70px]" />
                </div>
                <p>Пройдите тест и подберите идеального тренера</p>
              </div>
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-full sm:w-[70%] md:w-[48%] lg:w-[23%] xl:w-[23%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">2</span>
                  <img src={step2} alt="" className="w-[70px]" />
                </div>
                <p>
                  Видеозвонок для согласования индивидуального плана упражнений
                  и питания
                </p>
              </div>
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-full sm:w-[70%] md:w-[48%] lg:w-[23%] xl:w-[23%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">3</span>
                  <img src={step3} alt="" className="w-[70px]" />
                </div>
                <p>Выполняйте тренировки, разработанные специально для вас</p>
              </div>
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-full sm:w-[70%] md:w-[48%] lg:w-[23%] xl:w-[23%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">4</span>
                  <img src={step4} alt="" className="w-[70px]" />
                </div>
                <p>Будьте очень мотивированы в время еженедельных проверок</p>
              </div>
            </div>
          </section>

          <section className="mt-8 w-full relative">
            <div className="flex flex-col gap-10 lg:gap-4 items-center">
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform lg:hover:translate-y-[-10px] lg:hover:opacity-40 w-full md:w-[48%] sm:w-[70%] lg:w-full text-center lg:text-left">
                <p className="text-[20px] lg:text-[30px]">
                  <strong>Подберем проверенного тренера</strong> на базе вашего
                  запроса
                </p>
                <img
                  src={features1}
                  alt="icon"
                  className="w-[80px] lg:mb-0 mb-5"
                />
              </div>
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform lg:hover:translate-y-[-10px] lg:hover:opacity-40 w-full md:w-[48%] sm:w-[70%] lg:w-full text-center lg:text-left">
                <p className="text-purple-600 text-[20px] lg:text-[30px]">
                  <strong>Гибкое расписание.</strong> Наши тренера работают в
                  онлайн режиме 24/7
                </p>
                <img
                  src={features2}
                  alt="icon"
                  className="w-[80px] lg:mb-0 mb-5"
                />
              </div>
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform lg:hover:translate-y-[-10px] lg:hover:opacity-40 w-full md:w-[48%] sm:w-[70%] lg:w-full text-center lg:text-left">
                <p className="text-[20px] lg:text-[30px]">
                  <strong>Высокая вовлеченность тренера</strong> и контроль
                  техники.
                </p>
                <img
                  src={features3}
                  alt="icon"
                  className="w-[80px] lg:mb-0 mb-5"
                />
              </div>
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform lg:hover:translate-y-[-10px] lg:hover:opacity-40 w-full md:w-[48%] sm:w-[70%] lg:w-full text-center lg:text-left">
                <p className="text-purple-600 text-[20px] lg:text-[30px]">
                  <strong>Наши тренера дадут максимальную поддержку</strong> и
                  заботу о вас
                </p>
                <img
                  src={features4}
                  alt="icon"
                  className="w-[80px] lg:mb-0 mb-5"
                />
              </div>
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform lg:hover:translate-y-[-10px] lg:hover:opacity-40 w-full md:w-[48%] sm:w-[70%] lg:w-full text-center lg:text-left">
                <p className="text-[20px] lg:text-[30px]">
                  <strong>Мы подготовим персональную программу</strong> под ваши
                  особенности и предпочтения
                </p>
                <img
                  src={features5}
                  alt="icon"
                  className="w-[80px] lg:mb-0 mb-5"
                />
              </div>
            </div>
          </section>

          <section className="trainers">
            <h2 className="text-[30px] lg:text-[50px] font-semibold text-[#353532] mt-6 text-center leading-9 lg:leading-16 mb-5">
              Подобрали тренеров для вас!
            </h2>
            <Slider
              {...settings2}
              className="trainers-list flex items-center justify-between xl:gap-10 gap-20 mt-14"
            >
              <div className="trainer-item max-w-[400px] lg:max-w-[300px] relative pt-3 bg-white rounded-[40px] border-1 border-[#bababa] w-full flex flex-col justify-end">
                <h5 className="lg:text-[24px] text-[20px] my-3 font-normal">
                  Тренер Богдан
                </h5>
                <img
                  src={trainer1}
                  alt=""
                  className="h-[284px] mx-auto object-cover"
                />
                <button
                  onClick={apply}
                  className="cursor-pointer transform absolute left-[50%] bottom-[-20px] mt-3 lg:mt-5 px-10 lg:px-10 py-4 lg:py-4 bg-[#6F3DDE] text-white rounded-full shadow-lg hover:opacity-90 font-medium text-[22px] lg:text-[35px] bg-clip-border gradient-button"
                >
                  Записаться
                </button>
              </div>
              <div className="trainer-item max-w-[400px] lg:max-w-[300px] relative pt-3 bg-white rounded-[40px] border-1 border-[#bababa] w-full flex flex-col justify-end">
                <h5 className="lg:text-[24px] text-[20px] my-3 font-normal">
                  Шохина Мария
                </h5>
                <img
                  src={trainer2}
                  alt=""
                  className="h-[284px] mx-auto object-cover"
                />
                <button
                  onClick={apply}
                  className="cursor-pointer transform absolute left-[50%] bottom-[-20px] mt-3 lg:mt-5 px-10 lg:px-10 py-4 lg:py-4 bg-[#6F3DDE] text-white rounded-full shadow-lg hover:opacity-90 font-medium text-[22px] lg:text-[35px] bg-clip-border gradient-button"
                >
                  Записаться
                </button>
              </div>
              <div className="trainer-item max-w-[400px] lg:max-w-[300px] relative pt-3 bg-white rounded-[40px] border-1 border-[#bababa] w-full flex flex-col justify-end">
                <h5 className="lg:text-[24px] text-[20px] my-3 font-normal">
                  Шиндин Никита
                </h5>
                <img
                  src={trainer3}
                  alt=""
                  className="h-[284px] mx-auto object-cover"
                />
                <button
                  onClick={apply}
                  className="cursor-pointer transform absolute left-[50%] bottom-[-20px] mt-3 lg:mt-5 px-10 lg:px-10 py-4 lg:py-4 bg-[#6F3DDE] text-white rounded-full shadow-lg hover:opacity-90 font-medium text-[22px] lg:text-[35px] bg-clip-border gradient-button"
                >
                  Записаться
                </button>
              </div>
            </Slider>
          </section>

          <section className="app-screens">
            <img
              src={appScreens}
              className="max-w-[650px] w-full mx-auto my-[50px]"
              alt="screens"
            />
          </section>

          <section className="mt-8 w-full">
            <h2 className="text-[30px] lg:text-[50px] font-semibold text-[#353532] mt-6 text-center leading-9 lg:leading-16 mb-5">
              Отзывы наших клиентов:
            </h2>
            <div className="mx-auto">
              <Slider {...settings} className="w-full mx-auto">
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial1}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial2}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial3}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial4}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial5}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial6}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial7}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
                <div className="flex items-center my-auto">
                  <img
                    src={Testimonial8}
                    alt="Review 1"
                    className="w-[450px] rounded-lg mx-auto"
                  />
                </div>
              </Slider>
            </div>
          </section>

          <section className="mt-8 w-full lg:p-6 text-center">
            <img
              src={threeHundred}
              alt="threeHundred"
              className="mx-auto max-w-[900px] w-full"
            />
            <h2 className="text-xl lg:text-3xl font-[500] text-gray-900 my-6">
              Мы обладаем всеми возможными знаниями, которые идеально подойдут
              именно вам!
            </h2>
            <p className="text-gray-700 mt-2 text-xl lg:text-3xl">
              От бодибилдинга до послеродового периода, гормональных и
              медицинских проблем.
            </p>
            <button
              className="gradient-button cursor-pointer transform mt-3 lg:mt-5 px-10 lg:px-15 py-4 lg:py-6 bg-[#6F3DDE] text-white rounded-full shadow-lg hover:opacity-90 font-medium text-[26px] lg:text-[35px] bg-clip-border"
              onClick={apply}
            >
              Получить
            </button>
            <p className="text-[#5a5a5a] my-6 text-xl lg:text-2xl">
              Бесплатную персональную программу тренировок
            </p>
          </section>
          <footer className="text-center">
            <img
              className="mx-auto"
              src={footerBg}
              alt="footerBg"
              width={"900px"}
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
