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
import mainBg from "./assets/main-bg.png";
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
    <div className="min-h-screen flex flex-col items-center main-layout">
      <header className="w-full">
        <div className="container max-w-[90%] mx-auto my-[50px]">
          <img src={Logo} alt="FitMentor Logo" className="w-60 mb-4" />
        </div>
      </header>
      <main className="w-full">
        <div className="container max-w-[90%] mx-auto">
          <div className="main-content w-full flex">
            <div className="max-w-[630px]">
              <h1 className="text-[60px] xl:text-[75px] font-medium text-gray-900 mb-6 leading-19">
                Приведи себя <br /> в лучшую форму своей жизни!
              </h1>
              <p className="text-[#000] mt-2 text-[23px] my-5 font-[400]">
                Преобразуйте фитнес и питание через персональные
                онлайн-тренировки: чаты с тренером, живые видео и приложение для
                ваших целей.
              </p>
              <button className="cursor-pointer transform translate-x-[120px] mt-4 px-15 py-6 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 font-[500] text-[35px]">
                Записаться
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src={rubbleIcon} className="w-20 mr-5" alt="" />
            <h2 className="text-xl font-bold flex flex-col text-center">
              <span className="text-[25px]"> Месяц тренировок с тренером </span>
              <span className="text-gray-900 text-[50px]">по цене одной!</span>
            </h2>
          </div>
        </div>
      </main>

      <div className="container max-w-[90%] mx-auto">
        <section className="mt-8 w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Как вы будете работать со своим тренером:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center flex-col">
              <div className="flex items-center">
                <span>1</span>
                <img src={step1} alt="" />
              </div>
              <p>Пройдите тест и подберите идеального тренера</p>
            </div>
            <div className="flex items-center flex-col">
              <div className="flex items-center">
                <span>2</span>
                <img src={step2} alt="" />
              </div>
              <p>Видео-звонок для составления плана тренировок и питания</p>
            </div>
            <div className="flex items-center flex-col">
              <div className="flex items-center">
                <span>3</span>
                <img src={step3} alt="" />
              </div>
              <p>Выполняйте тренировки, разработанные специально для вас</p>
            </div>
            <div className="flex items-center flex-col">
              <div className="flex items-center">
                <span>4</span>
                <img src={step4} alt="" />
              </div>
              <p>Будьте очень мотивированы в время еженедельных проверок</p>
            </div>
          </div>
        </section>

        <section className="mt-8 w-full bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
              <p>
                <strong>Подберем проверенного тренера</strong> на базе вашего
                запроса
              </p>
              <img src={features1} alt="icon" className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
              <p className="text-purple-600">
                <strong>Гибкое расписание.</strong> Наши тренера работают в
                онлайн режиме 24/7
              </p>
              <img src={features2} alt="icon" className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
              <p>
                <strong>Высокая вовлеченность тренера</strong> и контроль
                техники
              </p>
              <img src={features3} alt="icon" className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
              <p className="text-purple-600">
                <strong>Наши тренера дадут максимальную поддержку</strong> и
                заботу о вас
              </p>
              <img src={features4} alt="icon" className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
              <p>
                <strong>Мы подготовим персональную программу</strong> под ваши
                особенности и предпочтения
              </p>
              <img src={features5} alt="icon" className="w-10 h-10" />
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов:
          </h2>
          <Slider {...settings} className="w-full">
            <div>
              <img
                src={Testimonial1}
                alt="Review 1"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <img
                src={Testimonial1}
                alt="Review 1"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <img
                src={Testimonial1}
                alt="Review 1"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <img
                src={Testimonial1}
                alt="Review 1"
                className="w-full rounded-lg"
              />
            </div>
          </Slider>
        </section>

        <section className="mt-8 w-full p-6 text-center">
          <img src={threeHundred} alt="threeHundred" className="mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900">
            Мы обладаем всеми возможными знаниями, которые идеально подойдут
            именно вам!
          </h2>
          <p className="text-gray-700 mt-2 text-3xl">
            От бодибилдинга до послеродового периода, гормональных и медицинских
            проблем.
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
  );
};

export default App;
