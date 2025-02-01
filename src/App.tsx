import Slider from "react-slick";
import Logo from "./assets/logo.png";
import Testimonial1 from "./assets/slider/1.jpg";
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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true, // Показать точки навигации
  infinite: true, // Бесконечный скролл
  speed: 500, // Скорость перехода
  slidesToShow: 1, // Количество слайдов на экране
  slidesToScroll: 1, // Количество слайдов при прокрутке
};

const App = () => {
  return (
    <div className="max-w-[1700px] mx-auto">
      <main className="w-full bg-none lg:bg-[url('./assets/main-bg.png')] md:bg-contain md:bg-no-repeat md:bg-[right_70px_-40px] 2xl:bg-[url('./assets/main-bg-full.png')] 2xl:bg-[length:800px] lg:bg-[right_-30px] 2xl:bg-[right_30px] pb-[150px] xl:pb-[170px] 2xl:pb-[177px]">
        <div className="main-layout">
          <header className="w-full">
            <div className="container max-w-[90%] mx-auto my-[50px]">
              <img src={Logo} alt="FitMentor Logo" className="w-60 mb-4" />
            </div>
          </header>
          <div className="container max-w-[90%] mx-auto mt-20">
            <div className="main-content w-full flex">
              <div className="xl:max-w-[630px] lg:max-w-[500px] md:max-w-[370px] max-w-full">
                <h1 className="text-[45px] lg:text-[60px] xl:text-[75px] font-medium text-gray-900 mb-6 leading-13 lg:leading-19">
                  Приведи себя <br /> в лучшую форму своей жизни!
                </h1>
                <p className="text-[#000] mt-2 text-[18px] lg:text-[20px] xl:text-[23px] my-3 font-[400]">
                  Преобразуйте фитнес и питание через персональные
                  онлайн-тренировки: чаты с тренером, живые видео и приложение
                  для ваших целей.
                </p>
                <button className="cursor-pointer transform lg:translate-x-[120px] mt-0 px-15 py-6 bg-gradient-to-r from-[#6F3DDE] to-[#9261FF] text-white rounded-full shadow-lg hover:opacity-90 font-medium text-[26px] lg:text-[35px] bg-clip-border">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="min-h-screen flex flex-col items-center main-layout">
        <div className="container max-w-[90%] mx-auto">
          <section className="py-10 mt-[-120px] 2xl:mt-[-50px] bg-white rounded-[50px] w-[95%] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <img src={rubbleIcon} className="w-20 mr-5" alt="" />
              <h2 className="text-xl font-bold flex flex-col text-center">
                <span className="text-[25px]">
                  {" "}
                  Месяц тренировок с тренером{" "}
                </span>
                <span className="text-gray-900 text-[50px] leading-10">
                  по цене одной!
                </span>
              </h2>
            </div>
          </section>
          <section className="mt-8 w-full">
            <h3 className="text-[50px] font-semibold text-[#353532] mt-6 text-center leading-16">
              Как вы будете работать <br /> со своим тренером:
            </h3>

            <div className="flex gap-9 mt-20 flex-wrap">
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-[100%] md:w-[47%] lg:w-[21%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">1</span>
                  <img src={step1} alt="" />
                </div>
                <p>Пройдите тест и подберите идеального тренера</p>
              </div>
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-[100%] md:w-[47%] lg:w-[21%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">2</span>
                  <img src={step2} alt="" />
                </div>
                <p>
                  Видеозвонок для согласования индивидуального плана упражнений
                  и питания
                </p>
              </div>
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-[100%] md:w-[47%] lg:w-[21%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">3</span>
                  <img src={step3} alt="" />
                </div>
                <p>Выполняйте тренировки, разработанные специально для вас</p>
              </div>
              <div className="flex items-center flex-col bg-white rounded-[20px] lg:rounded-[40px] xl:rounded-[30%] border-2 border-[#e4e4e4] px-7 pb-10 text-center w-[100%] md:w-[47%] lg:w-[21%]">
                <div className="flex items-center transform translate-y-[-45%]">
                  <span className="text-[40px] lg:text-[45px] mr-[5px]">4</span>
                  <img src={step4} alt="" />
                </div>
                <p>Будьте очень мотивированы в время еженедельных проверок</p>
              </div>
            </div>
          </section>

          <section className="mt-8 w-fullp-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform hover:translate-y-[-10px] hover:opacity-40">
                <p className="text-[30px]">
                  <strong>Подберем проверенного тренера</strong> на базе вашего
                  запроса
                </p>
                <img src={features1} alt="icon" className="w-[80px]" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform hover:translate-y-[-10px] hover:opacity-40">
                <p className="text-purple-600 text-[30px]">
                  <strong>Гибкое расписание.</strong> Наши тренера работают в
                  онлайн режиме 24/7
                </p>
                <img src={features2} alt="icon" className="w-[80px]" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform hover:translate-y-[-10px] hover:opacity-40">
                <p className="text-[30px]">
                  <strong>Высокая вовлеченность тренера</strong> и контроль
                  техники.
                </p>
                <img src={features3} alt="icon" className="w-[80px]" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform hover:translate-y-[-10px] hover:opacity-40">
                <p className="text-purple-600 text-[30px]">
                  <strong>Наши тренера дадут максимальную поддержку</strong> и
                  заботу о вас
                </p>
                <img src={features4} alt="icon" className="w-[80px]" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-[30px] py-5 px-10 bg-white border-1 border-[#e4e4e4] transition-all transform hover:translate-y-[-10px] hover:opacity-40">
                <p className="text-[30px]">
                  <strong>Мы подготовим персональную программу</strong> под ваши
                  особенности и предпочтения
                </p>
                <img src={features5} alt="icon" className="w-[80px]" />
              </div>
            </div>
          </section>

          <section className="mt-8 w-full">
            <h2 className="text-[50px] font-[500] text-gray-900 mb-4 text-center">
              Отзывы наших клиентов:
            </h2>
            <div className="mx-auto">
              <Slider {...settings} className="w-full mx-auto">
                <div>
                  <img
                    src={Testimonial1}
                    alt="Review 1"
                    className="w-[600px] rounded-lg mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={Testimonial1}
                    alt="Review 1"
                    className="w-[600px] rounded-lg mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={Testimonial1}
                    alt="Review 1"
                    className="w-[600px] rounded-lg mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={Testimonial1}
                    alt="Review 1"
                    className="w-[600px] rounded-lg mx-auto"
                  />
                </div>
              </Slider>
            </div>
          </section>

          <section className="mt-8 w-full p-6 text-center">
            <img
              src={threeHundred}
              alt="threeHundred"
              className="mx-auto max-w-[900px] w-full"
            />
            <h2 className="text-3xl font-[500] text-gray-900">
              Мы обладаем всеми возможными знаниями, которые идеально подойдут
              именно вам!
            </h2>
            <p className="text-gray-700 mt-2 text-3xl">
              От бодибилдинга до послеродового периода, гормональных и
              медицинских проблем.
            </p>
            <button className="cursor-pointer mt-10 mb-3 px-15 py-6 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 font-[500] text-[35px]">
              Получить
            </button>
            <p className="text-gray-500 mt-2 text-2xl">
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
