import { useState } from "react";
import blurImage from "../assets/blur-img.jpg";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [isError, setIsError] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9+]*$/.test(value)) {
      setContact(value);
    }
    if (isError && contact.length >= 6) {
      setIsError(false); // Сброс ошибки
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.length >= 6) {
      setIsError(false); // Сброс ошибки
      setStep(3);
    } else {
      setIsError(true); // Устанавливаем ошибку
    }
  };

  const handlePayment = () => {
    setStep(4);
  };

  return (
    <div className="App max-w-[1280px] mx-auto px-6 py-8 flex justify-center items-center min-h-screen">
      <main className="space-y-8 w-full max-w-2xl">
        <form action="#">
          {/* Рекламный баннер */}
          {step === 1 && (
            <div className="text-white py-17 px-8 rounded-xl shadow-lg text-center my-[20px] main-form-plaque">
              <h2 className="text-lg lg:text-2xl font-extrabold">
                Болит спина? Ответьте на 5 вопросов и получите идеальную
                программу тренировок.
              </h2>
            </div>
          )}

          {/* Шаг 1 - Прохождение квиза */}
          {step === 1 && (
            <div className="text-center space-y-6">
              <h2 className="text-lg lg:text-2xl lg:font-semibold text-[#838383]">
                Ответьте на 5 вопросов и получите программу
              </h2>
              <div className="mt-4">
                <button
                  onClick={() => setStep(2)}
                  className="text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
                  style={{
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  }}
                >
                  Перейти к анкете
                </button>
              </div>
            </div>
          )}

          {/* Шаг 2 - Получение программы */}
          {step === 2 && (
            <div className="text-center space-y-6">
              <h3 className="text-xl lg:text-3xl font-semibold text-[#838383]">
                Ваша программа с записанными видео уже готова!
              </h3>
              <div className="bg-gray-200 h-40 w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src={blurImage}
                  alt="Мини-апп"
                  className="w-full h-full object-cover blur-[6px]"
                />
              </div>
              <p className="text-sm lg:text-lg text-[#838383]">
                Перейдите по данной ссылке или просто оставьте ваш номер, чтобы
                мы могли вам прислать программу.
              </p>
              <input
                type="tel"
                placeholder="Введите номер"
                value={contact}
                onChange={handleContactChange}
                maxLength={14}
                className={`w-full p-4 text-lg border-2 rounded-lg focus:outline-none transition duration-300  ${
                  isError
                    ? "border-red-500 focus:ring-red-500 isError"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              <button
                onClick={handleContactSubmit}
                style={{
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                }}
                className="text-white py-3 px-6 rounded-full shadow-lg w-full transform transition-all duration-300 cursor-pointer active:opacity-50"
              >
                Отправить
              </button>
            </div>
          )}

          {/* Шаг 3 - Выбор тарифа */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#838383]">
                Выберите тариф
              </h2>
              <div className="space-y-4">
                <button
                  onClick={handlePayment}
                  style={{
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  }}
                  className="text-white py-3 px-6 rounded-full shadow-md w-full transform transition-all duration-300 cursor-pointer active:opacity-50"
                >
                  Тариф за 2 недели — 3990 руб
                </button>
                <button
                  onClick={handlePayment}
                  style={{
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  }}
                  className="text-white py-3 px-6 rounded-full shadow-md w-full transform transition-all duration-300 cursor-pointer active:opacity-50"
                >
                  Тариф за 1 месяц — 5990 руб
                </button>
                <button
                  onClick={handlePayment}
                  style={{
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  }}
                  className="text-white py-3 px-6 rounded-full shadow-md w-full transform transition-all duration-300 cursor-pointer active:opacity-50"
                >
                  Тариф за 3 месяца — 13990 руб
                </button>
              </div>
            </div>
          )}

          {/* Шаг 4 - Экран оплаты */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#838383]">
                Переходите к оплате через Юмани
              </h2>
              <a
                href="https://yoomani.ru/"
                type="submit"
                style={{
                  background: "linear-gradient(to right, #34d399, #10b981)",
                }}
                className="text-white py-3 px-6 rounded-full shadow-lg w-full transform transition-all duration-300 cursor-pointer"
              >
                Перейти к оплате
              </a>
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default Quiz;
