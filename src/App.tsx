import { useState } from "react";
import blurImage from "./assets/blur-img.jpg";
import { trainersData } from "./shared/constants/dummy-data";

const App = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState("");

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9+]*$/.test(value)) {
      setContact(value);
    }
  };

  const handleContactSubmit = () => {
    if (contact.length >= 6) {
      setStep(3);
    }
  };

  const handleTrainerSelect = (trainer: string) => {
    setSelectedTrainer(trainer);
    setStep(5);
  };

  const handlePayment = () => {
    setStep(6);
  };

  return (
    <div className="App max-w-[1280px] mx-auto px-6 py-8 flex justify-center items-center min-h-screen">
      <main className="space-y-8 w-full max-w-lg">
        <form action="#">
          {/* Рекламный баннер */}
          {step === 1 && (
            <div
              style={{
                background: "linear-gradient(to right, #4f46e5, #9333ea)",
              }}
              className="text-white py-6 px-8 rounded-xl shadow-lg text-center my-[20px]"
            >
              <h2 className="text-lg lg:text-2xl font-extrabold">
                Болит спина? Ответьте на 5 вопросов и получите идеальную
                программу тренировок.
              </h2>
            </div>
          )}

          {/* Шаг 1 - Прохождение квиза */}
          {step === 1 && (
            <div className="text-center space-y-6">
              <h2 className="text-lg lg:text-2xl lg:font-semibold text-[#c3c3c3]">
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
              <h3 className="text-xl lg:text-3xl font-semibold text-[#c3c3c3]">
                Ваша программа с записанными видео уже готова!
              </h3>
              <div className="bg-gray-200 h-40 w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src={blurImage}
                  alt="Мини-апп"
                  className="w-full h-full object-cover blur-[2px]"
                />
              </div>
              <p className="text-sm lg:text-lg text-[#fff]">
                Перейдите по данной ссылке или просто оставьте ваш номер, чтобы
                мы могли вам прислать программу.
              </p>
              <input
                type="tel"
                placeholder="Введите номер"
                value={contact}
                onChange={handleContactChange}
                maxLength={14}
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500 transition duration-300"
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

          {/* Шаг 3 - Ускорение с тренером */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <h2 className="text-xl font-semibold text-[#c3c3c3]">
                Тренировки с тренером ускоряют избавление от симптомов на 35%.
              </h2>
              <button
                onClick={() => setStep(4)}
                style={{
                  background: "linear-gradient(to right, #34d399, #10b981)",
                }}
                className="text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
              >
                Подобрать тренера на основе анкеты
              </button>
            </div>
          )}

          {/* Шаг 4 - Анкеты тренеров */}
          {step === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-semibold text-[#c3c3c3] text-center mb-6">
                Выберите тренера
              </h2>
              {trainersData.map((trainer) => (
                <div
                  key={trainer.name}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
                >
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {trainer.name}
                    </h3>
                    <button
                      onClick={() => handleTrainerSelect(trainer.name)}
                      style={{
                        background:
                          "linear-gradient(to right, #4f46e5, #9333ea)",
                      }}
                      className="text-white py-2 px-4 rounded-full mt-4 transform transition-all duration-300 cursor-pointer active:opacity-50"
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Шаг 5 - Выбор тарифа */}
          {step === 5 && selectedTrainer && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#c3c3c3]">
                Выберите тариф для тренировки с {selectedTrainer}
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

          {/* Шаг 6 - Экран оплаты */}
          {step === 6 && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#c3c3c3]">
                Переходите к оплате через Юмани
              </h2>
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #34d399, #10b981)",
                }}
                className="text-white py-3 px-6 rounded-full shadow-lg w-full transform transition-all duration-300 cursor-pointer"
              >
                Перейти к оплате
              </button>
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default App;
