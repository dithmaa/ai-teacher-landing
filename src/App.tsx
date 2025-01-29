import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6 text-center">
      <header className="w-full max-w-3xl">
        <img
          src="logo.png"
          alt="FitMentor Logo"
          className="mx-auto w-24 mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900">
          Приведи себя в лучшую форму своей жизни!
        </h1>
        <p className="text-gray-700 mt-2">
          Преобразуйте фитнес и питание через персональные онлайн-тренировки:
          чаты с тренером, живые видео и приложение для ваших целей.
        </p>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700">
          Записаться
        </button>
      </header>

      <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-purple-600">
          Месяц тренировок с тренером{" "}
          <span className="text-gray-900">по цене одной!</span>
        </h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6">
          Как вы будете работать со своим тренером:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <img src="icon1.png" alt="icon" className="w-10 h-10 mr-3" />
            <p>Пройдите тест и подберите идеального тренера</p>
          </div>
          <div className="flex items-center">
            <img src="icon2.png" alt="icon" className="w-10 h-10 mr-3" />
            <p>Видео-звонок для составления плана тренировок и питания</p>
          </div>
          <div className="flex items-center">
            <img src="icon3.png" alt="icon" className="w-10 h-10 mr-3" />
            <p>Выполняйте тренировки, разработанные специально для вас</p>
          </div>
          <div className="flex items-center">
            <img src="icon4.png" alt="icon" className="w-10 h-10 mr-3" />
            <p>Будьте очень мотивированы в время еженедельных проверок</p>
          </div>
        </div>
      </section>

      <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
            <p>
              <strong>Подберем проверенного тренера</strong> на базе вашего
              запроса
            </p>
            <img src="icon1.png" alt="icon" className="w-10 h-10" />
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
            <p className="text-purple-600">
              <strong>Гибкое расписание.</strong> Наши тренера работают в онлайн
              режиме 24/7
            </p>
            <img src="icon1.png" alt="icon" className="w-10 h-10" />
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
            <p>
              <strong>Высокая вовлеченность тренера</strong> и контроль техники
            </p>
            <img src="icon1.png" alt="icon" className="w-10 h-10" />
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
            <p className="text-purple-600">
              <strong>Наши тренера дадут максимальную поддержку</strong> и
              заботу о вас
            </p>
            <img src="icon1.png" alt="icon" className="w-10 h-10" />
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
            <p>
              <strong>Мы подготовим персональную программу</strong> под ваши
              особенности и предпочтения
            </p>
            <img src="icon1.png" alt="icon" className="w-10 h-10" />
          </div>
        </div>
      </section>

      <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Отзывы наших клиентов:
        </h2>
        <Swiper spaceBetween={10} slidesPerView={1} className="w-full">
          <SwiperSlide>
            <img
              src="review1.png"
              alt="Review 1"
              className="w-full rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="review2.png"
              alt="Review 2"
              className="w-full rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="review3.png"
              alt="Review 3"
              className="w-full rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="review4.png"
              alt="Review 4"
              className="w-full rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="review5.png"
              alt="Review 5"
              className="w-full rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Мы обладаем всеми возможными знаниями, которые идеально подойдут
          именно вам!
        </h2>
        <p className="text-gray-700 mt-2">
          От бодибилдинга до послеродового периода, гормональных и медицинских
          проблем.
        </p>
        <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-purple-700">
          Получить
        </button>
        <p className="text-gray-500 mt-2">
          Бесплатную персональную программу тренировок
        </p>
      </section>
    </div>
  );
};

export default App;
