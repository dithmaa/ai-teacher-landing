import { useState } from "react";
import Logo from "../assets/logo.png";
import blurImage from "../assets/blur-img.jpg";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [isError, setIsError] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // State for storing quiz answers
  const [goal, setGoal] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");
  const [fitnessChallenge, setFitnessChallenge] = useState<string>("");
  const [fitnessExperience, setFitnessExperience] = useState<string>("");

  const firstStepFunc = () => {
    setStep(2);
    setIsHeaderVisible(false);
  };

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
      setStep(7); // Переход к финальному шагу
    } else {
      setIsError(true); // Устанавливаем ошибку
    }
  };

  const handleNextStep = (nextStep: number) => {
    setStep(nextStep);
  };

  const handleGoalChange = (goal: string) => {
    setGoal((prev) => {
      if (prev.includes(goal)) {
        return prev.filter((g) => g !== goal);
      } else {
        return [...prev, goal];
      }
    });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleFitnessChallengeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFitnessChallenge(e.target.value);
  };

  const handleFitnessExperienceChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFitnessExperience(e.target.value);
  };

  return (
    <div className="App max-w-[1280px] mx-auto px-6 py-8 flex flex-col justify-center items-center min-h-screen">
      {isHeaderVisible && (
        <header className="mt-[-50px] mb-[50px] lg:mt-[-100px] lg:mb-[100px]">
          <img src={Logo} width={200} alt="FitMentor Logo" />
        </header>
      )}
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
                  onClick={firstStepFunc}
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

          {/* Шаг 2 - Цель */}
          {step === 2 && (
            <div className="text-center space-y-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-[#838383]">
                Какая у тебя цель? (Выберите несколько)
              </h3>
              <div className="space-y-4">
                {[
                  "Сбросить вес",
                  "Набрать мышечную массу",
                  "Укрепить здоровье",
                  "Держать в тонусе",
                  "Восстановление после травмы",
                  "Развитие гибкости",
                ].map((goalOption) => (
                  <div key={goalOption} className="flex items-center">
                    <input
                      type="checkbox"
                      value={goalOption}
                      onChange={() => handleGoalChange(goalOption)}
                      checked={goal.includes(goalOption)}
                    />
                    <span className="ml-2">{goalOption}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNextStep(3)}
                className="text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
                style={{
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                }}
              >
                Далее
              </button>
            </div>
          )}

          {/* Шаг 3 - Пол */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-[#838383]">
                Ваш пол?
              </h3>
              <div className="space-y-4">
                {["М", "Ж", "Предпочитаю не отвечать"].map((genderOption) => (
                  <div key={genderOption} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={genderOption}
                      onChange={handleGenderChange}
                      checked={gender === genderOption}
                    />
                    <span className="ml-2">{genderOption}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNextStep(4)}
                className="text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
                style={{
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                }}
              >
                Далее
              </button>
            </div>
          )}

          {/* Шаг 4 - Вызов в фитнесе */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-[#838383]">
                Выберите самый главный вызов в фитнесе для себя!
              </h3>
              <select
                value={fitnessChallenge}
                onChange={handleFitnessChallengeChange}
                className="w-full p-4 text-lg border-2 rounded-lg focus:outline-none"
              >
                <option value="">Выберите вызов</option>
                <option value="поддерживать мотивацию">
                  Поддерживать мотивацию
                </option>
                <option value="Находить время">Находить время</option>
                <option value="Начать">Начать</option>
                <option value="Преодолеть плато/выйти на новый уровень">
                  Преодолеть плато/выйти на новый уровень
                </option>
                <option value="Другое">Другое</option>
              </select>
              <button
                onClick={() => handleNextStep(5)}
                className="text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
                style={{
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                }}
              >
                Далее
              </button>
            </div>
          )}

          {/* Шаг 5 - Опыт в фитнесе */}
          {step === 5 && (
            <div className="text-center space-y-6">
              <h3 className="text-lg lg:text-2xl font-semibold text-[#838383]">
                Расскажите, сколько у вас опыта в фитнесе?
              </h3>
              <select
                value={fitnessExperience}
                onChange={handleFitnessExperienceChange}
                className="w-full p-4 text-lg border-2 rounded-lg focus:outline-none"
              >
                <option value="">Выберите опыт</option>
                <option value="Нет или совсем мало опыта">
                  Нет или совсем мало опыта
                </option>
                <option value="Немного опыта">Немного опыта</option>
                <option value="Много опыта">Много опыта</option>
              </select>
              <button
                onClick={() => handleNextStep(6)}
                className="text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
                style={{
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                }}
              >
                Далее
              </button>
            </div>
          )}

          {/* Шаг 6 - Ваша программа с записанными видео уже готова! */}
          {step === 6 && (
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
                    ? "border-red-500"
                    : "border-[#4f46e5] focus:ring-2 focus:ring-[#9333ea]"
                }`}
              />
              {isError && (
                <p className="text-red-500 text-sm">
                  Пожалуйста, введите правильный номер.
                </p>
              )}
              <button
                onClick={handleContactSubmit}
                className="w-full py-3 px-6 mt-6 text-white rounded-full shadow-md transform transition-all duration-300 cursor-pointer active:opacity-50"
                style={{
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                }}
              >
                Получить программу
              </button>
            </div>
          )}
          {/* Шаг 7 - Выбор тарифа */}
          {step === 7 && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#838383]">
                Выберите тариф
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => handleNextStep(8)}
                  style={{
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  }}
                  className="text-white py-3 px-6 rounded-full shadow-md w-full transform transition-all duration-300 cursor-pointer active:opacity-50"
                >
                  Тариф за 2 недели — 3990 руб
                </button>
                <button
                  onClick={() => handleNextStep(8)}
                  style={{
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  }}
                  className="text-white py-3 px-6 rounded-full shadow-md w-full transform transition-all duration-300 cursor-pointer active:opacity-50"
                >
                  Тариф за 1 месяц — 5990 руб
                </button>
                <button
                  onClick={() => handleNextStep(8)}
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

          {/* Шаг 8 - Экран оплаты */}
          {step === 8 && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#838383]">
                Переходите к оплате через Юмани
              </h2>
              <a
                href="https://yoomoney.ru/"
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
