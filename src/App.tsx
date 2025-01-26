// App.tsx

import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState("");

  const handleContactSubmit = () => {
    setStep(4); // Переход к следующему шагу
  };

  const handleTrainerSelect = (trainer: string) => {
    setSelectedTrainer(trainer);
    setStep(5); // Переход к выбору тарифа
  };

  const handlePayment = () => {
    setStep(6); // Переход к экрану оплаты
  };

  return (
    <div className="App">
      {/* Рекламный баннер */}
      <div className="banner">
        <h2>
          Болит спина? Ответьте на 5 вопросов и получите идеальную программу
          тренировок.
        </h2>
      </div>

      {/* Шаг 1 - Прохождение квиза */}
      {step === 1 && (
        <div>
          <h2>Ответьте на 5 вопросов и получите программу</h2>
          {/* Здесь можно вставить форму квиза, например, с вопросами */}
          <button onClick={() => setStep(2)}>Перейти к анкете</button>
        </div>
      )}

      {/* Шаг 2 - Получение программы */}
      {step === 2 && (
        <div>
          <h3>Ваша программа с записанными видео уже готова!</h3>
          <img
            src="path_to_image"
            alt="Мини-апп"
            style={{ filter: "blur(10px)" }}
          />
          <p>
            Перейдите по данной ссылке или просто оставьте ваш номер, чтобы мы
            могли вам прислать программу.
          </p>
          <input
            type="tel"
            placeholder="Введите номер"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <button onClick={handleContactSubmit}>Отправить</button>
        </div>
      )}

      {/* Шаг 3 - Ускорение с тренером */}
      {step === 3 && (
        <div>
          <h2>
            Тренировки с тренером ускоряют избавление от симптомов на 35%.
          </h2>
          <button onClick={() => setStep(4)}>
            Подобрать тренера на основе анкеты
          </button>
        </div>
      )}

      {/* Шаг 4 - Анкеты тренеров */}
      {step === 4 && (
        <div>
          <h2>Выберите тренера</h2>
          {/* Пример анкеты тренеров */}
          {["Тренер 1", "Тренер 2", "Тренер 3"].map((trainer) => (
            <div key={trainer}>
              <h3>{trainer}</h3>
              <button onClick={() => handleTrainerSelect(trainer)}>
                Выбрать
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Шаг 5 - Выбор тарифа */}
      {step === 5 && selectedTrainer && (
        <div>
          <h2>Выберите тариф для тренировки с {selectedTrainer}</h2>
          <div>
            <button onClick={handlePayment}>
              Тариф за 2 недели — 3990 руб
            </button>
            <button onClick={handlePayment}>Тариф за 1 месяц — 5990 руб</button>
            <button onClick={handlePayment}>
              Тариф за 3 месяца — 13990 руб
            </button>
          </div>
        </div>
      )}

      {/* Шаг 6 - Экран оплаты */}
      {step === 6 && (
        <div>
          <h2>Переходите к оплате через Юмани</h2>
          <button onClick={() => alert("Оплата произведена")}>
            Перейти к оплате
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
